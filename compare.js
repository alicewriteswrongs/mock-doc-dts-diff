const typescript = require("typescript");

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
