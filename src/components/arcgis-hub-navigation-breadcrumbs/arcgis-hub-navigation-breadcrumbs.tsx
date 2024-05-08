import { Component, Host, Prop, State, h } from '@stencil/core';
import { IHubBreadcrumb, getBreadcrumbsFromPath } from '../../library/breadcrumbs';

export interface IHubNavigation {
  domain: string;
  breadcrumbs: Array<IHubBreadcrumb>;
}

@Component({
  tag: 'arcgis-hub-navigation-breadcrumbs',
  styleUrl: 'arcgis-hub-navigation-breadcrumbs.css',
  shadow: true,
})
export class ArcgisHubNavigationBreadcrumbs {

  /**
   * Structured list of breadcrumbs
   */
  @Prop() navigation: IHubNavigation = {breadcrumbs: [], domain: 'https://hub.arcgis.com'};

  /**
   * Optional URL or path to turn into breadcrumbs
   * 
   */
  @Prop() path: string = null;

  /**
   * Compile list of breadcrumbs
   */
  @State() breadcrumbs: Array<IHubBreadcrumb> = [];

  componentWillRender() {
    if(this.path) {
      console.debug('arcgis-hub-navigation-breadcrumbs: path', this.path);
      this.breadcrumbs = [...this.navigation.breadcrumbs, ...getBreadcrumbsFromPath(this.path)];
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
        {this.renderBreadcrumbs()}
      </Host>
    );
  }
  // For demo purposes
  renderShell() {
    return(
        
            <calcite-navigation slot="header">
                <calcite-navigation-logo slot="logo" description="ArcGIS Hub" heading="City of Asheville">
                </calcite-navigation-logo>
                {this.renderBreadcrumbs()}
            </calcite-navigation>
        
    )    
  }

  renderBreadcrumbs() {
    return(
      <calcite-navigation slot="navigation-secondary">
          <calcite-menu slot="content-start">
            {this.breadcrumbs.map((breadcrumb, index) => {
              return(
                <calcite-menu-item
                  breadcrumb={index !== this.breadcrumbs.length-1} // don't show the breadcrumb icon for the last item
                  active={index === this.breadcrumbs.length-1} // don't show the breadcrumb icon for the last item
                  text={breadcrumb.title}
                  href={this.createBreadcrumbHref(breadcrumb)}
                  icon-start={breadcrumb.icon} 
                  label={`${breadcrumb.title}Label`}
                  text-enabled
                ></calcite-menu-item>)
            })}
          </calcite-menu>
      </calcite-navigation>

    )
    
  }


  private createBreadcrumbHref(breadcrumb: IHubBreadcrumb) {
    let domain = this.navigation.domain;
    if (!/^https?:\/\//i.test(domain)) {
      domain = 'http://' + domain;
    }
    // return `${this.navigation.domain}/${breadcrumb.link}`;
    const url = new URL(breadcrumb.link, domain);
    return url.href;
  }
}
