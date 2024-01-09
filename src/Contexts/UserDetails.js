import { useContext , createContext } from "react";

const userContext = createContext({
    users:[
        {
            id:1,
            userName:"Gaurav",
            userEmail:"gaurav@gmail.com",
            userPassword:"1234"
        }
    ],
    addUser: (userDetails) =>{},
    deleteUser:(id)=>{},
})

export const UserContextProvider = userContext.Provider;

export const useUser = () =>{
    return useContext(userContext);
}