import { FC, memo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Details from '../../views/Details'
// import Home from '../../views/Home'
import Login from '../../views/Auth/Login'
import Signup from '../../views/Auth/Signup'
import Welcome from '../../views/Welcome/index'
import NavBar from '../../components/Navbar'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/details/:listName" element={<Details />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default memo(Router)
