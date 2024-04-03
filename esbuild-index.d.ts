export declare class MockAttributeMap {
  caseInsensitive: boolean;
  __items: MockAttr[];
  constructor(caseInsensitive?: boolean);
  get length(): number;
  item(index: number): MockAttr;
  setNamedItem(attr: MockAttr): void;
  setNamedItemNS(attr: MockAttr): void;
  getNamedItem(attrName: string): MockAttr;
  getNamedItemNS(namespaceURI: string | null, attrName: string): MockAttr;
  removeNamedItem(attr: MockAttr): void;
  removeNamedItemNS(attr: MockAttr): void;
  [Symbol.iterator](): {
    next: () => {
      done: boolean;
      value: MockAttr;
    };
  };
  get [Symbol.toStringTag](): string;
}
export declare function cloneAttributes(
  srcAttrs: MockAttributeMap,
  sortByName?: boolean,
): MockAttributeMap;
export declare class MockAttr {
  private _name;
  private _value;
  private _namespaceURI;
  constructor(
    attrName: string,
    attrValue: string,
    namespaceURI?: string | null,
  );
  get name(): string;
  set name(value: string);
  get value(): string;
  set value(value: string);
  get nodeName(): string;
  set nodeName(value: string);
  get nodeValue(): string;
  set nodeValue(value: string);
  get namespaceURI(): string;
  set namespaceURI(namespaceURI: string);
}
declare class MockClassList {
  private elm;
  constructor(elm: HTMLElement);
  add(...classNames: string[]): void;
  remove(...classNames: string[]): void;
  contains(className: string): boolean;
  toggle(className: string): void;
  get length(): number;
  item(index: number): string;
  toString(): string;
}
declare class MockCSSStyleDeclaration {
  private _styles;
  setProperty(prop: string, value: string): void;
  getPropertyValue(prop: string): string;
  removeProperty(prop: string): void;
  get length(): number;
  get cssText(): string;
  set cssText(cssText: string);
}
declare class MockHistory {
  private items;
  get length(): number;
  back(): void;
  forward(): void;
  go(_value: number): void;
  pushState(_state: any, _title: string, _url: string): void;
  replaceState(_state: any, _title: string, _url: string): void;
}
declare class MockIntersectionObserver {
  constructor();
  disconnect(): void;
  observe(): void;
  takeRecords(): any[];
  unobserve(): void;
}
declare class MockLocation implements Location {
  ancestorOrigins: any;
  protocol: string;
  host: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;
  username: string;
  password: string;
  origin: string;
  private _href;
  get href(): string;
  set href(value: string);
  assign(_url: string): void;
  reload(_forcedReload?: boolean): void;
  replace(_url: string): void;
  toString(): string;
}
declare class MockNavigator {
  appCodeName: string;
  appName: string;
  appVersion: string;
  platform: string;
  userAgent: string;
}
declare class MockStorage {
  private items;
  key(_value: number): void;
  getItem(key: string): string;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  clear(): void;
}
declare const nativeClearInterval: typeof clearInterval;
declare const nativeClearTimeout: typeof clearTimeout;
declare const nativeSetInterval: typeof setInterval;
declare const nativeSetTimeout: typeof setTimeout;
export declare class MockWindow {
  __timeouts: Set<any>;
  __history: MockHistory;
  __elementCstr: any;
  __htmlElementCstr: any;
  __charDataCstr: any;
  __docTypeCstr: any;
  __docCstr: any;
  __docFragCstr: any;
  __domTokenListCstr: any;
  __nodeCstr: any;
  __nodeListCstr: any;
  __localStorage: MockStorage;
  __sessionStorage: MockStorage;
  __location: MockLocation;
  __navigator: MockNavigator;
  __clearInterval: typeof nativeClearInterval;
  __clearTimeout: typeof nativeClearTimeout;
  __setInterval: typeof nativeSetInterval;
  __setTimeout: typeof nativeSetTimeout;
  __maxTimeout: number;
  __allowInterval: boolean;
  URL: typeof URL;
  console: Console;
  customElements: CustomElementRegistry;
  document: Document;
  performance: Performance;
  devicePixelRatio: number;
  innerHeight: number;
  innerWidth: number;
  pageXOffset: number;
  pageYOffset: number;
  screen: Screen;
  screenLeft: number;
  screenTop: number;
  screenX: number;
  screenY: number;
  scrollX: number;
  scrollY: number;
  CustomEvent: typeof MockCustomEvent;
  Event: typeof MockEvent;
  Headers: typeof MockHeaders;
  FocusEvent: typeof MockFocusEvent;
  KeyboardEvent: typeof MockKeyboardEvent;
  MouseEvent: typeof MockMouseEvent;
  constructor(html?: string | boolean);
  addEventListener(type: string, handler: (ev?: any) => void): void;
  alert(msg: string): void;
  blur(): any;
  cancelAnimationFrame(id: any): void;
  cancelIdleCallback(id: any): void;
  get CharacterData(): any;
  set CharacterData(charDataCstr: any);
  clearInterval(id: any): void;
  clearTimeout(id: any): void;
  close(): void;
  confirm(): boolean;
  get CSS(): {
    supports: () => boolean;
  };
  get Document(): any;
  set Document(docCstr: any);
  get DocumentFragment(): any;
  set DocumentFragment(docFragCstr: any);
  get DocumentType(): any;
  set DocumentType(docTypeCstr: any);
  get DOMTokenList(): any;
  set DOMTokenList(domTokenListCstr: any);
  dispatchEvent(ev: MockEvent): boolean;
  get Element(): any;
  fetch(input: any, init?: any): any;
  focus(): any;
  getComputedStyle(_: any): any;
  get globalThis(): this;
  get history(): any;
  set history(hsty: any);
  get JSON(): JSON;
  get HTMLElement(): any;
  set HTMLElement(htmlElementCstr: any);
  get IntersectionObserver(): typeof MockIntersectionObserver;
  get localStorage(): MockStorage;
  set localStorage(locStorage: MockStorage);
  get location(): MockLocation;
  set location(val: Location | string);
  matchMedia(media: string): {
    media: string;
    matches: boolean;
    addListener: (_handler: (ev?: any) => void) => void;
    removeListener: (_handler: (ev?: any) => void) => void;
    addEventListener: (_type: string, _handler: (ev?: any) => void) => void;
    removeEventListener: (_type: string, _handler: (ev?: any) => void) => void;
    dispatchEvent: (_ev: any) => void;
    onchange: (this: MediaQueryList, ev: MediaQueryListEvent) => any;
  };
  get Node(): any;
  get NodeList(): any;
  get navigator(): any;
  set navigator(nav: any);
  get parent(): any;
  prompt(): string;
  open(): any;
  get origin(): string;
  removeEventListener(type: string, handler: any): void;
  requestAnimationFrame(callback: (timestamp: number) => void): number;
  requestIdleCallback(
    callback: (deadline: {
      didTimeout: boolean;
      timeRemaining: () => number;
    }) => void,
  ): number;
  scroll(_x?: number, _y?: number): void;
  scrollBy(_x?: number, _y?: number): void;
  scrollTo(_x?: number, _y?: number): void;
  get self(): this;
  get sessionStorage(): any;
  set sessionStorage(locStorage: any);
  setInterval(
    callback: (...args: any[]) => void,
    ms: number,
    ...args: any[]
  ): number;
  setTimeout(
    callback: (...args: any[]) => void,
    ms: number,
    ...args: any[]
  ): number;
  get top(): this;
  get window(): this;
  onanimationstart(): void;
  onanimationend(): void;
  onanimationiteration(): void;
  onabort(): void;
  onauxclick(): void;
  onbeforecopy(): void;
  onbeforecut(): void;
  onbeforepaste(): void;
  onblur(): void;
  oncancel(): void;
  oncanplay(): void;
  oncanplaythrough(): void;
  onchange(): void;
  onclick(): void;
  onclose(): void;
  oncontextmenu(): void;
  oncopy(): void;
  oncuechange(): void;
  oncut(): void;
  ondblclick(): void;
  ondrag(): void;
  ondragend(): void;
  ondragenter(): void;
  ondragleave(): void;
  ondragover(): void;
  ondragstart(): void;
  ondrop(): void;
  ondurationchange(): void;
  onemptied(): void;
  onended(): void;
  onerror(): void;
  onfocus(): void;
  onfocusin(): void;
  onfocusout(): void;
  onformdata(): void;
  onfullscreenchange(): void;
  onfullscreenerror(): void;
  ongotpointercapture(): void;
  oninput(): void;
  oninvalid(): void;
  onkeydown(): void;
  onkeypress(): void;
  onkeyup(): void;
  onload(): void;
  onloadeddata(): void;
  onloadedmetadata(): void;
  onloadstart(): void;
  onlostpointercapture(): void;
  onmousedown(): void;
  onmouseenter(): void;
  onmouseleave(): void;
  onmousemove(): void;
  onmouseout(): void;
  onmouseover(): void;
  onmouseup(): void;
  onmousewheel(): void;
  onpaste(): void;
  onpause(): void;
  onplay(): void;
  onplaying(): void;
  onpointercancel(): void;
  onpointerdown(): void;
  onpointerenter(): void;
  onpointerleave(): void;
  onpointermove(): void;
  onpointerout(): void;
  onpointerover(): void;
  onpointerup(): void;
  onprogress(): void;
  onratechange(): void;
  onreset(): void;
  onresize(): void;
  onscroll(): void;
  onsearch(): void;
  onseeked(): void;
  onseeking(): void;
  onselect(): void;
  onselectstart(): void;
  onstalled(): void;
  onsubmit(): void;
  onsuspend(): void;
  ontimeupdate(): void;
  ontoggle(): void;
  onvolumechange(): void;
  onwaiting(): void;
  onwebkitfullscreenchange(): void;
  onwebkitfullscreenerror(): void;
  onwheel(): void;
}
export declare function cloneWindow(
  srcWin: Window,
  opts?: {
    customElementProxy?: boolean;
  },
): MockWindow | null;
export declare function cloneDocument(srcDoc: Document): Document;
/**
 * Constrain setTimeout() to 1ms, but still async. Also
 * only allow setInterval() to fire once, also constrained to 1ms.
 * @param win the mock window instance to update
 */
