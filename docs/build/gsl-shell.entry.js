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
        return (h("div", { key: '2090e847a40f8096f7f9892440f21e386eaba338', class: "shell" }, h("header", { key: '30691c014526031ab925cbf82abdd6b64abb72db', class: "header" }, h("gsl-header", { key: 'ce6bb107629d355d1eef3e41613efe19be1447f1', pageTitle: this.pageTitle, logoSrc: this.logoSrc, navExpanded: this.isExpanded }, h("slot", { key: '06d20d9f59b91c3808b95bfd38809ee6c0646152', name: "header-center", slot: "center" }), h("slot", { key: 'ef715a0085ebfaa42a389dbfdca6cdf84735bb41', name: "header-right", slot: "right-actions" }))), h("div", { key: 'fbf6ab3ad38ab181ec9c67ea7254a088cf4d7e65', class: "main" }, h("gsl-side-nav", { key: '5e52591e4d3b48cdfab4b0d44b75ee62c5d4a3d9', navigationData: this.navigationData, currentPath: this.currentPath, locked: this.locked, isExpanded: this.isExpanded }), h("div", { key: '00a5407b23f497d1c74a6d980c56f9c17e7506ce', class: "content-area" }, h("main", { key: '5df8ec14b11ceda144e97d643da650fbb07497fb' }, h("slot", { key: '5837563044e31cbb58fcef836f6fbf6d3ada3404' }))))));
    }
};
GslShell.style = gslShellCss;

export { GslShell as gsl_shell };
//# sourceMappingURL=gsl-shell.entry.esm.js.map

//# sourceMappingURL=gsl-shell.entry.js.map