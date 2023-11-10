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
      after: {
        3000: {
          target: 'green',
          actions: assign({count: (ctx) => ctx.count + 1})
        }
      }
    },
    green: {
      after: {
        3000: {
          target: 'yellow',
        }
      }
    },
    yellow: {
      after: {
        1000: {
          target: 'red'
        }
        
      }
    }
  }
});

export default machine