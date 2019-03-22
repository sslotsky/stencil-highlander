import { Component } from "@stencil/core";

import Tunnel, { State } from "../../data/tunnel";

@Component({ tag: "my-tunnel-consumer" })
export class MyTunnelConsumer {
  render() {
    return (
      <Tunnel.Consumer>
        {(state: State) => <h1>{state.message}</h1>}
      </Tunnel.Consumer>
    );
  }
}
