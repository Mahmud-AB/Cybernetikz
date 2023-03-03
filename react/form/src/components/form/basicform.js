import React, {useState} from 'react'

const Basicform = () => {

    

    const [userLogin,setUserLogin]=useState({
        username:"",
        password:"",
        
    })

    const[allEntry,setallEntry]=useState([]);


    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUserLogin({...userLogin,[name]:value});
    }

     const handleLogin = (e) => {
        e.preventDefault();
        
        
            const newEntry={
                ...userLogin,id:new Date().getTime.toString()};
            setallEntry([...allEntry, newEntry]);
            console.log(allEntry)
            setUserLogin({username:"",password:""})
            
       
        }
    return (
    <>
        <form class="form-detail" action="" onSubmit={handleLogin}>
				<h2>Login Account Form</h2>
                <div class="form-row">
					<label for="username">UserName</label>
					<input type="text" name="username" id="username" value={userLogin.username} onChange={handleInput} class="input-text" placeholder="User Name" required/>
					<i class="fas fa-user"></i>
				</div>
				<div class="form-row">
					<label for="password">Password</label>
					<input type="password" name="password" id="password" value={userLogin.password} onChange={handleInput} class="input-text" placeholder="Your Password" required/>
					<i class="fas fa-lock"></i>
				</div>
				<div class="form-row-last">
                <input type="submit" name="login" class="login" value="Login"/>
				</div>
		</form>

    
    </>
  )
}

export default Basicform
