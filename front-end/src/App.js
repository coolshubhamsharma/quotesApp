import React, { Fragment } from 'react'
import MainNavigation from './components/mainNavigation/MainNavigation';
import {Route , Routes} from 'react-router-dom'
import AllQuotes from './components/Pages/AllQuotes';
import NewQuotes from './components/Pages/NewQuotes';
import ShowQuotes from './components/Pages/ShowQuotes';

const App = () => {
  return (
    <Fragment>
      <MainNavigation/>

      <Routes>
        <Route path='/' element={<AllQuotes/>}></Route>
        <Route path='/new' element={<NewQuotes/>}></Route>
        <Route path='/quote/:id' element={<ShowQuotes/>}></Route>

      </Routes>
    </Fragment>
  )
}

export default App