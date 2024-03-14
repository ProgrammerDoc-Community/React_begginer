import React,{useState,StyleSheet} from "react";


const Registeration = ()=>{
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password1,setPassword1] = useState('');
    const [password2,setPassword2] = useState('');

    const header = {

    }
    let body = {

    }
    const clickHandler=async(e)=>{
        e.preventDefault();
        try{
            const resource = await fetch('http://127.0.0.1:8000/api/register/',{
                method:'post',
                headers:{
                    'Content-Type':'application/json',
                    // 'Access-Control-Allow-Origin':'*'
                },
                body:JSON.stringify({username,email,password1,password2})
            }
            );
            const data = await resource.json();
            if(!resource.ok){
                console.log(email)
                console.log('fetch error');

            }
            console.log(email)
        }catch(error){
            console.log(error)

        }
    }
    return(
        <div>
            <h3 className="container">registration page......</h3>
            <div className="formregistration">
                <form onSubmit={clickHandler}>
                    <div>
                        <label>username</label>
                        <input type="text" value={username} required={true} onChange={(e)=>setUsername(e.target.value)} placeholder="enter a username" name="username"/>
                    </div>
                    <div>
                        <label>email</label>
                        <input type="email" required={true} onChange={(e)=>setEmail(e.target.value)} placeholder="enter an email" name="email"/>
                    </div>
                    <div>
                        <label>password</label>
                        <input type="password" required={true} placeholder="enter a strong password" onChange={(e)=>setPassword1(e.target.value)} name="password1"/>
                    </div>
                    <div>
                        <label>password2</label>
                        <input type="password" required={true} placeholder="confirm password" onChange={(e)=>setPassword2(e.target.value)} name="password2"/>
                    </div>
                    <button type="submit">register</button>
                </form>

            </div>
        </div>
    )
}

export default Registeration