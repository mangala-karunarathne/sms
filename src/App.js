import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import AdminHome from './components/admin/AdminHome';
import Students from './components/admin/Students';
import Courses from './components/admin/Courses';

export default function App() {
  return (
    <BrowserRouter>
      {/* header */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin/*' element={<AdminHome />} />
          <Route path="/admin/students" element={<Students />} />
          <Route path="/admin/courses" element={<Courses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
