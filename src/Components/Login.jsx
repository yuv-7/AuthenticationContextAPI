


const Login = () =>{

    const submitLoginForm = (e) =>{
        e.preventDefault();
    }

    return (
        <div className="w-full flex justify-center items-center p-8 ">
            
            <form onSubmit={submitLoginForm} className="w-1/2 h-96 bg-slate-800 flex flex-col justify-center items-center rounded-3xl">
            <h2 className="text-slate-200 text-3xl">Login</h2>
                <input className="w-1/2 h-16 rounded-2xl pl-4 outline-none m-2" type="text" />
                <input className="w-1/2 h-16 rounded-2xl pl-4 outline-none m-2" type="password"/>
                <button className="w-20 h-14 rounded-2xl p-2 outline-none mt-2 border-x-2 border-y-2 border-slate-200 text-slate-200">Submit</button>
            </form>
        </div>
    )
}

export default Login