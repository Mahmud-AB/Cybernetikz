import React,{useState} from 'react'

const Multiinputs = () => {

    const [userReg,setUserReg]=useState({
        fullname:"",
        username:"",
        email :"",
        password:"",
        confirmpassword:""
    })

    const[users,setUsers]=useState([]);


    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUserReg({...userReg,[name]:value});
    }
     const handleSubmit = (e) => {
        e.preventDefault();
        const newUser={
            ...userReg,id:new Date().getTime.toString()};
        setUsers([...users, newUser]);
        }
        setUserReg({
            fullname:"",
            username:"",
            email :"",
            password:"",
            confirmpassword:""
        })
    return (
    <>
        <form class="form-detail" action="#" method="post" onSubmit={handleSubmit}>
				<h2>Register Account Form</h2>
				<div class="form-row">
					<label for="full-name">Full Name</label>
					<input type="text" name="full-name" id="full-name" value={userReg.fullname} onchange={handleInput} class="input-text" placeholder="Full Name" required/>
					<i class="fas fa-user"></i>
				</div>
                <div class="form-row">
					<label for="username">UserName</label>
					<input type="text" name="username" id="username" value={userReg.username} onchange={handleInput} class="input-text" placeholder="User Name" required/>
					<i class="fas fa-user"></i>
				</div>
				<div class="form-row">
					<label for="your-email">Your Email</label>
					<input type="text" name="your-email" id="your-email" value={userReg.email} onchange={handleInput} class="input-text" placeholder="Your Email" />
					<i class="fas fa-envelope"></i>
				</div>
				<div class="form-row">
					<label for="password">Password</label>
					<input type="password" name="password" id="password" value={userReg.password} onchange={handleInput} class="input-text" placeholder="Your Password" required/>
					<i class="fas fa-lock"></i>
				</div>
                <div class="form-row">
					<label for="confirmpassword">Confirm Password</label>
					<input type="confirmpassword" name="confirmpassword" id="Confirm Your Password" value={userReg.confirmpassword} onchange={handleInput} class="input-text" placeholder="Confirm Password" required/>
					<i class="fas fa-lock"></i>
				</div>
				<div class="form-row-last">
					<input type="submit" name="register" class="register" value="Register"/>
				</div>
		</form>
    </>
  )
}

export default Multiinputs