import React from 'react';
import { useState, useEffect  } from 'react';
import './app.css';
import Header from '../header/header';
import UserPage from '../pages/userPage';
import About from '../pages/about';
import AboutMePage from '../pages/aboutMePage';
import AddItem from '../addItem/addItem';
import EditUser from '../editUser/editUser';
import Footer from '../footer/footer';
import api from '../api/api';
import {Routes, Route, useNavigate} from 'react-router-dom';


function App() {

  const [items, setItems] = useState([]);
  const [newFullName, setNewFullName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newBirthday, setNewBirthday] = useState('');
  const [newSex, setNewSex] = useState('');
  const [editFullName, setEditFullName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editBirthday, setEditBirthday] = useState('');
  const [editSex, setEditSex] = useState('');
  const nav = useNavigate();

  useEffect(() => {
    const fetchItems = async () =>{
      try {
        const response = await api.get('/users');
        if (response && response.data) setItems(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data.message);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      } 
    }
    setTimeout(() => {
      fetchItems();
    }, 2000)
  }, []);


  const handleDelete = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);
      nav('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleEdit = async (id) => {
    const uploadItems = {id, fullName: editFullName, email: editEmail, birthday: editBirthday, sex: editSex};
    try {
      const response = await api.put(`/users/${id}`, uploadItems)
      setItems(items.map(item => item.id === id ? { ...response.data } : item));
      setEditFullName('');
      setEditEmail('');
      setEditBirthday('');
      setEditSex('');
      nav('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = {id, fullName: newFullName, email: newEmail, birthday: newBirthday, sex: newSex};
    try {
      const response = await api.post('/users', newItem); 
      const listItems = [...items, response.data];
      setItems(listItems);
      setNewFullName('');
      setNewEmail('');
      setNewBirthday('');
      setNewSex('');
      nav('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }


  return (
    <div className="App">
      <Header title="Hello There"/>
      <main> 
        <Routes>
          <Route path="/" element={
            <UserPage
             items={items}
             handleDelete={handleDelete}
             handleSubmit={handleSubmit}
             />
          }/>
          <Route path="/about" element={<About />}/>
          <Route path="/about-me" element={<AboutMePage />}/>
          <Route path="/add" element={
            <AddItem 
              newFullName={newFullName}
              setNewFullName={setNewFullName}
              newEmail={newEmail}
              setNewEmail={setNewEmail}
              newBirthday={newBirthday}
              setNewBirthday={setNewBirthday}
              newSex={newSex}
              setNewSex={setNewSex}
              handleSubmit={handleSubmit}
            />
          }>

          </Route>
          <Route path="/edit/:id" element={
            <EditUser 
              items={items}
              editFullName={editFullName}
              setEditFullName={setEditFullName}
              editElmail={editEmail}
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
