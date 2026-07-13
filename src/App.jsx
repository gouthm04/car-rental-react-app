import Home from './components/Home'
import './App.css'
import AddCar from './components/AddCar'
import ViewCar from './components/ViewCar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<AddCar/>}/>
            <Route path='/view' element={<ViewCar/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
