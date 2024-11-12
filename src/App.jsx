
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/AuthForm"
import { AuthPage } from "./pages/HomePage/AuthPage/AuthPage"

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element ={<HomePage />} />
        <Route path='/auth' element ={<AuthPage />} />
      </Routes>
    </>
  )
}

export default App
