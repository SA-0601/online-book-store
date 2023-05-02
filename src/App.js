import {useState} from 'react';

import { Routes, Route } from 'react-router-dom';

import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import AuthPage from './pages/AuthPage/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
// import AllBooks from './pages/AllBooks/AllBooks';
// import NavBar from './components/NavBar';

import { getUser } from './utilities/users-service';

import styles from './App.module.css';
import AdminOperations from './pages/AdminOperations/AdminOperations';


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className={styles.App}>
     { user ? 
      <>
      {/* <NavBar user={user} setUser={setUser}/> */}
      <Routes>
        <Route path='/orders/new' element={ <NewOrderPage user={user} setUser={setUser}/> }/>
        <Route path='/orders' element={ <OrderHistoryPage user={user} setUser={setUser}/> }/>
        <Route path='/admin' element={ <AdminOperations user={user} setUser={setUser}/>} />
        {/* <Route path='/admin/books' element={ <AllBooks user={user} setUser={setUser}/>} /> */}
        {/* <Route path='/admin/new' element={ <NewBook/>} /> */}

        {/* <Route path='/*' element={<Navigate to='/orders/new' />}/> */} add navigate with router
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;