import './navbar.css'
import logo from '../../assets/sarai-tech.png'
import loginlogo from '/src/assets/icons/user.svg'
import registerlogo from '/src/assets/icons/add-user.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <div>
<nav className='navbar'>
<ul className="links">  
<li><a href="/">Home</a></li>
<li><a href="services">Services</a></li>
<li><a href="careers">Careers</a></li>
<Link to="/">
<img src={logo} href="/home" className='navbar-logo' alt="logo" />
</Link>
<li><a href="reviews">Reviews</a></li>
<li><a href="blogs">Blogs</a></li>
<li><a href="contact">Contact</a></li>
<li><a href="about">About</a></li>
<li className='user-login'><a href="login"><img src={loginlogo} alt="user-login" width="30px"/> </a></li>
<li className='user-register'><a href="register"><img src={registerlogo} alt="user-register" width="40px"/> </a></li>
</ul>


</nav>
   </div>
   
  )
}

export default Navbar