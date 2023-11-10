import { createMachine } from 'xstate';
import { inspect } from "@xstate/inspect";

inspect({
  url: "https://statecharts.io/inspect",
  iframe: false
});

export const machine = createMachine({
  initial: 'red',
  states: {
    red: {
      on: {
        TOGGLE: 'green'
      }
    },
    green: {
      on: {
        TOGGLE: 'yellow'
      }
    },
    yellow: {
      on: {
        TOGGLE: 'red'
      }
    }
  }
});

export default machine