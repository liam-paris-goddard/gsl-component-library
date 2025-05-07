import { r as registerInstance, a as createEvent, g as getElement, h, F as Fragment } from './index-CgoP35pI.js';

// src/utils/inline-icons.ts
function getIcon(name) {
    switch (name) {
        case 'chevron':
            return `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 11L3 6.00005L3.7 5.30005L8 9.60005L12.3 5.30005L13 6.00005L8 11Z" fill="currentColor"/>
        </svg>
      `;
        case 'pin':
            return `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.295 6.655L15 5.95L10 1L9.345 1.71L9.935 2.3L4.19 7.16L3.33 6.305L2.625 7L5.455 9.84L1 14.29L1.705 15L6.16 10.545L9 13.375L9.695 12.665L8.84 11.81L13.7 6.065L14.295 6.655ZM8.13 11.1L4.9 7.87L10.645 3L13 5.355L8.13 11.1Z" fill="current-color"/>
</svg>

      `;
        case 'pin-filled':
            return `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2929 6.65685L15 5.95L10 1L9.3429 1.7075L9.9358 2.30035L4.19 7.16125L3.33205 6.30335L2.625 7L5.4536 9.83865L1 14.2915L1.705 15L6.16055 10.5456L9 13.3741L9.69645 12.6671L8.83825 11.809L13.7002 6.06425L14.2929 6.65685Z" fill="current-color"/>
</svg>

      `;
        default:
            return '';
    }
}

const gslSideNavCss = ":host{display:block;overflow:hidden;font-family:var(--gsl-font-family, \"Ramona\", sans-serif);background-color:var(--gsl-nav-background, #002855);color:#ffffff;width:fit-content}.side-nav{display:flex;flex-direction:column;height:100%;width:64px;transition:width 0.3s ease}.side-nav.expanded{width:240px}.lock-button{padding:1rem;cursor:pointer;text-align:center;user-select:none}.lock-icon,.chevron{display:inline-block;flex-shrink:0;line-height:0;vertical-align:middle;transition:opacity 0.2s ease, transform 0.3s ease}.lock-icon svg,.chevron svg{width:100%;height:100%;display:block;fill:currentColor}.nav-items{flex:1 1 auto;overflow-y:auto;overflow-x:hidden;min-height:0}.new-featured{flex-shrink:0;padding:1rem 0;border-top:1px solid rgba(255, 255, 255, 0.2);font-weight:bold;min-height:15vh}.title{white-space:normal;word-break:break-word;flex-grow:1;min-width:0;display:flex;align-items:center;display:flex}ul{list-style:none;padding-left:0;margin:0}ul li{border-bottom:1px solid rgba(255, 255, 255, 0.2);display:flex;flex-direction:column}ul li .submenu,ul li .nav-link{display:flex;align-items:stretch;padding:0.75rem 1rem;cursor:pointer;transition:background-color 0.2s;text-decoration:none;color:white}ul li .submenu .icon,ul li .nav-link .icon{margin-right:0.75rem;display:inline-block;width:24px;height:24px;text-align:center;flex-shrink:0}ul li .submenu .title,ul li .nav-link .title{flex-grow:1}ul li .submenu .chevron,ul li .nav-link .chevron{margin-left:auto;transition:transform 0.3s;flex-shrink:0;align-self:center}ul li .submenu .chevron.rotated,ul li .nav-link .chevron.rotated{transform:rotate(180deg)}ul li .submenu{width:100%}ul li .submenu .title{font-weight:bold;text-align:left}.submenu.open .chevron{transform:rotate(180deg)}.level-1{background-color:#002855}.level-2{background-color:#003C71}.level-2 .submenu,.level-2 .nav-link{padding-left:1.25rem}.level-3{background-color:#00509D}.level-3 .submenu,.level-3 .nav-link{padding-left:1.75rem}.level-4{background-color:#336EA5}.level-4 .submenu,.level-4 .nav-link{padding-left:2.25rem}.expanded .icon{display:inline-block}.side-nav:not(.expanded) .icon{display:block;margin:0 auto}.side-nav:not(.expanded) .title{display:none}.side-nav:not(.expanded) .new-featured-link{display:none}.new-featured-link{text-decoration:none;display:flex;align-items:center;padding:0.5rem;cursor:pointer;font-weight:bold;color:#ffffff;white-space:nowrap}.new-featured-link .title{flex-grow:1;font-weight:bold;font-size:0.75rem}.new-featured-link .pill{background-color:#36a832;color:#fff;font-size:0.5rem;font-weight:bold;border-radius:9999px;padding:0.25rem 0.5rem;margin-right:0.75rem;text-transform:uppercase}.submenu:hover,.submenu:focus,.nav-link:hover,.nav-link:focus,.new-featured-link:hover,.new-featured-link:focus{background-color:rgba(255, 255, 255, 0.1);outline:none}.submenu:focus,.nav-link:focus,.new-featured-link:focus{box-shadow:inset 0 0 0 2px #ffffff}.lock-button:hover,.lock-button:focus{background-color:rgba(255, 255, 255, 0.1);outline:none}.lock-button:focus{box-shadow:inset 0 0 0 2px #ffffff}.lock-button,.submenu{background:none;border:none;font:inherit;padding:0.75rem;color:white;cursor:pointer}";

