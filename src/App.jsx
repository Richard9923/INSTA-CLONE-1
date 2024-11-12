
import { Route, Routes } from "react-router-dom"
import { AuthPage } from "./pages/HomePage/AuthPage/AuthPage"
import  Home  from "./pages/HomePage/HomePage/HomePage"
import PageLayout from "./Layouts/PageLayout/PageLayout"

function App() {


  return (
    <PageLayout>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/auth' element ={<AuthPage />} />
      </Routes>
    </PageLayout>
  )
}

export default App
