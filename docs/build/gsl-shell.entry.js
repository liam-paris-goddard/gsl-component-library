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
    logoHref;
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
        return (h("div", { key: 'a39455e365415efcf218b138b8979893ff8deec1', class: "shell" }, h("header", { key: '6c7a8838d688a876e46cd0d3ef4a92ab0cc26432', class: "header" }, h("gsl-header", { key: '88198afaf295fce0136961d77057000805ee5420', pageTitle: this.pageTitle, logoSrc: this.logoSrc, navExpanded: this.isExpanded, logoHref: this.logoHref }, h("slot", { key: '0ca125e2957b9e02abe9492a88b03444167bda37', name: "header-center", slot: "center" }), h("slot", { key: 'd9e02a21decfeb79af62d02a3e680a02a02583da', name: "header-right", slot: "right-actions" }))), h("div", { key: '192fafc246486c24ed44a7661dcb96cf80d1b3fd', class: "main" }, h("gsl-side-nav", { key: 'a0837143771bf943098083591e884936cbf10af0', navigationData: this.navigationData, currentPath: this.currentPath, locked: this.locked, isExpanded: this.isExpanded }), h("div", { key: 'e96c024137c3f2e43b01201f67e93d064515db80', class: "content-area" }, h("main", { key: '29d17fed3ad5477b43ff8d1975698fc5cd4cc8e8' }, h("slot", { key: 'c600215081f10e821a66589dd25322c4652ed704' }))))));
    }
};
GslShell.style = gslShellCss;

export { GslShell as gsl_shell };
//# sourceMappingURL=gsl-shell.entry.esm.js.map

//# sourceMappingURL=gsl-shell.entry.js.map