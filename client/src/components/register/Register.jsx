import './Register.css';
import { useForm } from 'react-hook-form';
import  { useState } from 'react';



const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Registration Successful');
  };

  const [isFocused, setIsFocused] = useState(false);
  const [date, setDate] = useState('');

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    if (!e.target.value) {
      setIsFocused(false);
    }
  };

 



  return (
    <div className='login-container'>
      <h3 className='sign-in-heading'>Create an Account</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="firstname">
          <input type="text"
           placeholder='First Name' 
           {...register('firstName',{required: 'First Name is required'})}
           />
           {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <div className="lastname">
          <input type="text" 
          placeholder='Last Name' 
          {...register('lastName',{required:"Last Name is required"})}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <div className="dateofbirth">
  <input type={isFocused || date ? 'date': 'text'}
  value={date}
  onChange={(e) => setDate(e.target.value)}
  onFocus={handleFocus}
  onBlur={handleBlur}
placeholder="Date of Birth"
  />
</div>
        <div className="email">
          <input type="email" placeholder='Email Address' />
        </div>
        <div className="username">
          <input type="text" placeholder='Username' />
        </div>
        <div className="password">
          <input className='password-input' type="password" placeholder='Password' />
        </div>
        <div className="confirm-password">
          <input className='password-input' type="password" placeholder='Confirm Password' />
        </div>
        <div className="submit">
          <button type='submit'>Register</button>
        </div>
      </form>
      <div className="note">
        <h4>Already have an account, <a href="/login">Sign In</a>.</h4>
      </div>
    </div>
  );
};

export default Register;