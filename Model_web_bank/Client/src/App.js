import Home from './Components/home/Home.jsx'
import Register from './Components/Register/Register.jsx'
import Login from './Components/Login/Login.jsx'
import Profile from './Components/Profile/Profile.jsx'
import Deposite from './Components/Deposite/Deposite.jsx'
import WithDraw from './Components/Withdraw/Withdraw.jsx'
import Update from './Components/ProfileUpdate/ProfileUpdate.jsx'
import ChangePassword from './Components/ChangePassword/ChangePassword.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Admin from './Components/Admin/Admin.jsx'
import AdminLogin from './Components/Admin/AdminLogin.jsx'
function App() {
  return (
    <div className="App">   
<BrowserRouter >
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/user/register" element={<Register />} />
  <Route path="/user/login" element={<Login />} />
  <Route path="/user/Profile" element={<Profile />} />
  <Route path="/user/withdraw" element={<WithDraw />} />
  <Route path="/user/deposite" element={<Deposite />} />
  <Route path="/user/profileUpdate" element={<Update />} />
  <Route path="/user/changepassword" element={<ChangePassword />} />

  <Route path="/admin/user/profile" element={<Admin />} />
  
  <Route path="/admin/login" element={<AdminLogin />} />

</Routes>

</BrowserRouter>

    </div>
  );
}

export default App;
