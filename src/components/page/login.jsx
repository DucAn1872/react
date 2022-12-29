import React from 'react';
import "../../tailwind.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      phone:'',
      password:'',
      error:'', 
      status:"",
    }
  }

  onChangeName = (e) =>{
    this.setState({name:e.target.value})
  }

  onChangeEmail = (e) =>{
    this.setState({email:e.target.value})
  }

  onChangePhone = (e) =>{
    this.setState({phone:e.target.value})
  }

  onSubmit = (e) =>{
    e.preventDefault()
    let olddata = localStorage.getItem('users')
    let oldArr = JSON.parse(olddata)
    oldArr.map(arr => 
      {
        if(this.state.name.length > 0 && this.state.password.length > 0){
          if (arr.name === this.state.name && (arr.password === this.state.password)) {
            window.location.replace(window.location.origin + "/home");
          }else{
            this.setState({error:'Please check your email or password'});
          }
        }
      }
      )
  }
  
  onChangePassword = (e) =>{
    this.setState({password:e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="mt-32 w-96 m-auto border-2 border-sky-500 rounded p-5 shadow-lg bg-violet-500">
        <h1 className='text-4xl font-bold text-yellow-100 text-left'>Login</h1>
        <div>
          <label className='text-left block mt-2 text-white'>Username</label>
          <input type="text" className="outline-none w-full py-1 pl-1" value={this.state.name} onChange={this.onChangeName} required />
        </div>
        <div>
          <label className='text-left block mt-2 text-white'>Password</label>
          <input type="password" className="outline-none w-full py-1 pl-1" value={this.state.password} onChange={this.onChangePassword} required />
        </div>
        <p className="text-red-600 italic text-left">
          {this.state.error}
        </p>
        <div className='mt-1 text-left block'>
          <input type="checkbox"/>
          <label className='text-left mt-2 text-white'>Remember Password</label>
        </div>
        <button type="submit" className=" m-auto block mt-3 w-full bg-blue-600 rounded-md py-1 text-white hover:bg-blue-700" onClick={this.props.onLogin}>Login</button>
        <div className='text-right mt-2'>
          <label className='text-left mt-2 text-white'>Looking to </label>
          <Link className="text-blue-400 text-lg hover:text-blue-500 underline decoration-1"
            to={"/sign-up"}>
              create an account?
            </Link>
        </div>
      </form>
    )
  }
}

export default Login;