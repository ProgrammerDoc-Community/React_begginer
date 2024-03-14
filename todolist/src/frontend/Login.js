import React ,{useState, useTransition} from "react"

const LoginView=()=>{
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const clickHandler=async(e)=>{
        e.preventDefault();
        try{
            const resource = await fetch('http://127.0.0.1:8000/api/login/',{
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':Bearer ,

                },
                body:JSON.stringify(username,password)
            });
            const data = await resource.json();

            if(!resource.ok){
                console.log('error in fetch');
            }

        }catch(error){
            console.log(error)
        }
    }
    return(
        <div>
            <form onSubmit={clickHandler}>
                <div>
                    <label>username</label>
                    <input type="text" value={username} required={true} onChange={(e)=>setUsername(e.target.value)} placeholder="enter a username" name="username"/>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" required={true} placeholder="confirm password" onChange={(e)=>setPassword(e.target.value)} name="password2"/>
                </div>
                <button type="submit">register</button>
            </form>
        </div>
    )
}