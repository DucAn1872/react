import React, { Component } from 'react'
import "../../tailwind.css";

export default class Login extends Component {
  render() {
    return (
      <div className="card shadow-sm card m-auto inline-block p-3">
        <div className="auth-inner">
          <form>
            <h3 className='text-2xl font-bold'>Sign In</h3>

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

            <div className="w-80 mr-3 inline-block">
              <div className="float-left">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className=" ml-1" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary bg-blue-600">
                Submit
              </button>
            </div>
            <p className="text-right mt-2 text-gray-400">
              Forgot <a href="#" className='text-blue-700 hover:text-blue-500'>password?</a>
            </p>
          </form>
        </div>
      </div>
    )
  }
}
