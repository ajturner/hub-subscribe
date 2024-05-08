import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arcgis-hub-subscribe-button',
  styleUrl: 'arcgis-hub-subscribe-button.css',
  shadow: false,
})
export class ArcgisHubSubscribeButton {

  render() {
    return (
      <Host>
        <slot></slot>
        <calcite-button>
          Subscribe
        </calcite-button>
      </Host>
    );
  }

}
