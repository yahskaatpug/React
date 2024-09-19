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
import ArrayCrudTodo from './day-1/input-form.jsx'
import LoginForm from './day-1/login-form.jsx'
import NestedTags from './day-1/product-tags.jsx'
import ClassCompSample from './day-1/classComponent.jsx'
import FuncComponent from './day-1/functionalComponent.jsx'
import FuncMounting from './day-1/useEffect.jsx'
import InputDataPersist from './day-1/task1.jsx'
import OnlineStatus from './day-1/online-offline.jsx'
import SideBarComponent from './day-1/test.jsx'
import ParentCounter from './day-1/parentCounterProps.jsx'
import ProductsTrial3 from './day-1/parent.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* Hello Akshay!!! */}
    {/* <ToggleButton/> */}
    {/* <InputForm/> */}
    {/* <MidLevelInputForm/> */}
    {/* <RenderData/> */}
    {/* <TodoList/> */}
    {/* <ArrayCrudTodo/> */}
    {/* <LoginForm/> */}
    {/* <NestedTags/> */}
    {/* <ClassCompSample/> */}
    {/* <FuncComponent/> */}
    {/* <FuncMounting/> */}
    {/* <InputDataPersist/> */}
    {/* <OnlineStatus/> */}
    {/* <SideBarComponent/> */}
    {/* <ParentCounter/> */}
    <ProductsTrial3/>
     </>,
)
