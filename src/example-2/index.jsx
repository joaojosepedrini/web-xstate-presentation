import { useMachine } from '@xstate/react';
import currentMachine from './machine'

function Example() {
    const [state, send] = useMachine(currentMachine, { devTools: true });
    const { context } = state

    const isGreen = state.matches('green')
    const isYellow = state.matches('yellow')
    const isRed = state.matches('red')
    
    return <div>
        <div className='p-4 flex flex-col gap-2 items-center'>
            <div className={`w-10 h-10 rounded-full bg-red-500 ${isRed ? 'opacity-100' : 'opacity-50'}`}></div>
            <div className={`w-10 h-10 rounded-full bg-yellow-500 ${isYellow ? 'opacity-100' : 'opacity-50'}`}></div>
            <div className={`w-10 h-10 rounded-full bg-green-500 ${isGreen ? 'opacity-100' : 'opacity-50'}`}></div>
        </div>
        <div className='text-center p-4 ' >
            {isGreen && `Pode correr `}
            {isYellow && 'Pode correr mais rápido'}
            {isRed && `Parado pedinte passou ${context.count} vezes`}
            <br/><br/>

            <button className="rounded-full bg-gray-400 py-3 px-6" onClick={() => send('TOGGLE')}>Mudar</button>
        </div>
        
    </div>
}
export default Example