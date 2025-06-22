import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css'
/* import { CounterApp } from './01-useState/CounterApp' */
/* import { HooksApp } from './HooksApp'; */
/* import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'; */
/* import { SimpleForm } from './02-useEffect/SimpleForm'; */
/* import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'; */
/* import { MultipleCustomHook } from './03-examples/MultipleCustomHook'; */
/* import { FocusScreen } from './04-useRef/FocusScreen'; */
/* import { Layout } from './05-useLayoutEffect/Layout'; */
/* import { Memorize } from './06-memos/Memorize'; */
/* import { MemoHook } from './06-memos/MemoHook'; */
/* import { CallBackHook } from './06-memos/CallBackHook'; */
/* import { Padre } from './07-tarea-memo/Padre'; */

/* import './08-useReducer/intro-reducer'; */
/* import { TodoApp } from './08-useReducer/TodoApp'; */

import { getRoutes } from './Routes';

const router = getRoutes();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*  <HooksApp /> */}
    {/*  <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHook /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallBackHook /> */}
    {/* <Padre /> */}
    {/* <TodoApp /> */}
    <RouterProvider router={router}/>
  </StrictMode>
)
