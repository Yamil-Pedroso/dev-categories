import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './funcs/aunthentication1/pages/LoginPage'
import Register from './funcs/aunthentication1/pages/RegisterPage'
import Profile from './funcs/aunthentication1/pages/ProfilePage'
import UpdateProfile from './funcs/aunthentication1/pages/UpdateProfilePage'
import UpdatePassword from './funcs/aunthentication1/pages/UpdatePasswordPage'
import ForgotPassword from './funcs/aunthentication1/pages/ForgotPasswordPage'
import { AuthProvider } from './funcs/aunthentication1/hook/AuthContext'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
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
