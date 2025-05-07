import { Component, Prop, State, Event, EventEmitter, h, Fragment, Watch, Element } from '@stencil/core';
import { NavigationItem } from '../../interfaces/header-link';
import { getIcon } from '../../utils/inline-icons';



@Component({
  tag: 'gsl-side-nav',
  styleUrl: 'gsl-side-nav.scss',
  shadow: true
})
export class GslSideNav {

  @Element() el: HTMLElement;

  // ========== Props ==========
  /** Navigation data structure, including nested links and "new/featured" section   */
  @Prop() navigationData: NavigationItem[] = [];
  /** String that will open the nav's submenus to the link specified. currently will be used on route navigation. only works with nav links that have hrefs  */
  @Prop() currentPath: string;
  /** Controlled by shell component, will persist the expanded state on route navigation or reload */
  @Prop() locked: boolean = false;
  /** expanded state of side nav, controlled by shell component */
  @Prop({ reflect: true }) isExpanded: boolean = false;
  // ========== States ==========

  /** controls state of open menus */
  @State() openMenus: Map<number, string> = new Map();

  // ========== Events ==========
  @Event() gslNavigate: EventEmitter<{ href: string }>;
  // ========== Lifecycle ==========

  @Watch('currentPath')
  currentPathChanged(newPath: string) {
    this.expandPathToCurrentRoute(newPath);
  }
  componentWillLoad() {
    this.expandPathToCurrentRoute()
  }

  // ========== Methods ==========


  private expandPathToCurrentRoute(newPath?: string) {
    const pathToUpdate = newPath || this.currentPath
    const openMenus = new Map<number, string>();
    const findPath = (items: NavigationItem[], level = 1): boolean => {
      for (const item of items) {
        console.warn(item.href)
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


  private handleNavClick = (href?: string, onClickAction?: () => void) => {
    if (onClickAction) {
      onClickAction();
    } else if (href) {
      this.gslNavigate.emit({ href });
    }
    if (!this.locked) {
      this.el.dispatchEvent(new CustomEvent('gsl:force-unlock', {
        bubbles: true,
        composed: true
      }));
    }
  };

  private toggleMenu = (level: number, title: string) => {
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

  private isMenuOpen(level: number, title: string) {
    return this.openMenus.get(level) === title;
  }

  private getLevelClass(level: number) {
    return `level-${level}`;
  }

  // ========== Render ==========
  render() {
    return (
      <nav
        class={{
          'side-nav': true,
          'expanded': this.isExpanded,
          'locked': this.locked,
        }}
      >
        {/* Lock Button */}
        <button
          class="lock-button"
          onClick={() => {
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
          }}
        >            <span class="lock-icon" innerHTML={getIcon(this.locked ? 'lock-closed' : 'lock-open')}></span>
        </button>

        {/* Navigation Items */}
        <div class="nav-items">
          {this.renderNavigation(this.navigationData.filter(item => !item.isNew && !item.isFeatured), 1)}
        </div>

        <div class="new-featured">
          {this.navigationData
            .filter(item => item.isNew || item.isFeatured)
            .map(item => (
              <a
                class="new-featured-link"
                href={item.href}
                target={item.target || '_self'}
                onClick={e => {
                  if (item.onClickAction) {
                    e.preventDefault();
                    item.onClickAction();
                    this.handleNavClick(undefined, item.onClickAction);
                  } else {
                    this.handleNavClick(item.href);
                  }
                }}
              >
                {(item.isNew || item.isFeatured) && (
                  <span class="pill">{item.isNew ? 'New' : 'Featured'}</span>
                )}
                <span class="title">{item.title}</span>
              </a>
            ))}
        </div>
      </nav>
    );
  }

  private renderNavigation(items: NavigationItem[], level: number) {
    return (
      <ul class={this.getLevelClass(level)}>
        {items.map(item => (
          <li>
            {item.children?.length ? (
              <button
                class={{
                  'submenu': true,
                  'open': this.isMenuOpen(level, item.title)
                }}
                onClick={() => {
                  if (this.isExpanded) {
                    return this.toggleMenu(level, item.title)
                  } else {
                    this.el.dispatchEvent(new CustomEvent('gsl:toggle-expand', {
                      bubbles: true,
                      composed: true,
                      detail: { source: 'submenu-icon' }
                    }));
                  }
                }}
              >
                {item.icon && (
                  <img class="icon" src={item.icon} alt={`${item.title} icon`} />
                )}
                {this.isExpanded && <span class="title">{item.title}</span>}
                {this.isExpanded && (
                  <span
                    class={{
                      'chevron': true,
                      'rotated': this.isMenuOpen(level, item.title)
                    }}
                    innerHTML={getIcon('chevron')}
                  ></span>
                )}
              </button>
            ) : (
              <>{
                item.href ? (
                  <a
                    class="nav-link"
                    href={item.href}
                    target={item.target || '_self'}
                    onClick={e => {
                      if (item.onClickAction) {
                        e.preventDefault(); // Stop normal navigation
                        item.onClickAction();
                        this.handleNavClick(undefined, item.onClickAction);
                      } else {
                        this.handleNavClick(item.href);
                      }
                    }}
                    title={item.title}>
                    {item.icon && (
                      <img class="icon" src={item.icon} alt={`${item.title} icon`} />
                    )}
                    {this.isExpanded && <span class="title">{item.title}</span>}
                  </a>
                ) : (
                  <button
                    class="nav-link"
                    onClick={() => this.handleNavClick(undefined, item.onClickAction)}
                    title={item.title}>
                    {item.icon && (
                      <img class="icon" src={item.icon} alt={`${item.title} icon`} />
                    )}
                    {this.isExpanded && <span class="title">{item.title}</span>}
                  </button>
                )
              }</>
            )}
            {item.children && this.isExpanded && this.isMenuOpen(level, item.title) && (
              <div class="submenu-children">
                {this.renderNavigation(item.children, level + 1)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  }
}