export declare function constrainTimeouts(win: any): void;
declare class MockEvent {
  bubbles: boolean;
  cancelBubble: boolean;
  cancelable: boolean;
  composed: boolean;
  currentTarget: MockElement;
  defaultPrevented: boolean;
  srcElement: MockElement;
  target: MockElement;
  timeStamp: number;
  type: string;
  constructor(type: string, eventInitDict?: EventInit);
  preventDefault(): void;
  stopPropagation(): void;
  stopImmediatePropagation(): void;
  /**
   * @ref https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath
   * @returns a composed path of the event
   */
  composedPath(): MockElement[];
}
export declare class MockCustomEvent extends MockEvent {
  detail: any;
  constructor(type: string, customEventInitDic?: CustomEventInit);
}
export declare class MockKeyboardEvent extends MockEvent {
  code: string;
  key: string;
  altKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  shiftKey: boolean;
  location: number;
  repeat: boolean;
  constructor(type: string, keyboardEventInitDic?: KeyboardEventInit);
}
export declare class MockMouseEvent extends MockEvent {
  screenX: number;
  screenY: number;
  clientX: number;
  clientY: number;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
  button: number;
  buttons: number;
  relatedTarget: EventTarget$1;
  constructor(type: string, mouseEventInitDic?: MouseEventInit);
}
declare class MockUIEvent extends MockEvent {
  detail: number | null;
  view: MockWindow | null;
  constructor(type: string, uiEventInitDic?: UIEventInit);
}
declare class MockFocusEvent extends MockUIEvent {
  relatedTarget: EventTarget$1 | null;
  constructor(type: "blur" | "focus", focusEventInitDic?: FocusEventInit);
}
declare class MockEventListener {
  type: string;
  handler: (ev?: any) => void;
  constructor(type: string, handler: any);
}
interface EventTarget$1 {
  __listeners: MockEventListener[];
}
/**
 * Serialize a node (either a DOM node or a mock-doc node) to an HTML string
 *
 * @param elm the node to serialize
 * @param opts options to control serialization behavior
 * @returns an html string
 */
