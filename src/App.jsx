
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/AuthForm"
import { AuthPage } from "./pages/HomePage/AuthPage/AuthPage"
import  Home  from "./pages/HomePage/HomePage/HomePage"

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/auth' element ={<AuthPage />} />
      </Routes>
    </>
  )
}

export default App
