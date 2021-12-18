import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './app.css';
import Header from '../header/header';
import UserPage from '../pages/UserPage';
import About from '../pages/about';
import AboutMePage from '../pages/aboutMePage';
import { AddUser } from '../AddUser/AddUser';
import EditUser from '../EditUser/EditUser';
import Footer from '../footer/footer';
import api from '../api/api';
import { IUser } from '../types/data';
import {Routes, Route, useNavigate} from 'react-router-dom';


const App: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [sex, setSex] = useState('');
  const [editFullName, setEditFullName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editBirthday, setEditBirthday] = useState('');
  const [editSex, setEditSex] = useState('');
  const [loading, setLoading] = useState(false);

  const nav = useNavigate();

  // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {}

  // function emailValidation(){
  //     const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //     if(!email || regex.test(email) === false){
  //         setEmail("Email is not valid");
  //         return false;
  //     }
  //     setEmail(e.target.value);
  // }

  const resetInputs = () => {
    setFullName('');
    setEmail('');
    setBirthday('');
    setSex('');
  }

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    const newUser = {id, fullName: fullName, email: email, birthday: birthday, sex: sex};
    try {
      const response = await api.post('/users', newUser); 
      const listUsers = [...users, response.data];
      setUsers(listUsers);
      setFullName('');
      setEmail('');
      setBirthday('');
      setSex('');
      nav('/');
    } catch (err) {
      alert(err);
    }
  }

  const handleEdit = async (id: number) => {
    const uploadUser = {id, fullName: editFullName, email: editEmail, birthday: editBirthday, sex: editSex};
    try {
      const response = await api.put(`/users/${id}`, uploadUser)
      setUsers(users.map(user => user.id === id ? { ...response.data } : user));
      setEditFullName('');
      setEditEmail('');
      setEditBirthday('');
      setEditSex('');
      nav('/');
    } catch (err) {
      console.log(`Error: ${err}`);
      alert(err);
    }
  }

  const deleteUser = async (id: number) => {
    try {
      await api.delete(`/users/${id}`);
      const listUsers = users.filter((item) => item.id !== id);
      setUsers(listUsers);
      nav('/');
    } catch (err) {
      console.log(`Error: ${err}`);
      alert(err);
    }
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await api.get<IUser[]>('/users');
      if (response && response.data) setUsers(response.data);
    } catch (err) {
      // if (err.response) {
      //   console.log(err.response.data.message);
      //   console.log(err.response.status);
      //   console.log(err.response.headers);
      // } else {
      //   console.log(`Error: ${err.message}`);
      // }
      console.log(`Error: ${err}`);
      alert(err);
    } 
  }
  return (
    <div className="App">
      <Header title="Hello There"/>
      <main> 
        <Routes>
          <Route path="/" element={
            <UserPage users={users} deleteUser={deleteUser}/>
          }/>
          <Route path="/about" element={<About />}/>
          <Route path="/about-me" element={<AboutMePage />}/>
          <Route path="/add" element={
            <AddUser 
              fullName={fullName}
              setFullName={setFullName}
              email={email}
              setEmail={setEmail}
              birthday={birthday}
              setBirthday={setBirthday}
              sex={sex}
              setSex={setSex}
              handleSubmit={handleSubmit}
              resetInputs={resetInputs}
            />
          }>

          </Route>
          <Route path="/edit/:id" element={
            <EditUser 
              users={users}
              editFullName={editFullName}
              setEditFullName={setEditFullName}
              editEmail={editEmail}
              setEditEmail={setEditEmail}
              editBirthday={editBirthday}
              setEditBirthday={setEditBirthday}
              editSex={editSex}
              setEditSex={setEditSex}
              handleEdit={handleEdit}
            />
          }/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
