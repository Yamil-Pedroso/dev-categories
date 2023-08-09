import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/header/Navbar'
import  HomePage from './pages/HomePage'
import Login from './pages/LoginPage'
import Register from './pages/RegisterPage'
import Profile from './pages/ProfilePage'
import UpdatePassword from './pages/UpdatePassword'
import ForgotPassword from './pages/ForgotPasswordPage'
import UpdateProfile from './pages/UpdateProfilePage'
import { AuthProvider } from './hook/AuthContext'



const App = () => {
  

  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/me/update" element={<UpdateProfile />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
