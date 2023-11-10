import { assign, createMachine } from 'xstate';
import { inspect } from "@xstate/inspect";

inspect({
  url: "https://statecharts.io/inspect",
  iframe: false
});

export const machine = createMachine({
  initial: 'red',
  context: {
    count: 0
  },
  states: {
    red: {
      on: {
        target: 'green',
        actions: assign({count: (ctx) => ctx.count + 1})
      }
    },
    green: {
      on: {
        TOGGLE: {
          target: 'yellow',
        }
        
      }
    },
    yellow: {
      on: {
        TOGGLE: 'red',
      }
    }
  }
});

export default machine