import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './AdminPages/Admin';
import AdminPost from './AdminPages/AdminPost';
// import AdminUserPage from './AdminPages/AdminUserPage';
import ManageCategory from './AdminPages/ManageCategory';
import ManageUsers from './AdminPages/ManageUsers';
import ManageRoles from './Admin_Files/ManageRoles';
import './App.css';
import SampleCreate from './Files/SampleCreate';
import PostProvider from './myContext';
import EditPost from './Pages/EditPost';
import Home from './Pages/Home';
import OnePost from './Pages/OnePost';
import Post from './Pages/Post';
import PostFinal from './Pages/PostFinal';
import Reg from './Pages/Reg';
import Signin from './Pages/Signin';
import UserProfile from './Pages/UserProfile';
import Verify from './Pages/Verify';

function App() {
  return (
    <PostProvider>
      <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Signin />}/>
            <Route path='/reg' element={<Reg />}/>
            <Route path='/post' element={<Post />} />
            <Route path='/postfinal' element={<PostFinal />} />
            <Route path='/admin' element={<Admin />} />
            <Route  path='/admin_post' element={<AdminPost />} />
            <Route path='/manage_users' element={<ManageUsers />} />
            {/* <Route path='/users/:id' element={<AdminUserPage />} /> */}
            <Route path='/one_post/:id' element={<OnePost />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/manage_roles' element={<ManageRoles />} />
            <Route path='/manage_category' element={<ManageCategory />} />
            <Route path='/edit_post/:id'element={<EditPost />} />
            <Route path='/profile/:id' element={<UserProfile />} />
            <Route path='sample' element={<SampleCreate />} />
          </Routes>
      </div>
    </BrowserRouter>
    </PostProvider>
  );
}

export default App;
