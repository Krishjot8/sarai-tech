import './Login.css'

const Login = () => {
  return (
    <div className='login-container'>
   <h3 className='sign-in-heading'>Sign In</h3>

<form action="">
  <div className="username">
  <input type="text" placeholder='Username' />
  </div>
 <div className="password">
 <input className='password-input' type="password" placeholder='Password' />
 </div>
 <div className="submit">
 <button type='submit'>Login</button>
 </div>
</form>
<div className="note">
  <h4>Dont have an account, <a href="/register">create one</a>.</h4>
</div>
    </div>
  )
}

export default Login