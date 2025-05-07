import { r as registerInstance, a as createEvent, g as getElement, h } from './index-CgoP35pI.js';

const gslShellCss = ":host{display:block;height:100vh;width:100vw}.shell{display:flex;flex-direction:column;height:100%;width:100%;overflow:hidden}.main{display:flex;flex-direction:row;flex:1 1 auto;height:calc(100% - 64px);overflow:hidden}.content-area{flex-grow:1;overflow-y:auto;height:100%;transition:margin-left 0.3s ease}main{padding:1rem}";

const GslShell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gslToggleSidenav = createEvent(this, "gslToggleSidenav", 7);
        this.gslToggleLock = createEvent(this, "gslToggleLock", 7);
    }
    get el() { return getElement(this); }
    navigationData = [];
    currentPath;
    pageTitle;
    logoSrc;
    isExpanded = false;
    locked = false;
    gslToggleSidenav;
    gslToggleLock;
    componentWillLoad() {
        const storedLock = localStorage.getItem('gsl-shell-locked');
        if (storedLock !== null) {
            if (storedLock === 'true') {
                this.locked = true;
                this.isExpanded = true;
            }
        }
    }
    handleHeaderToggle() {
        this.isExpanded = !this.isExpanded;
        this.gslToggleSidenav.emit({ expanded: this.isExpanded, source: 'header' });
        if (!this.isExpanded) {
            this.handleForceUnlock();
        }
    }
    handleLockToggle() {
        this.locked = !this.locked;
        localStorage.setItem('gsl-shell-locked', this.locked.toString());
        this.gslToggleLock.emit({ locked: this.locked, source: 'side-nav' });
    }
    handleSideNavExpand() {
        this.isExpanded = true;
        this.gslToggleSidenav.emit({ expanded: true, source: 'side-nav' });
    }
    handleForceUnlock() {
        this.locked = false;
        localStorage.setItem('gsl-shell-locked', 'false');
    }
    render() {
        return (h("div", { key: '459ddefe17c1214aabae8f6ab1d4adb689fba742', class: "shell" }, h("header", { key: '62ffde61f25900970ce21b38f82c145ccb826207', class: "header" }, h("gsl-header", { key: '132ed183b04a7970347e51422fea311ed9a98f9e', pageTitle: this.pageTitle, logoSrc: this.logoSrc, navExpanded: this.isExpanded }, h("slot", { key: '7f9f503ee34d65ceff80c06e2f2a1fd9c3948f41', name: "header-center", slot: "center" }), h("slot", { key: 'a2ca6fc1b05be1f8ac2c50758897096034d221cf', name: "header-right", slot: "right-actions" }))), h("div", { key: '199a49de653086c56d1f4b8631a46f4c69f81e55', class: "main" }, h("gsl-side-nav", { key: 'a54c34209928a97307d78f73ae2709b06a48351e', navigationData: this.navigationData, currentPath: this.currentPath, locked: this.locked, isExpanded: this.isExpanded }), h("div", { key: '1bad650a20da0e57b3303d2aa300c6953f84af63', class: "content-area" }, h("main", { key: '98e092c783d1d6bf7d69c1c379712ff243934238' }, h("slot", { key: 'ec558e78d4fd0012977ba68be11872be76275b4d' }))))));
    }
};
GslShell.style = gslShellCss;

export { GslShell as gsl_shell };
//# sourceMappingURL=gsl-shell.entry.esm.js.map

//# sourceMappingURL=gsl-shell.entry.js.map