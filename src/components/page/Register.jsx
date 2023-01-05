import React from 'react';
import "../../tailwind.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      phone:'',
      password:'',
      error:'',
      status:'',
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

  onChangePassword = (e) =>{
    this.setState({password:e.target.value})
  }

  onSubmit = (e) =>{
    let ob = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
    }
    let olddata = localStorage.getItem('users');
    if(olddata===null){
      olddata = []
      olddata.push(ob)
      localStorage.setItem('users', JSON.stringify(olddata));
      this.setState({error:'Registration success'});
      this.setState({status:"success"});
      setTimeout(() => {
        window.location.replace(window.location.origin + "/sign-in");
      }, 3000)
    }else{
      let oldArr = JSON.parse(olddata)
      oldArr.push(ob)
      localStorage.setItem("users", JSON.stringify(oldArr))
      this.setState({error:'Registration success'});
      this.setState({status:"success"});
      setTimeout(() => {
        window.location.replace(window.location.origin + "/sign-in");
      }, 3000)
    } 
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="mt-32 w-11/12 sm:w-96 m-auto border-2 border-sky-500 rounded p-5 shadow-lg bg-violet-500">
        <h1 className='text-3xl font-bold text-white'>Register</h1>
        <div className="form-group">
          <label className='text-left block mt-2 text-white'>Name</label>
          <input type="text" className="outline-none w-full py-1 pl-1" value={this.state.name} onChange={this.onChangeName} required />
        </div>
        <div className="form-group">
          <label className='text-left block mt-2 text-white'>Email</label>
          <input type="email" className="outline-none w-full py-1 pl-1" value={this.state.email} onChange={this.onChangeEmail} required />
        </div>
        <div className="form-group">
          <label className='text-left block mt-2 text-white'>Phone</label>
          <input type="tel" className="outline-none w-full py-1 pl-1" value={this.state.phone} onChange={this.onChangePhone} required />
        </div>
        <div className="form-group">
          <label className='text-left block mt-2 text-white'>Password</label>
          <input type="password" className="outline-none w-full py-1 pl-1" value={this.state.password} onChange={this.onChangePassword} required />
        </div>
        <div className='flex mt-1'>
          {this.state.status && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
            className="w-6 h-6 text-green-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          }
          <p className={this.state.status ? "text-green-500 italic text-left" : "text-yellow-300 italic text-left"}>
            {this.state.error}
          </p>
        </div>
        <div className='mt-1 text-left block'>
          <input type="checkbox"/>
          <label className='text-left mt-2 text-white'>I agree to the terms & conditions</label>
        </div>
        <button type="submit" className="mt-3 w-full bg-blue-600 rounded-md py-1 text-white hover:bg-blue-700" onClick={this.props.onRegister}>Register</button>
        <div className='text-right mt-2'>
          <label className='text-left mt-2 text-white'>Already have an account? </label>
          <Link className="text-blue-400 text-lg hover:text-blue-500 underline decoration-1"
            to={"/sign-in"}>
              Sign in
            </Link>
        </div>
      </form>
    )
  }
}

export default Register;