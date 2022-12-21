import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <div className="card shadow-sm card m-auto inline-block p-3">
        <div>
          <form>
            <h3 className='text-2xl font-bold'>Sign Up</h3>

            <div className="w-80 mb-2 mr-3">
              <label className='float-left'>First name</label>
              <input
                type="text"
                className="form-control ml-2 inline-block required:border-red-600"
                placeholder="First name"
              />
            </div>

            <div className="w-80 mb-2 mr-3">
              <label className='float-left'>Last name</label>
              <input type="text" className="form-control ml-2 inline-block required:border-red-600" placeholder="Last name" />
            </div>

            <div className="w-80 mb-2 mr-3">
              <label className='float-left'>Email address</label>
              <input
                type="email"
                className="form-control ml-2 inline-block required:border-red-600"
                placeholder="Enter email"
              />
            </div>

            <div className="w-80 mb-2 mr-3">
              <label className='float-left'>Password</label>
              <input
                type="password"
                className="form-control ml-2 inline-block required:border-red-600"
                placeholder="Enter password"
              />
            </div>

            <div className="w-80 mb-2 mr-3">
              <label className='float-left'>Re-enter Password</label>
              <input
                type="password"
                className="form-control ml-2 inline-block required:border-red-600"
                placeholder="Confirm password"
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary bg-blue-600">
                Sign Up
              </button>
            </div>
            <p className="text-right mt-2 text-gray-400">
              Already registered <a href="/sign-in" className='text-blue-700 hover:text-blue-500'>sign in?</a>
            </p>
          </form>
        </div>
      </div>
    )
  }
}
