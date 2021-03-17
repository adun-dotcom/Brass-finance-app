import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button/Button'
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{&}~-]+@[a-zA-Z0-9-]+.(?:\.[a-zA-Z0-9-]+)*$/
)
export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      password: null,
      submitted: false,
      formError: {
        email: '',
        password: '',
      },
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    const formError = this.state.formError
    switch (name) {
      case 'email':
        formError.email = emailRegex.test(value)
          ? '' : 'Please enter a valid email address'
        break
      case 'password':
        formError.password = value.length < 6 ? 'minimum password is 6' : ''
      default:
        break
    }
    this.setState({ formError, [name]: value })
  }
  
  handleClick = (e) => {
    e.preventDefault()
    this.setState({submitted: true})
  }
  render() {
    const formError = { ...this.state.formError }
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Log in to your account</h1>
          <form onSubmit={this.handleClick}>
            <div className="error-field">
              <small>{formError.email}</small>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="error-field">
              <small>{formError.password}</small>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="btn-submit">
              {this.state.submitted &&
              emailRegex.test(this.state.email) &&
              this.state.password.length < 6 ? (
                <Link to="/Welcome">
                  {' '}
                  <Button
                    type="submit"
                    btnText="Log me in"
                    width="100%"
                    padding="1.5rem"
                  />
                </Link>
              ) : (
                <Button
                  type="submit"
                  btnText="Log me in"
                  width="100%"
                  padding="1.5rem"
                />
              )}
            </div>

            <span>
              Forgot your password? <a href="#">Reset it here</a>
            </span>
          </form>
        </div>
      </div>
    )
  }
}
