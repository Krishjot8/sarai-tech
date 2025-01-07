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
    <div className='registration-container'>
      <h3 className='sign-in-heading'>Create an Account</h3>

      <form className='registration-grid' onSubmit={handleSubmit(onSubmit)}>
      


        <div className="grid-item">
          <div className="input-wrapper">
          <input className='input-firstname' type="text"
           placeholder='First Name' 
           {...register('firstName',{required: '* First Name is a required field'})}
           />
           {errors.firstName && <p className='error-message'>{errors.firstName.message}</p>}
           </div>
        </div>

        <div className="grid-item">
        <div className="input-wrapper">
          <input className='input-lastname' type="text" 
          placeholder='Last Name' 
          {...register('lastName',{required:"* Last Name is a required field"})}
          />
          {errors.lastName && <p className='error-message'>{errors.lastName.message}</p>}
          </div>
        </div>


<div className="grid-item">
<div className="input-wrapper">
<input className='input-address' type="text" placeholder='Address'
{...register('address',{required:"* Address is a required field"})}
/>
{errors.address && <p className='error-message'>{errors.address.message}</p>}
</div>
</div>

<div className="grid-item">
<div className="input-wrapper">
<input className='input-city' type="text" placeholder='City'
{...register('city',{required:"* City is a required field"})}
/>
{errors.city && <p className='error-message'>{errors.city.message}</p>}
</div>
</div>

<div className="grid-item">
<div className="input-wrapper">
<input className='input-state' type="text" placeholder='State'
{...register('state',{required:"* State is a required field"})} />
{errors.state && <p className='error-message'>{errors.state.message}</p>}
</div>
</div>

<div className="grid-item">
<div className="input-wrapper">
<input className='input-zipcode' type="text" placeholder='Zip Code' 
{...register('zipcode',{required:"* zipcode is a required field"})}
/>
{errors.zipcode && <p className='error-message'>{errors.zipcode.message}</p>}
</div>
</div>

<div className="grid-item">
<div className="input-wrapper">


<input className='input-country' type="text" placeholder='Country' />

</div>
</div>


<div className="grid-item">
<div className="input-wrapper">
<input className='input-email_address' type="email" placeholder='Email Address' 
{...register('emailAddress',{required:"* email address is a required field"})}/>
{errors.emailAddress && <p className='error-message'>{errors.emailAddress.message}</p>}
</div>
 </div>

  <div className="grid-item">
  <div className="input-wrapper">
  <input className='input-dateOfbirth' type={isFocused || date ? 'date': 'text'}
  value={date}
  onChange={(e) => setDate(e.target.value)}
  onFocus={handleFocus}
  onBlur={handleBlur}
placeholder="Date of Birth"
{...register('dateOfBirth',{required:"* date of birth is a required field"})}
  />
  {errors.dateOfBirth && <p className='error-message'>{errors.dateOfBirth.message}</p>}
  </div>
</div>



<div className="grid-item">
<div className="input-wrapper">
<input className='input-phoneNumber' type="tel" placeholder='Phone Number' 
{...register('phoneNumber',{required:"* phone number is a required field"})}
/>
{errors.phoneNumber && <p className='error-message'>{errors.phoneNumber.message}</p>}
</div>
</div>

<div className="grid-item">
<div className="input-wrapper">
          <input className='input-username' type="text" placeholder='Username'
          {...register('username',{required:"* username is a required field"})} />
          {errors.username && <p className='error-message'>{errors.username.message}</p>}
          </div>
        </div>

        <div className="grid-item">
        <div className="input-wrapper">
          <input className='input-password' type="password" placeholder='Password'
          {...register('password',{required:"* password is a required field"})} />
          {errors.password && <p className='error-message'>{errors.password.message}</p>}
          </div>
        </div>

        <div className="grid-item">
        <div className="input-wrapper">
          <input className='input-confirmPassword' type="password" placeholder='Confirm Password'
          {...register('confirmPassword',{required:"* please re-enter your password"})} />
          {errors.confirmPassword && <p className='error-message'>{errors.confirmPassword.message}</p>}
          </div>
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