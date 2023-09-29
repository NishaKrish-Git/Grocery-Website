import React, { useEffect, useState } from 'react'
import '../login/login.css'
import { Link, useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios'
import { toast } from "react-toastify";
import { useDispatch,useSelector } from 'react-redux';
import {authSuccess} from '../Redux/UserSlice'




const Login = () => {

  const dispatch=useDispatch()
  const {isAuthorized}=useSelector((state)=>state.authReducer)

  const history=useNavigate();
const location=useLocation()


const redirect=location.search.split('=')[1]

  useEffect(()=>{
    if(isAuthorized && redirect==='checkout'){
history('/checkout')
    }
   else if(isAuthorized){
      history("/")
    }
    
  },[isAuthorized])

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')


  async function submit(e){
    e.preventDefault()
    if(validate()){
      
      try{
        const register={
            UserName:user,
            PassWord:password
        
          }
        await axios.post("https://grocery-website-gcgh.onrender.com/login",register)
        .then(res=>{
            if(res.data.status==="exist"){

              toast.success('LoggedIn Successfully')
              dispatch(authSuccess(res.data.user))
              
            }
            
            else if(res.data.status==="not-exist"){
                toast.warning("User have not sign up")
            }
            else if(res.data.status==='Wrong Data'){
              toast.warning('Wrong details')
            }

        })
        .catch(e=>{
          
            console.log(e);
        })

    }

    catch(e){
      console.log(e);

  }


    }
  }



  const validate=()=>{
    let result=true
    if(user==='' || user===null){
      result=false
      toast.warning('Please Enter Username')
    }
    if(password==='' || password===null){
      result=false
      toast.warning('Please Enter Password')
    }
    return result
  }
  //Submit
  // const onsubmit=function(e)
  // {
  // e.preventDefault()
  // const register={
  //   UserName:user,
  //   PassWord:password

  // }
  // //to connect frontend and backend
  // if(axios.post('https://grocery-website-gcgh.onrender.com/login',register).then(res=>console.log(res.data)))
  // {
  //   console.log('Registered Successfully')
  // }
  // }
  return (

    <div className="bg position-relative">
      <div className="loginbox"> <img src="https://i.imgur.com/ZYzTdD0.png" className="avatar" />
        <h1>Login Here</h1>
        <form method='POST' action="/login" onSubmit={submit}>
          <p>Username </p> <input type="text" name="" placeholder="Enter Username" value={user} onChange={e => setUser(e.target.value)} />
          <p>Password </p> <input type="password" name="" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />
          <a style={{ color: '#FF0000', fontSize: '15px', fontWeight: 'bold' }}>Forgot PassWord?</a><br /><br />
          <input type="submit" name="" value="Login"/>
          <p>Not a member? <Link to='/signup' style={{ fontSize: '17px', fontWeight: 'bold', color: '#0040FF' }}>Register</Link> </p>
         </form>
      </div>
      
    </div>

  )
}

export default Login
