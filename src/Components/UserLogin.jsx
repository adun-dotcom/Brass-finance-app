import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {signIn} from './Auth/auth'
import {Button} from './Button/Button'

function AppLogin() {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
        type: 'admin'
    })

    const [loginSuccess, setLoginSuccess] = useState(false)

     function handleUser(e) {
       setInputs((inputs) => ({
         ...inputs,
        username: e.target.value
       }))
     }
     
     function handlePass(e) {
       setInputs((inputs) => ({
         ...inputs,
        password: e.target.value
       }))
     }
     
     function handleType(e) {
       setInputs((inputs) => ({
         ...inputs,
         type: e.target.value,
       }))
     }
  
    const handleSubmit = async (e)=>{
        e.preventDefault()
          setLoginSuccess(!loginSuccess)
          const token = await signIn(inputs.username, inputs.password, inputs.type)
          console.log(token)
          localStorage.setItem('x-access-token', token)
        }

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Log in to your account</h1>
          <form onSubmit={handleSubmit}>
            <div className="error-field">
              <br />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={inputs.username}
                onChange={handleUser}
              />
            </div>
            <div className="error-field">
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={inputs.password}
                onChange={handlePass}
              />
            </div>
            <br />
            <div>
              <select name="type" onChange={handleType}>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="btn-submit">
                {inputs.username === 'admin' && 
                inputs.password === '123456' && 
                inputs.type === 'admin'  ?
                <Link to="/dashboard">
                <Button
                type="submit"
                btnText="Log me in"
                width="100%"
                padding="1.5rem"
                onSubmit={handleSubmit}
              />
             </Link>:
                <Button
                  type="submit"
                  btnText="Log me in"
                  width="100%"
                  padding="1.5rem"
                />
             }
            </div>
        
            <span>
              Forgot your password? <a href="#">Reset it here</a>
            </span>
          </form>
        </div>
      </div>
    )
}

export default AppLogin

//  function AppLogin() {
//    const [inputs, setInputs] = useState({
//      username: '',
//      password: '',
//      type: 'admin',
//    })
  
//    const handleUserNameInputChange = (event) => {
//      event.persist()
//      setInputs((inputs) => ({
//        ...inputs,
//        username: event.target.value,
//      }))
    
//    }
//    const handleTypeChange = (event) => {
//      event.persist()
//      setInputs((inputs) => ({
//        ...inputs,
//        type: event.target.value,
//      }))
//    }
//    const handlePasswordInputChange = (event) => {
//      event.persist()
//      setInputs((inputs) => ({
//        ...inputs,
//        password: event.target.value,
//      }))
//    }
//    // const handleSubmit = (e) => {
//    //     e.preventDefault();
//    // };
//    const handleSubmit = async (e) => {
//      e.preventDefault()
//      const token = await signIn(inputs.username, inputs.password, inputs.type)
//      console.log(token)
//      localStorage.setItem('x-access-token', token)
//    }
  
   
//    return (
//      <div>

//        <div className="login-container">
//          <div>
//            <h3>Log in to your account</h3>
//          </div>
//          <div>
//            {' '}
//            <form onSubmit={handleSubmit} className="form">
//              <div className="form-details">

//                <input
//                  type="text"
//                  name="username"
//                  id="email"
//                  className="inputs"
//                  placeholder=" Email address"
//                  value={inputs.username}
//                  onChange={handleUserNameInputChange}
//                />
//              </div>
//              <div className="form-details password-div">
//                <input
//                  type="password"
//                  name="password"
//                  id="password"
//                  className="inputs"
//                  placeholder="Enter Password"
//                  value={inputs.password}
//                  onChange={handlePasswordInputChange}
//                />


//              </div>
//              <div>
//                <select name="type" onChange={handleTypeChange}>
//                  <option value="admin">Admin</option>
//                  <option value="user">User</option>
//                </select>
//              </div>
//              {inputs.password === '123456' &&
//              inputs.username === 'admin' &&
//              inputs.type === 'admin' ? (
//                <Link to="/dashboard">
//                  {' '}
//                  <Button
//                    className="login-button"
//                    primary
//                    inputPadding="15px 137px"
//                  >
//                    Log me in
//                  </Button>
//                </Link>
//              ) : (
//                <Button

//                  // disabled={inputs.password === 123456 || inputs.username === 'admin' || inputs.type === 'admin'}
//                  className="login-button notAllowed"
//                >
//                  Log me in
//                </Button>
//              )}
//              <p className="passwordReset">
//                Forgot your password?<a className="reset">Reset it here</a>
//              </p>
//            </form>
//          </div>
//        </div>
//      </div>
//    )
//              }

//  export default AppLogin