export declare function serializeNodeToHtml(
  elm: Node | MockNode,
  opts?: SerializeNodeToHtmlOptions,
): string;
export interface SerializeNodeToHtmlOptions {
  approximateLineWidth?: number;
  excludeTagContent?: string[];
  excludeTags?: string[];
  indentSpaces?: number;
  newLines?: boolean;
  outerHtml?: boolean;
  prettyHtml?: boolean;
  removeAttributeQuotes?: boolean;
  removeBooleanAttributeQuotes?: boolean;
  removeEmptyAttributes?: boolean;
  removeHtmlComments?: boolean;
  serializeShadowRoot?: boolean;
}
export declare class MockNode {
  private _nodeValue;
  nodeName: string | null;
  nodeType: number;
  ownerDocument: any;
  parentNode: MockNode | null;
  childNodes: MockNode[];
  constructor(
    ownerDocument: any,
    nodeType: number,
    nodeName: string | null,
    nodeValue: string | null,
  );
  appendChild(newNode: MockNode): MockNode;
  append(...items: (MockNode | string)[]): void;
  prepend(...items: (MockNode | string)[]): void;
  cloneNode(deep?: boolean): MockNode;
  compareDocumentPosition(_other: MockNode): number;
  get firstChild(): MockNode | null;
  insertBefore(newNode: MockNode, referenceNode: MockNode): MockNode;
  get isConnected(): boolean;
  isSameNode(node: any): boolean;
  get lastChild(): MockNode | null;
  get nextSibling(): MockNode | null;
  get nodeValue(): string;
  set nodeValue(value: string);
  get parentElement(): any;
  set parentElement(value: any);
  get previousSibling(): MockNode | null;
  contains(otherNode: MockNode): boolean;
  removeChild(childNode: MockNode): MockNode;
  remove(): void;
  replaceChild(newChild: MockNode, oldChild: MockNode): MockNode;
  get textContent(): string;
  set textContent(value: string);
  static ELEMENT_NODE: number;
  static TEXT_NODE: number;
  static PROCESSING_INSTRUCTION_NODE: number;
  static COMMENT_NODE: number;
  static DOCUMENT_NODE: number;
  static DOCUMENT_TYPE_NODE: number;
  static DOCUMENT_FRAGMENT_NODE: number;
}
type MockElementInternals = Record<keyof ElementInternals, null>;
export declare class MockElement extends MockNode {
  __namespaceURI: string | null;
  __attributeMap: MockAttributeMap | null | undefined;
  __shadowRoot: ShadowRoot | null | undefined;
  __style: MockCSSStyleDeclaration | null | undefined;
  attachInternals(): MockElementInternals;
  constructor(
    ownerDocument: any,
    nodeName: string | null,
    namespaceURI?: string | null,
  );
  addEventListener(type: string, handler: (ev?: any) => void): void;
  attachShadow(_opts: ShadowRootInit): any;
  blur(): void;
  get localName(): string;
  get namespaceURI(): string;
  get shadowRoot(): any;
  set shadowRoot(shadowRoot: any);
  get attributes(): MockAttributeMap;
  set attributes(attrs: MockAttributeMap);
  get children(): MockElement[];
  get childElementCount(): number;
  get className(): string;
  set className(value: string);
  get classList(): MockClassList;
  click(): void;
  cloneNode(_deep?: boolean): MockElement;
  closest(selector: string): this;
  get dataset(): any;
  get dir(): string;
  set dir(value: string);
  dispatchEvent(ev: MockEvent): boolean;
  get firstElementChild(): MockElement | null;
  focus(_options?: { preventScroll?: boolean }): void;
  getAttribute(attrName: string): any;
  getAttributeNS(namespaceURI: string | null, attrName: string): string;
  getAttributeNode(attrName: string): MockAttr | null;
  getBoundingClientRect(): {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
    x: number;
    y: number;
  };
  getRootNode(opts?: { composed?: boolean; [key: string]: any }): Node;
  get draggable(): boolean;
  set draggable(value: boolean);
  hasChildNodes(): boolean;
  get id(): string;
  set id(value: string);
  get innerHTML(): string;
  set innerHTML(html: string);
  get innerText(): string;
  set innerText(value: string);
  insertAdjacentElement(
    position: "beforebegin" | "afterbegin" | "beforeend" | "afterend",
    elm: MockHTMLElement,
  ): MockHTMLElement;
  insertAdjacentHTML(
    position: "beforebegin" | "afterbegin" | "beforeend" | "afterend",
    html: string,
  ): void;
  insertAdjacentText(
    position: "beforebegin" | "afterbegin" | "beforeend" | "afterend",
    text: string,
  ): void;
  hasAttribute(attrName: string): boolean;
  hasAttributeNS(namespaceURI: string | null, name: string): boolean;
  get hidden(): boolean;
  set hidden(isHidden: boolean);
  get lang(): string;
  set lang(value: string);
  get lastElementChild(): MockElement | null;
  matches(selector: string): boolean;
  get nextElementSibling(): any;
  get outerHTML(): string;
  get previousElementSibling(): any;
  getElementsByClassName(classNames: string): MockElement[];
  getElementsByTagName(tagName: string): MockElement[];
  querySelector(selector: string): any;
  querySelectorAll(selector: string): any;
  removeAttribute(attrName: string): void;
  removeAttributeNS(namespaceURI: string | null, attrName: string): void;
  removeEventListener(type: string, handler: any): void;
  setAttribute(attrName: string, value: any): void;
  setAttributeNS(
    namespaceURI: string | null,
    attrName: string,
    value: any,
  ): void;
  get style(): any;
  set style(val: any);
  get tabIndex(): number;
  set tabIndex(value: number);
  get tagName(): string;
  set tagName(value: string);
  get textContent(): string;
  set textContent(value: string);
  get title(): string;
  set title(value: string);
  animate(): void;
  onanimationstart(): void;
  onanimationend(): void;
  onanimationiteration(): void;
  onabort(): void;
  onauxclick(): void;
  onbeforecopy(): void;
  onbeforecut(): void;
  onbeforepaste(): void;
  onblur(): void;
  oncancel(): void;
  oncanplay(): void;
  oncanplaythrough(): void;
  onchange(): void;
  onclick(): void;
  onclose(): void;
  oncontextmenu(): void;
  oncopy(): void;
  oncuechange(): void;
  oncut(): void;
  ondblclick(): void;
  ondrag(): void;
  ondragend(): void;
  ondragenter(): void;
  ondragleave(): void;
  ondragover(): void;
  ondragstart(): void;
  ondrop(): void;
  ondurationchange(): void;
  onemptied(): void;
  onended(): void;
  onerror(): void;
  onfocus(): void;
  onfocusin(): void;
  onfocusout(): void;
  onformdata(): void;
  onfullscreenchange(): void;
  onfullscreenerror(): void;
  ongotpointercapture(): void;
  oninput(): void;
  oninvalid(): void;
  onkeydown(): void;
  onkeypress(): void;
  onkeyup(): void;
  onload(): void;
  onloadeddata(): void;
  onloadedmetadata(): void;
  onloadstart(): void;
  onlostpointercapture(): void;
  onmousedown(): void;
  onmouseenter(): void;
  onmouseleave(): void;
  onmousemove(): void;
  onmouseout(): void;
  onmouseover(): void;
  onmouseup(): void;
  onmousewheel(): void;
  onpaste(): void;
  onpause(): void;
  onplay(): void;
  onplaying(): void;
  onpointercancel(): void;
  onpointerdown(): void;
  onpointerenter(): void;
  onpointerleave(): void;
  onpointermove(): void;
  onpointerout(): void;
  onpointerover(): void;
  onpointerup(): void;
  onprogress(): void;
  onratechange(): void;
  onreset(): void;
  onresize(): void;
  onscroll(): void;
  onsearch(): void;
  onseeked(): void;
  onseeking(): void;
  onselect(): void;
  onselectstart(): void;
  onstalled(): void;
  onsubmit(): void;
  onsuspend(): void;
  ontimeupdate(): void;
  ontoggle(): void;
  onvolumechange(): void;
  onwaiting(): void;
  onwebkitfullscreenchange(): void;
  onwebkitfullscreenerror(): void;
  onwheel(): void;
  requestFullscreen(): void;
  scrollBy(): void;
  scrollTo(): void;
  scrollIntoView(): void;
  toString(opts?: SerializeNodeToHtmlOptions): string;
}
export declare class MockHTMLElement extends MockElement {
  __namespaceURI: string;
  constructor(ownerDocument: any, nodeName: string);
  get tagName(): string;
  set tagName(value: string);
  /**
   * A node’s parent of type Element is known as its parent element.
   * If the node has a parent of a different type, its parent element
   * is null.
   * @returns MockElement
   */
  get parentElement(): any;
  get attributes(): MockAttributeMap;
  set attributes(attrs: MockAttributeMap);
}
export declare class MockTextNode extends MockNode {
  constructor(ownerDocument: any, text: string);
  cloneNode(_deep?: boolean): MockTextNode;
  get textContent(): string;
  set textContent(text: string);
  get data(): string;
  set data(text: string);
  get wholeText(): string;
}
export declare class MockComment extends MockNode {
  constructor(ownerDocument: any, data: string);
  cloneNode(_deep?: boolean): MockComment;
  get textContent(): string;
  set textContent(text: string);
}
export declare const enum NODE_TYPES {
  ELEMENT_NODE = 1,
  ATTRIBUTE_NODE = 2,
  TEXT_NODE = 3,
  CDATA_SECTION_NODE = 4,
  ENTITY_REFERENCE_NODE = 5,
  ENTITY_NODE = 6,
  PROCESSING_INSTRUCTION_NODE = 7,
  COMMENT_NODE = 8,
  DOCUMENT_NODE = 9,
  DOCUMENT_TYPE_NODE = 10,
  DOCUMENT_FRAGMENT_NODE = 11,
  NOTATION_NODE = 12,
}
declare class MockDocumentFragment extends MockHTMLElement {
  constructor(ownerDocument: any);
  getElementById(id: string): MockElement;
  cloneNode(deep?: boolean): MockDocumentFragment;
}
declare class MockDocumentTypeNode extends MockHTMLElement {
  constructor(ownerDocument: any);
}
export declare class MockDocument extends MockHTMLElement {
  defaultView: any;
  cookie: string;
  referrer: string;
  constructor(html?: string | boolean, win?: any);
  get dir(): string;
  set dir(value: string);
  get localName(): never;
  get location(): Location;
  set location(val: Location);
  get baseURI(): string;
  get URL(): string;
  get styleSheets(): any;
  get scripts(): any;
  get forms(): any;
  get images(): any;
  get scrollingElement(): MockHTMLElement | MockElement;
  get documentElement(): MockHTMLElement | MockElement;
  set documentElement(documentElement: MockHTMLElement | MockElement);
  get head(): MockHTMLElement | MockElement;
  set head(head: MockHTMLElement | MockElement);
  get body(): MockHTMLElement | MockElement;
  set body(body: MockHTMLElement | MockElement);
  appendChild(newNode: MockElement): MockElement;
  createComment(data: string): MockComment;
  createAttribute(attrName: string): MockAttr;
  createAttributeNS(namespaceURI: string, attrName: string): MockAttr;
  createElement(tagName: string): any;
  createElementNS(namespaceURI: string, tagName: string): any;
  createTextNode(text: string): MockTextNode;
  createDocumentFragment(): MockDocumentFragment;
  createDocumentTypeNode(): MockDocumentTypeNode;
  getElementById(id: string): MockElement;
  getElementsByName(elmName: string): MockElement[];
  get title(): string;
  set title(value: string);
}
export declare function createDocument(html?: string | boolean): Document;
export declare function createFragment(html?: string): DocumentFragment;
export declare function resetDocument(doc: Document): void;
export declare function setupGlobal(gbl: any): any;
export declare function teardownGlobal(gbl: any): void;
export declare function patchWindow(winToBePatched: any): void;
export declare class MockHeaders {
  private _values;
  constructor(init?: string[][] | Map<string, string> | any);
  append(key: string, value: string): void;
  delete(key: string): void;
  entries(): any;
  forEach(cb: (value: string, key: string) => void): void;
  get(key: string): string;
  has(key: string): boolean;
  keys(): {
    next(): {
      value: string;
      done: boolean;
    };
    [Symbol.iterator](): any;
  };
  set(key: string, value: string): void;
  values(): any;
  [Symbol.iterator](): any;
}
export declare function parseHtmlToDocument(
  html: string,
  ownerDocument?: MockDocument,
): any;
export declare function parseHtmlToFragment(
  html: string,
  ownerDocument?: MockDocument,
): any;
export type MockRequestInfo = MockRequest | string;
export interface MockRequestInit {
  body?: any;
  cache?: string;
  credentials?: string;
  headers?: any;
  integrity?: string;
  keepalive?: boolean;
  method?: string;
  mode?: string;
  redirect?: string;
  referrer?: string;
  referrerPolicy?: string;
}
export declare class MockRequest {
  private _method;
  private _url;
  bodyUsed: boolean;
  cache: string;
  credentials: string;
  headers: MockHeaders;
  integrity: string;
  keepalive: boolean;
  mode: string;
  redirect: string;
  referrer: string;
  referrerPolicy: string;
  constructor(input?: any, init?: MockRequestInit);
  get url(): string;
  set url(value: string);
  get method(): string;
  set method(value: string);
  clone(): MockRequest;
}
export interface MockResponseInit {
  headers?: any;
  ok?: boolean;
  status?: number;
  statusText?: string;
  type?: string;
  url?: string;
}
export declare class MockResponse {
  private _body;
  headers: MockHeaders;
  ok: boolean;
  status: number;
  statusText: string;
  type: string;
  url: string;
  constructor(body?: string, init?: MockResponseInit);
  json(): Promise<any>;
  text(): Promise<string>;
  clone(): MockResponse;
}

export {};
