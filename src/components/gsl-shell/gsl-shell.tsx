import { Component, Prop, h, State, Listen, Event, EventEmitter, Element } from '@stencil/core';
import { NavigationItem } from '../../interfaces/header-link';

@Component({
  tag: 'gsl-shell',
  styleUrl: 'gsl-shell.scss',
  shadow: true,
})
export class GslShell {
  @Element() el: HTMLElement;

  @Prop() navigationData: NavigationItem[] = [];
  @Prop() currentPath: string;
  @Prop() pageTitle: string;
  @Prop() logoSrc: string;

  @State() isExpanded: boolean = false;
  @State() locked: boolean = false;

  @Event() gslToggleSidenav: EventEmitter<{ expanded: boolean, source: 'header' | 'side-nav' }>;
  @Event() gslToggleLock: EventEmitter<{ locked: boolean, source: 'header' | 'side-nav' }>;

  componentWillLoad() {
    const storedLock = localStorage.getItem('gsl-shell-locked');
    if (storedLock !== null) {
      if (storedLock === 'true') {
        this.locked = true;
        this.isExpanded = true;
      }

    }
  }

  @Listen('gsl:toggle-side-nav')
  handleHeaderToggle() {
    this.isExpanded = !this.isExpanded;
    this.gslToggleSidenav.emit({ expanded: this.isExpanded, source: 'header' });
    if (!this.isExpanded) {
      this.handleForceUnlock();
    }
  }

  @Listen('gsl:toggle-lock')
  handleLockToggle() {
    this.locked = !this.locked;
    localStorage.setItem('gsl-shell-locked', this.locked.toString());
    this.gslToggleLock.emit({ locked: this.locked, source: 'side-nav' });
  }

  @Listen('gsl:toggle-expand')
  handleSideNavExpand() {
    this.isExpanded = true;
    this.gslToggleSidenav.emit({ expanded: true, source: 'side-nav' });
  }

  @Listen('gsl:force-unlock')
  handleForceUnlock() {
    this.locked = false;
    localStorage.setItem('gsl-shell-locked', 'false');
  }

  render() {

    return (
      <div class="shell">
        <header class="header">
          <gsl-header
            pageTitle={this.pageTitle}
            logoSrc={this.logoSrc}
            navExpanded={this.isExpanded}
          >
            <slot name="header-center" slot="center" />
            <slot name="header-right" slot="right-actions" />
          </gsl-header>
        </header>
        <div class="main">
          <gsl-side-nav
            navigationData={this.navigationData}
            currentPath={this.currentPath}
            locked={this.locked}
            isExpanded={this.isExpanded}
          />
          <div class="content-area">
            <main>
              <slot />
            </main>
          </div>
        </div>
      </div>
    );
  }
}
