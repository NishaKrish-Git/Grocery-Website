import React, { Component } from 'react'
import { Link  } from 'react-router-dom';
import './SignUp.css'
import axios from 'axios'
import { toast } from "react-toastify";



export default class SignUp extends Component {
  
    constructor() {
        super()
        this.state =
        {
          UserName: '',
          Email: '',
          PassWord: '',
          errors:{
            userError:'',
            EmailError:'',
            PassError:''

          }
          
        }

        //error

      
       
  
    this.changeUserName=this.changeUserName.bind(this)
    this.changeEmail=this.changeEmail.bind(this)
    this.changePassword=this.changePassword.bind(this)
    this.onsubmit=this.onsubmit.bind(this)
    }
    
//functions
changeUserName(event)
{
this.setState(
  {
    UserName:event.target.value,
    errors:{userError:''}
  })
}

changeEmail(event)
{
this.setState(
  {
    Email:event.target.value,
    errors:{EmailError:''}
  })
}

changePassword(event)
{
this.setState(
  {
    PassWord:event.target.value,
    errors:{PassError:''}
  })
}

//onClickButton
// onClickButton=()=>{
//   let errors = this.state.errors;
//   if(!this.state.UserName){
//     this.setState(
//       {
//         userError:"Enter UserName"
//       }
//     )
//   }
//   if(!this.state.Email){
//     this.setState(
//       {
//         EmailError:"Enter Your Email"
//       }
//     )
//   }
//   if(!this.state.PassWord){
//     this.setState(
//       {
//         PassError:"Enter Password"
//       }
//     )
//   }
// }

//Submit
// async onsubmit(event){
//   event.preventDefault();
//   if(this.onClickButton){
//     try{
//       const store=
//         {
//           UserName: this.state.UserName,
//           Email:this.state.Email,
//           PassWord: this.state.PassWord
//         }
//         await axios.post('https://grocery-website-gcgh.onrender.com/signup',store).then(res=>console.log(res.data))
//     }
//     catch(e){
//       console.log(e);
//   }
//   }
// }
 onsubmit(event)
{
  event.preventDefault();
  
  
  if(!this.state.UserName){
    this.setState(
      {
        errors:{userError:'Enter UserName'}
      }
    )
    
    
  }
  if(!this.state.Email){
    this.setState(
      {
        errors:{EmailError:'Enter Your Email'}
      
      }
    )
  }
  if(!this.state.PassWord){
    this.setState(
      {
        errors:{PassError:'Enter Your PassWord'}
      }
    )
  }


  if(this.state.UserName && this.state.Email && this.state.PassWord){
    const store=
  {
    UserName: this.state.UserName,
    Email:this.state.Email,
    PassWord: this.state.PassWord
  }
   axios.post('https://grocery-website-gcgh.onrender.com/signup',store).then(res=>{
        console.log(res.data)
  if(res.data.status==='username already exist'){
    this.setState(
      {
        errors:{userError:'UserName already exist'}
      }
    )
  }

  if(res.data.status==='email already exist'){
    this.setState(
      {
        errors:{EmailError:'Email already exist'}
      }
    )
  }





  })

  }
}

  render() {
    return (
       <>
        <div className="register-photo">
            <div className="form-container">
                <div className="image-holder"></div>
                <form method="post" onSubmit={this.onsubmit}>
                    <h2 className="text-center"><strong style={{color:'#F5C32C'}}>Create</strong> an account.</h2>
                    <div className="form-group"><input className="form-control" style={{borderColor:'#F5C32C'}} type="text" name="email" placeholder="User Name" onChange={this.changeUserName} value={this.state.UserName}/></div> <p className='error'>
              {this.state.errors.userError}
            </p>

                    <div className="form-group"><input className="form-control mt-3" style={{borderColor:'#F5C32C'}} type="email" name="password" placeholder="Email" onChange={this.changeEmail} value={this.state.Email}/></div> <p className='error'>
                    {this.state.errors.EmailError}
            </p>

                    <div className="form-group"><input className="form-control mt-3" style={{borderColor:'#F5C32C'}} type="password" name="password-repeat" placeholder="Password" onChange={this.changePassword} value={this.state.PassWord}/></div><p className='error'>
                    {this.state.errors.PassError}
            </p>

                    <div className="form-group">
                     <div className="form-check mt-3"><label className="form-check-label"><input className="form-check-input" style={{borderColor:'#F5C32C'}} type="checkbox"/>I agree to the terms and conditions.</label></div>
                    </div>

                    <div className="form-group"><button className="btn btn-primary" type="submit" >Sign Up</button>
                    </div>
                    
                    <a href="#" className="already mt-3">You already have an account? <Link to='/login'><span style={{color:'#F5C32C', listStyleType:'none', fontWeight:'bold'}}>Login here</span></Link>.</a>
                    
                    </form>
            </div>
        </div>
    </>
    )
  }
}
