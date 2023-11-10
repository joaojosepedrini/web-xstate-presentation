import { assign, createMachine } from 'xstate';
import { inspect } from "@xstate/inspect";

inspect({
  url: "https://statecharts.io/inspect",
  iframe: false
});

const performTest = async function () {
  console.log('Start Processing')
  await new Promise(r => setTimeout(r, 2000));
  console.log('End Processing')
  return true
}

export const machine = createMachine({
  initial: 'inactive',
  context: {
    count: 0
  },
  states: {
    inactive: {
      on: {
        TOGGLE: 'pending'
      }
    },
    pending: {
      invoke: {
        src: performTest,
        onDone: 'active',
        onError: 'inactive'
      },
      on: {
        TOGGLE: 'inactive'
      }
    },
    active: {
      on: {
        TOGGLE: 'inactive'
      }
    }
  }
});

export default machine