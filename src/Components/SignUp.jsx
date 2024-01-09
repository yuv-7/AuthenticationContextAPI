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
        // addUser({userName: newUserName, userEmail: newUserEmail , userPassword:newUserPassword});

        // setNewUserName('');
        // setNewUserEmail('');
        // setNewUserPassword('');
    }

    useEffect(() => {
        // addUser({userName: newUserName, userEmail: newUserEmail , userPassword:newUserPassword});
        if (clickButton) {

            for (let i = 0; i < users.length; i++) {

                if (users.length > 0) {
                    if (users[i].userEmail !== newUserEmail) {
                        addUser({ userName: newUserName, userEmail: newUserEmail, userPassword: newUserPassword });
                        setClickButton((prev) => !prev);
                    }
                }else{
                    addUser({ userName: newUserName, userEmail: newUserEmail, userPassword: newUserPassword });
                        setClickButton((prev) => !prev);
                    }
            }
            console.log(`click button`);
        }

    }, [clickButton])


    return (
        <div className="w-full flex justify-center items-center p-8 ">

            <form onSubmit={submitSignUpForm} className="w-1/2 h-96 bg-slate-800 flex flex-col justify-center items-center rounded-3xl">
                <h2 className="text-slate-200 text-3xl">Sign Up</h2>
                <input className="w-1/2 h-16 rounded-2xl pl-4 outline-none m-2" type="text"

                    onChange={(e) => setNewUserName(e.target.value)}
                    value={newUserName}
                />
                <input className="w-1/2 h-16 rounded-2xl pl-4 outline-none m-2" type="email"

                    onChange={(e) => setNewUserEmail(e.target.value)}
                    value={newUserEmail}
                />
                <input className="w-1/2 h-16 rounded-2xl pl-4 outline-none m-2" type="password"

                    onChange={(e) => setNewUserPassword(e.target.value)}
                    value={newUserPassword}
                />
                <button className="w-20 h-14 rounded-2xl p-2 outline-none mt-2 border-x-2 border-y-2 border-slate-200 text-slate-200">Submit</button>
            </form>
        </div>
    )
}

export default SignUp