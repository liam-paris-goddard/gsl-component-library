import {
  Component,
  h,
  Prop,
  Event,
  EventEmitter,
  State,
  Element,
  Host,
} from '@stencil/core';
import type { JSX } from '@stencil/core';
import Close20 from '@carbon/icons/es/close/20';
import Menu20 from '@carbon/icons/es/menu/20';
import { getAttributes, toString } from '@carbon/icon-helpers';

@Component({
  tag: 'gsl-header',
  styleUrl: 'gsl-header.scss',
  shadow: true,
})
export class GslHeader {
  /** Link the logo should direct to */
  @Prop() logoHref: string = '/';
  /** path to logo asset */
  @Prop() logoSrc: string;
  /** Page title */
  @Prop() pageTitle?: string;
  /** The id of the side–nav element so aria‑controls can target it */
  @Prop() sideNavId: string = 'gsl-side-nav';
  /** Optional alt text for the default logo */
  @Prop() logoAlt: string = 'Goddard School logo';
  /** controlled by the shell component, expanded state of side nav, to set the state of the toggle button */
  @Prop({ reflect: true }) navExpanded: boolean = false;
  /** Aria label when nav is open */
  @Prop() buttonLabelActive: string = 'Close navigation menu';
  /** Aria label when nav is closed */
  @Prop() buttonLabelInactive: string = 'Open navigation menu';

  /** True when a custom <slot name="logo"> is provided */
  @State() hasLogoSlot: boolean = false;

  /** Emitted when menuButton is toggled */
  @Event({
    eventName: 'gsl:toggle-side-nav'
  }) toggleSideNav: EventEmitter<boolean>;

  @Element() el: HTMLElement;

  menuIconString = toString({
    ...Menu20,
    attrs: getAttributes(Menu20.attrs),
  });

  closeIconString = toString({
    ...Close20,
    attrs: getAttributes(Close20.attrs),
  });


  // Should this be emitting nothing, and the shell will update it just with whatever the opposite is?
  private toggleNav = () => {
    this.toggleSideNav.emit(this.navExpanded);
  };

  render(): JSX.Element {
    const hostCls = { 'nav-open': this.navExpanded };

    return (
      <Host class={hostCls}>
        <header class="gsl-header" role="banner">
          <div class="gsl-header__left">
            {/* Menu button */}
            <button
              type="button"
              class="gsl-header__menu-button"
              aria-label={this.navExpanded ? this.buttonLabelActive : this.buttonLabelInactive}
              aria-expanded={this.navExpanded ? 'true' : 'false'}
              aria-controls={this.sideNavId}
              onClick={this.toggleNav}
            >
              <span
                class="gsl-header__icon"
                aria-hidden="true"
                innerHTML={this.navExpanded ? this.closeIconString : this.menuIconString}
              />
            </button>

            {/* Logo – slot overrides fallback img */}
            {this.hasLogoSlot ? (
              <slot
                name="logo"
                onSlotchange={e =>
                  (this.hasLogoSlot = (e.target as HTMLSlotElement).assignedNodes().length > 0)
                }
              />
            ) : (
              <a href={this.logoHref} class="gsl-header__logo">
                <img src={this.logoSrc} alt={this.logoAlt} />
              </a>
            )}

            {/* Page title */}
            {this.pageTitle && <h2 class="gsl-header__page-title">{this.pageTitle}</h2>}
          </div>

          {/* Center slot – fills available gap */}
          <div class="gsl-header__center">
            <slot name="center" />
          </div>

          {/* Right slot – hugs content */}
          <div class="gsl-header__right">
            <slot name="right-actions" />
          </div>
        </header>
      </Host>
    );
  }
}
