import React, { Component } from 'react';
import { Link } from "react-router-dom";
import classnames from "classnames";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(userData);
  };
render() {
    const { errors } = this.state;
    return (
      <form noValidate onSubmit={this.onSubmit}>
        <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/user">Register</Link>
                </p>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <span className="red-text">
                   {errors.email}
                   {errors.emailnotfound}
                 </span>
          <input
            type="email"
            className={classnames("", {
              invalid: errors.email || errors.emailnotfound
            })}
            placeholder="Enter email"
            error={errors.email}
            id="email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <span className="red-text">
                   {errors.password}
                   {errors.passwordincorrect}
                 </span>
          <input
            type="password"
            className={classnames("", {
              invalid: errors.password || errors.passwordincorrect
            })}
            placeholder="Enter password"
            error={errors.password}
            id="password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}