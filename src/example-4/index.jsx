import { useMachine } from '@xstate/react';
import currentMachine from './machine'

function Example() {
    const [state, send] = useMachine(currentMachine, { devTools: true });
    const isSelected = state.matches('active')
    const isPending = state.matches('pending')
    
    
    return <div>
        <div>
            <label className={"relative inline-flex items-center cursor-pointer " + (isPending && 'opacity-40')} onClick={() => send('TOGGLE')}>
                <input type="checkbox" value="" className="sr-only peer" disabled={true} checked={isSelected} onChange={(e)=>{}} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 ">Toggle me</span>
            </label>
        </div>
        <div>
            Current state: {state.value}
        </div>
    </div>
}
export default Example