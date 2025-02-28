import {BrowserRouter ,Routes, Route} from "react-router-dom"

import {ThemeProvider} from "./contexts/ThemeContext"
import Header from "./components/Header/Header"
import Index from "./pages/Index"
import './App.css'



function App() {


  return (
    
    <ThemeProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Index/>}/>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
  )
}

export default App
