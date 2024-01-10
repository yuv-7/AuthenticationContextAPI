import { useEffect, useState } from 'react';
import { useUser } from '../Contexts';

const SignUp = () => {

  const { addUser, users } = useUser();

  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');

  const [clickButton, setClickButton] = useState(false);

  const submitSignUpForm = (e) => {
    e.preventDefault();
    setClickButton((prev) => !prev);
  }


  useEffect(() => {
    if (clickButton) {
      // Check if the email already exists in the users array
      // we use 'some' method that return 'true' or 'false'

      const emailExists = users.some(
        (user) => user.userEmail === newUserEmail
      );

      if (!emailExists && newUserName) {
        addUser({
          userName: newUserName.toLocaleLowerCase(),
          userEmail: newUserEmail,
          userPassword: newUserPassword,
        });

        setNewUserName('');
        setNewUserEmail('');
        setNewUserPassword('');

        setClickButton((prev) => !prev); // Set clickButton to false after successful addition
        console.log("User added successfully");

      } else {
        console.log("Email already exists. Choose a different email.");
        setClickButton((prev) => !prev); // Set clickButton to false after successful addition
      }
    }
  }, [clickButton]);


  return (
    <div className="w-full flex justify-center items-center p-8 ">

      <form onSubmit={submitSignUpForm} className="w-1/2 h-96 bg-slate-800 flex flex-col justify-center items-center rounded-3xl">
        <h2 className="text-slate-200 text-3xl">Sign Up</h2>

        
        {/* user name section */}
        <input className="w-1/2 h-16 rounded-2xl pl-4 outline-none m-2 text-cyan-700 text-xl " type="text"
          required
          onChange={(e) => setNewUserName(e.target.value)}
          value={newUserName}
          placeholder='enter username'
        />

        {/* user Email section */}
        <input className="w-1/2 h-16 rounded-2xl pl-4 outline-none m-2 text-cyan-700 text-xl " type="email"
          required
          onChange={(e) => setNewUserEmail(e.target.value)}
          value={newUserEmail}
          placeholder='enter email address'
        />

        {/* user password section */}
        <input className="w-1/2 h-16 rounded-2xl pl-4 outline-none m-2 text-cyan-700 text-xl " type="password"
          required
          onChange={(e) => setNewUserPassword(e.target.value)}
          value={newUserPassword}
          placeholder='enter password'
        />

        <button className="w-20 h-14 rounded-2xl p-2 outline-none mt-2 border-x-2 border-y-2 border-slate-200 text-slate-200">Submit</button>

      </form>

    </div>
  )
}

export default SignUp