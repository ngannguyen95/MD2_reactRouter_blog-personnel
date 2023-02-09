
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import Contact from './component/Contact';
import About from './component/About';
import User from './component/User';
import UserDetail from './component/UserDetail';
import Error404 from './component/Error404';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([
    { id: '001', name: 'Nguyễn Văn A', email: 'nguyenvanA1@gmail.com', phone: '0123456789' },
    { id: '002', name: 'Nguyễn Văn A2', email: 'nguyenvanA2@gmail.com', phone: '0123456789' },
    { id: '003', name: 'Nguyễn Văn A3', email: 'nguyenvanA3@gmail.com', phone: '0123456789' },
    { id: '004', name: 'Nguyễn Văn A4', email: 'nguyenvanA4@gmail.com', phone: '0123456789' },
    { id: '005', name: 'Nguyễn Văn A5', email: 'nguyenvanA5@gmail.com', phone: '0123456789' },
    { id: '006', name: 'Nguyễn Văn A6', email: 'nguyenvanA6@gmail.com', phone: '0123456789' },
    { id: '007', name: 'Nguyễn Văn A7', email: 'nguyenvanA7@gmail.com', phone: '0123456789' },
    { id: '008', name: 'Nguyễn Văn A8', email: 'nguyenvanA8@gmail.com', phone: '0123456789' },
  ]);
  return (
    <BrowserRouter>
      <div className='App'>
        <div className="container">
          <Routes>
            <Route path='/' element={<Homepage></Homepage>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/user' element={<User users={users}></User>}></Route>
            <Route path='/user/:uerId' element={<UserDetail users={users}></UserDetail>}></Route>
            <Route path='*' element={<Error404></Error404>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
