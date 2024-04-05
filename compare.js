const typescript = require("typescript");
const ts = typescript;
const diff = require("diff");
require("colors");

const createProgramForFile = (filename) => {
  const program = typescript.createProgram([filename], {});
  return program;
};

const exportedSymbolsFromFile = (filename) => {
  const program = createProgramForFile(filename);
  const sourceFile = program.getSourceFile(filename);
  const checker = program.getTypeChecker();
  const fileSymbol = checker.getSymbolAtLocation(sourceFile);
  const out = [];
  if (fileSymbol && fileSymbol.exports) {
    fileSymbol.exports.forEach((symbol, name) => {
      out.push(name);
    });
    return out;
  }
};

const esbuildSymbols = exportedSymbolsFromFile("./esbuild-index.d.ts");
const rollupSymbols = exportedSymbolsFromFile("./rollup-index.d.ts");

const allSymbols = new Set([...esbuildSymbols, ...rollupSymbols]);

if (process.argv.includes("--check-symbols")) {
  console.log("CHECKING EXPORTED SYMBOLS");
  for (const symbol of allSymbols) {
    const rollup = rollupSymbols.includes(symbol) ? "✅" : "❌";
    const esbuild = esbuildSymbols.includes(symbol) ? "✅" : "❌";
    const space =
      symbol.length < 15 ? "\t\t\t" : symbol.length < 20 ? "\t\t" : "\t";
    console.log(`${symbol} ${space}rollup: ${rollup}\tesbuild: ${esbuild}`);
  }
}

function getSymbolForType(type) {
  if (type?.symbol) {
    return type.symbol;
  }
  if (type?.aliasSymbol) {
    return type.aliasSymbol;
  }
  return null;
}

function getTypeDeclaration(checker, type) {
  const maybeSymbol = getSymbolForType(type);

  const declaration = maybeSymbol?.declarations?.[0];

  if (declaration) {
    return declaration.getText();
  } else {
    // in the case that we couldn't resolve the declaration, `typeToString`
    // provides a reasonable fallback
    return typeToString(checker, type);
  }
}

const typeToString = (checker, type) => {
  const TYPE_FORMAT_FLAGS =
    ts.TypeFormatFlags.NoTruncation |
    ts.TypeFormatFlags.InTypeAlias |
    ts.TypeFormatFlags.InElementType;

  return checker.typeToString(type, undefined, TYPE_FORMAT_FLAGS);
};

const getSymbolMapForFile = (filename) => {
  const program = createProgramForFile(filename);
  const sourceFile = program.getSourceFile(filename);
  const checker = program.getTypeChecker();
  const fileSymbol = checker.getSymbolAtLocation(sourceFile);

  // maps symbolName -> string representation
  const map = {};

  fileSymbol.exports.forEach((symbol, name) => {
    const type = checker.getTypeOfSymbolAtLocation(
      symbol,
      symbol.valueDeclaration,
    );

    map[name] = getTypeDeclaration(checker, type);
  });
  return map;
};

if (process.argv.includes("--diff-interfaces")) {
  const esbuildMap = getSymbolMapForFile("./esbuild-index.d.ts");
  const rollupMap = getSymbolMapForFile("./rollup-index.d.ts");
  console.log(rollupMap);

  // for (const symbol of allSymbols) {
  //   console.log(`comparing symbol ${symbol}`);
  //   const comparison = diff.diffLines(esbuildMap[symbol], rollupMap[symbol]);

  //   comparison.forEach((part) => {
  // // green for additions, red for deletions
  // let text = part.added ? part.value.bgGreen :
  //            part.removed ? part.value.bgRed :
  //                           part.value;
  //     process.stderr.write(text);
  //   });
  //   console.log();
  // }
}
