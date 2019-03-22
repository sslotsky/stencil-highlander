import { Component, Prop } from "@stencil/core";

import Tunnel from "../../data/tunnel";

@Component({ tag: "my-tunnel-provider" })
export class MyTunnelProvider {
  @Prop() message: string;

  render() {
    return (
      <Tunnel.Provider state={{ message: this.message }}>
        <slot />
      </Tunnel.Provider>
    );
  }
}
