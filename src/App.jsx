import UseStateDemo from './hooks-demo/UseStateDemo'
import './App.css'
import UseEffectDemo from './hooks-demo/UseEffectDemo'
import UseContextDemo from './hooks-demo/UseContextDemo'
import UseMemoDemo from './hooks-demo/UseMemoDemo'
import UseCallbackDemo from './hooks-demo/UseCallbackDemo'

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
    </div>
  )
}

export default App
