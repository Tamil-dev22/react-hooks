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
import EventHandling from './events/EventHandling'
import Form from './forms/Form'
import Dashboard from './contextAPI/Dashboard'
import UserPostListFetch from './API-calls/UserPostListFetch'
import UserPostListAxios from './API-calls/UserPostListAxios'

function App() {

  return (
    < div className="container">

      <h1 className='text-primary fs-3 bold'> React Learning</h1>
      <Dashboard/>
      <UserPostListAxios/>
      {/* <UserPostListFetch/> */}
      <hr/>
      <Form/>
      <hr/>
      <h3>EventHandling</h3>

      <EventHandling />
      <hr />
      <h3> Hooks</h3>
      <hr />
      <UseStateDemo />
      <hr />
      <UseEffectDemo />
      <hr />
      <UseContextDemo />
      <hr />
      <UseMemoDemo />
      <hr />
      <UseCallbackDemo />
      <hr />
      <UseRefDemo />
      <hr />
      <UseImperativeHandleDemo />
      <hr />
      <UseReducerDemo />
      <hr />
      <Effect />
    </div>
  )
}

export default App
