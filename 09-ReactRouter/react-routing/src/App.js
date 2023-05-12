
import './App.css';
import {Routes, Route, Link, NavLink } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import User from './pages/User';
import Error from './pages/Error';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink style={({isActive}) =>
            ({
              backgroundColor: isActive && "black",
              color: isActive && "white"
            }
            )
            } to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive && "black"
            } to="/about">About</NavLink>
          </li>
          <li>
            <NavLink style={({isActive}) =>
            ({
              backgroundColor: isActive && "black",
              color: isActive && "white"
            })
            } to="/Users">Users</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/users'>
          <Route index={true} element={ <Users />} />
          <Route path='user/:id' element={ <User /> } />
        </Route>
        <Route path='*' element={<Error /> } />
      </Routes>
    </>
  );
}

export default App;
