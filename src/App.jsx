import { useState } from 'react'
import Comics from './components/Comics'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import BrowseCharacters from './components/BrowseCharacters'
import Home from './components/Home'
import CharacterDetails from './components/CharacterDetails'
import NotFound from './components/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />

    {/* Container for all routes */}
    <Routes>
    <Route path='/' element={<Home />}/>
      <Route path='/comics' element={<Comics />}/>
      <Route path='/browse-characters' element={<BrowseCharacters />}/>
      
     <Route path='/character-details/:id' element={<CharacterDetails />}/> 

     /* Catch all Route - PUT IT AT THE BOTTOM /*
      <Route path="*" element={<NotFound />}/>
      
    </Routes>
    </>
  )
}

export default App
