
import {useUser} from '../Contexts'
import {useState} from 'react';

const Login = () =>{

    const {users} = useUser();

    const [loginEmail,setLoginEmail] = useState('');
    const [loginPassword,setLoginPassword] = useState('');

    const submitLoginForm = (e) =>{
        e.preventDefault();

        if(users.length > 0){

          const userValidEmail = users.some(user =>(
            user.userEmail === loginEmail
          ))
  
          const userValidPassword = users.some(user =>(
            user.userPassword === loginPassword
          ))

          if(userValidEmail && userValidPassword){
            console.log(`USER LOGIN INTO OUR WEBSITE`);  
          }else{
            console.log(`USER DETAILS DOSE NOT MATCH`);
          }

        }else{
          console.log(`WE DON'T HAVE ANY USER RIGHT NOW...`);
        }

    }

    return (
        <div className="w-full flex justify-center items-center p-8 ">
    
          <form className="w-1/2 h-96 bg-slate-800 flex flex-col justify-center items-center rounded-3xl"
          onSubmit={submitLoginForm}
          >

            <input className="w-1/2 h-16 rounded-2xl pl-4 outline-none m-2 text-cyan-700 text-xl " type="email"
              required
              placeholder='enter email address'
              value={loginEmail}
              onChange={(e)=>setLoginEmail(e.target.value)}
            />
            <input className="w-1/2 h-16 rounded-2xl pl-4 outline-none m-2 text-cyan-700 text-xl " type="password"
              required
              placeholder='enter password'
              value={loginPassword}
              onChange={(e)=>setLoginPassword(e.target.value)}
            />
            <button className="w-20 h-14 rounded-2xl p-2 outline-none mt-2 border-x-2 border-y-2 border-slate-200 text-slate-200">Submit</button>
          </form>
        </div>
      )
}

export default Login