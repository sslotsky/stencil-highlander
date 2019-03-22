import { createProviderConsumer } from "@stencil/state-tunnel";

export interface State {
  message: string;
}

export default createProviderConsumer<State>(
  {
    message: ""
  },
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
);
