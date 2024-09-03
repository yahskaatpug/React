import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './day-1/home.jsx'
import SampleGreeting from './day-1/sum.jsx'
import UNameExample from './day-1/uName.jsx'
import ToggleButton from './day-1/toggle-button.jsx'
import InputForm from './day-1/form.jsx'
import MidLevelInputForm from './day-1/mid-level-form.jsx'
import RenderData from './day-1/map.jsx'
import TodoList from './day-1/todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Hello Akshay!!! */}
  
    {/* <ToggleButton/> */}
    {/* <InputForm/> */}
    {/* <MidLevelInputForm/> */}
    {/* <RenderData/> */}
    <TodoList/>
  </StrictMode>,
)
