import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import {useUser , UserContextProvider} from './Contexts';
import { useEffect, useState } from "react";

const App = () =>{

  const [users,setUsers] = useState([]);

  const addUser = (userDetails) =>{
    setUsers((prev)=> [{id:Date.now(),...userDetails},...prev])
  }

  const deleteUser = (id) =>{
    setUsers((prev)=> prev.filter((user)=>(
      user.id !== id 
    )))
  }

  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem("users"));

    if(userData && userData.length > 0){
      setUsers(userData);
    }
  
  },[]);

  useEffect(()=>{
    localStorage.setItem("users", JSON.stringify(users));
  },[users]);

  return (
    <UserContextProvider value={{users,addUser,deleteUser}}>
      <Header />
      <Outlet />
    </UserContextProvider>
  );

}

export default App;