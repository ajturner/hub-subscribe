import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arcgis-hub-subscribe-configuration',
  styleUrl: 'arcgis-hub-subscribe-configuration.css',
  shadow: true,
})
export class ArcgisHubSubscribeConfiguration {

  render() {
    return (
      <Host>
        <slot></slot>
        Config
        <arcgis-configuration-form
          disabled="false"
          is-open="true"
          is-saving="false"
          layout="fixed"
          variant="">
        </arcgis-configuration-form>
      </Host>
    );
  }

}
