import { B as BUILD, c as consoleDevInfo, H, w as win, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-CgoP35pI.js';
export { s as setNonce } from './index-CgoP35pI.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.29.3 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  if (BUILD.isDev && !BUILD.isTesting) {
    consoleDevInfo("Running in development mode.");
  }
  if (BUILD.cloneNodeFix) {
    patchCloneNodeFix(H.prototype);
  }
  const scriptElm = BUILD.scriptDataOpts ? win.document && Array.from(win.document.querySelectorAll("script")).find(
    (s) => new RegExp(`/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === NAMESPACE
  ) : null;
  const importMeta = import.meta.url;
  const opts = BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["gsl-header",[[1,"gsl-header",{"logoHref":[1,"logo-href"],"logoSrc":[1,"logo-src"],"pageTitle":[1,"page-title"],"sideNavId":[1,"side-nav-id"],"logoAlt":[1,"logo-alt"],"navExpanded":[516,"nav-expanded"],"buttonLabelActive":[1,"button-label-active"],"buttonLabelInactive":[1,"button-label-inactive"],"hasLogoSlot":[32]}]]],["gsl-side-nav",[[1,"gsl-side-nav",{"navigationData":[16,"navigation-data"],"currentPath":[1,"current-path"],"locked":[4],"isExpanded":[516,"is-expanded"],"openMenus":[32]},null,{"currentPath":["currentPathChanged"]}]]],["gsl-shell",[[1,"gsl-shell",{"navigationData":[16,"navigation-data"],"currentPath":[1,"current-path"],"pageTitle":[1,"page-title"],"logoSrc":[1,"logo-src"],"logoHref":[1,"logo-href"],"isExpanded":[32],"locked":[32]},[[0,"gsl:toggle-side-nav","handleHeaderToggle"],[0,"gsl:toggle-lock","handleLockToggle"],[0,"gsl:toggle-expand","handleSideNavExpand"],[0,"gsl:force-unlock","handleForceUnlock"]]]]]], options);
});
//# sourceMappingURL=gsl.esm.js.map

//# sourceMappingURL=gsl.esm.js.map