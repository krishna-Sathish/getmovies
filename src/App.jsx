import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Movies from './Components/Movies'
import Emoji from './Components/Emoji'

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/getmovies">
        <Routes>
          <Route path='/' element={<Movies/>}></Route>
          <Route path='/emoji' element={<Emoji/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
