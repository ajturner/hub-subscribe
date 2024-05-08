import { Component, Host, h } from '@stencil/core';
import { setAssetPath } from '@esri/calcite-components/dist/components';

// setAssetPath("./assets");
setAssetPath('https://js.arcgis.com/calcite-components/2.8.0/assets');

@Component({
  tag: 'arcgis-hub-subscribe',
  styleUrl: 'arcgis-hub-subscribe.css',
  shadow: false,
})
export class ArcgisHubSubscribe {

  componentDidLoad() {
    const button = document.querySelector('arcgis-hub-subscribe-button');
    const modal:any = document.querySelector('#example-modal');
    button.addEventListener('click', () => {
      modal.open = true;
    });
  }
  render() {
    return (
      <Host>
        <slot></slot>
        <arcgis-hub-subscribe-button></arcgis-hub-subscribe-button>
        <calcite-modal aria-labelledby="modal-title" id="example-modal">
          <div slot="header" id="modal-title">
              Create a Subscription
          </div>
          <div slot="content">
          </div>
        </calcite-modal>
        <arcgis-hub-subscribe-configuration></arcgis-hub-subscribe-configuration>

      </Host>
    );
  }

}
