import UseStateDemo from './hooks-demo/UseStateDemo'
import './App.css'
import UseEffectDemo from './hooks-demo/UseEffectDemo'
import UseContextDemo from './hooks-demo/UseContextDemo'
import UseMemoDemo from './hooks-demo/UseMemoDemo'
import UseCallbackDemo from './hooks-demo/UseCallbackDemo'
import UseRefDemo from './hooks-demo/UseRefDemo'
import UseImperativeHandleDemo from './hooks-demo/useImperativeHandleDemo'
import UseReducerDemo from './hooks-demo/UseReducerDemo'
import { Effect } from './hooks-demo/Effect'

function App() {

  return (
    < div className="container">
      <h1 className='text-primary fs-3 bold'> React Learning</h1>
      <h3> Hooks</h3>
      <hr />
      <UseStateDemo />
      <hr />
      <UseEffectDemo />
      <hr />
      <UseContextDemo/>
      <hr/>
      <UseMemoDemo/>
      <hr/>
      <UseCallbackDemo/>
      <hr/>
      <UseRefDemo />
      <hr/>
      <UseImperativeHandleDemo/>
      <hr/>
      <UseReducerDemo/>
      <hr/>
      <Effect/>
    </div>
  )
}

export default App
