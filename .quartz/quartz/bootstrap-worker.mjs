#!/usr/bin/env node

// Global safe decodeURI / decodeURIComponent wrappers to prevent "URI malformed" crashes on files containing '%'
const _decodeURI = globalThis.decodeURI;
const _decodeURIComponent = globalThis.decodeURIComponent;
globalThis.decodeURI = function(str) {
  try {
    return _decodeURI(str);
  } catch {
    try {
      return _decodeURI(str.replace(/%(?![0-9a-fA-F]{2})/g, "%25"));
    } catch {
      return str;
    }
  }
};
globalThis.decodeURIComponent = function(str) {
  try {
    return _decodeURIComponent(str);
  } catch {
    try {
      return _decodeURIComponent(str.replace(/%(?![0-9a-fA-F]{2})/g, "%25"));
    } catch {
      return str;
    }
  }
};

import workerpool from "workerpool"
const cacheFile = "./.quartz-cache/transpiled-worker.mjs"
const { parseMarkdown, processHtml } = await import(cacheFile)
workerpool.worker({
  parseMarkdown,
  processHtml,
})
