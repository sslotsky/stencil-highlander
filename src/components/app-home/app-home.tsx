import { Component, Prop } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  @Prop() myFunc: () => void;

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire
          apps with web components using Stencil and ionic/core! Check out the
          README for everything that comes in this starter out of the box and
          check out our docs on{" "}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <ion-button href="/profile/ionic" expand="block">
          Profile page
        </ion-button>
        <my-tunnel-provider message="Foo">
          <my-tunnel-consumer />
          <my-tunnel-provider message="Bar">
            <my-tunnel-consumer />
          </my-tunnel-provider>
        </my-tunnel-provider>
      </ion-content>
    ];
  }
}