const GslSideNav = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gslNavigate = createEvent(this, "gslNavigate", 7);
    }
    get el() { return getElement(this); }
    // ========== Props ==========
    /** Navigation data structure, including nested links and "new/featured" section   */
    navigationData = [];
    /** String that will open the nav's submenus to the link specified. currently will be used on route navigation. only works with nav links that have hrefs  */
    currentPath;
    /** Controlled by shell component, will persist the expanded state on route navigation or reload */
    locked = false;
    /** expanded state of side nav, controlled by shell component */
    isExpanded = false;
    // ========== States ==========
    /** controls state of open menus */
    openMenus = new Map();
    // ========== Events ==========
    gslNavigate;
    // ========== Lifecycle ==========
    currentPathChanged(newPath) {
        this.expandPathToCurrentRoute(newPath);
    }
    componentWillLoad() {
        this.expandPathToCurrentRoute();
    }
    // ========== Methods ==========
    expandPathToCurrentRoute(newPath) {
        const pathToUpdate = newPath || this.currentPath;
        const openMenus = new Map();
        const findPath = (items, level = 1) => {
            for (const item of items) {
                console.warn(item.href);
                if (item.href === pathToUpdate) {
                    return true;
                }
                if (item.children && findPath(item.children, level + 1)) {
                    openMenus.set(level, item.title);
                    return true;
                }
            }
            return false;
        };
        findPath(this.navigationData, 1);
        this.openMenus = openMenus;
    }
    handleNavClick = (href, onClickAction) => {
        if (onClickAction) {
            onClickAction();
        }
        else if (href) {
            this.gslNavigate.emit({ href });
        }
        if (!this.locked) {
            this.el.dispatchEvent(new CustomEvent('gsl:force-unlock', {
                bubbles: true,
                composed: true
            }));
        }
    };
    toggleMenu = (level, title) => {
        const updated = new Map(this.openMenus);
        const isClosing = updated.get(level) === title;
        Array.from(updated.keys())
            .filter(lvl => lvl >= level)
            .forEach(lvl => updated.delete(lvl));
        // If it was not already open, then open it (replace only this level)
        if (!isClosing) {
            updated.set(level, title);
        }
        this.openMenus = updated;
    };
    isMenuOpen(level, title) {
        return this.openMenus.get(level) === title;
    }
    getLevelClass(level) {
        return `level-${level}`;
    }
    // ========== Render ==========
    render() {
        return (h("nav", { key: 'ea2e314edd1bd5a7c3cfee42606f6ed7eed4347a', class: {
                'side-nav': true,
                'expanded': this.isExpanded,
                'locked': this.locked,
            } }, h("button", { key: 'd480ffc2642b455bb5dbc64b897ddec340d5f82e', class: "lock-button", onClick: () => {
                const eventDetail = { source: 'lock-button' };
                this.el.dispatchEvent(new CustomEvent('gsl:toggle-lock', {
                    bubbles: true,
                    composed: true,
                    detail: eventDetail
                }));
                if (!this.isExpanded) {
                    this.el.dispatchEvent(new CustomEvent('gsl:toggle-expand', {
                        bubbles: true,
                        composed: true,
                        detail: { source: 'lock-button' }
                    }));
                }
            } }, "            ", h("span", { key: '3af6d8233940c1b84cc576dd5ed243b50b18f352', class: "lock-icon", innerHTML: getIcon(this.locked ? 'pin-filled' : 'pin') })), h("div", { key: '5021d02e8d7e5f264788dbc9b31c564808a3bb4d', class: "nav-items" }, this.renderNavigation(this.navigationData.filter(item => !item.isNew && !item.isFeatured), 1)), h("div", { key: 'e5da6965c7eab1903897eee5bf04b59871eaf512', class: "new-featured" }, this.navigationData
            .filter(item => item.isNew || item.isFeatured)
            .map(item => (h("a", { class: "new-featured-link", href: item.href, target: item.target || '_self', onClick: e => {
                if (item.onClickAction) {
                    e.preventDefault();
                    item.onClickAction();
                    this.handleNavClick(undefined, item.onClickAction);
                }
                else {
                    this.handleNavClick(item.href);
                }
            } }, (item.isNew || item.isFeatured) && (h("span", { class: "pill" }, item.isNew ? 'New' : 'Featured')), h("span", { class: "title" }, item.title)))))));
    }
    renderNavigation(items, level) {
        return (h("ul", { class: this.getLevelClass(level) }, items.map(item => (h("li", null, item.children?.length ? (h("button", { class: {
                'submenu': true,
                'open': this.isMenuOpen(level, item.title)
            }, onClick: () => {
                if (this.isExpanded) {
                    return this.toggleMenu(level, item.title);
                }
                else {
                    this.el.dispatchEvent(new CustomEvent('gsl:toggle-expand', {
                        bubbles: true,
                        composed: true,
                        detail: { source: 'submenu-icon' }
                    }));
                }
            } }, item.icon && (h("img", { class: "icon", src: item.icon, alt: `${item.title} icon` })), this.isExpanded && h("span", { class: "title" }, item.title), this.isExpanded && (h("span", { class: {
                'chevron': true,
                'rotated': this.isMenuOpen(level, item.title)
            }, innerHTML: getIcon('chevron') })))) : (h(Fragment, null, item.href ? (h("a", { class: "nav-link", href: item.href, target: item.target || '_self', onClick: e => {
                if (item.onClickAction) {
                    e.preventDefault(); // Stop normal navigation
                    item.onClickAction();
                    this.handleNavClick(undefined, item.onClickAction);
                }
                else {
                    this.handleNavClick(item.href);
                }
            }, title: item.title }, item.icon && (h("img", { class: "icon", src: item.icon, alt: `${item.title} icon` })), this.isExpanded && h("span", { class: "title" }, item.title))) : (h("button", { class: "nav-link", onClick: () => this.handleNavClick(undefined, item.onClickAction), title: item.title }, item.icon && (h("img", { class: "icon", src: item.icon, alt: `${item.title} icon` })), this.isExpanded && h("span", { class: "title" }, item.title))))), item.children && this.isExpanded && this.isMenuOpen(level, item.title) && (h("div", { class: "submenu-children" }, this.renderNavigation(item.children, level + 1))))))));
    }
    static get watchers() { return {
        "currentPath": ["currentPathChanged"]
    }; }
};
GslSideNav.style = gslSideNavCss;

export { GslSideNav as gsl_side_nav };
//# sourceMappingURL=gsl-side-nav.entry.esm.js.map

//# sourceMappingURL=gsl-side-nav.entry.js.map