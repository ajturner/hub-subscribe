import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arcgis-hub-navigation-breadcrumb',
  styleUrl: 'arcgis-hub-navigation-breadcrumb.css',
  shadow: true,
})
export class ArcgisHubNavigationBreadcrumb {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
