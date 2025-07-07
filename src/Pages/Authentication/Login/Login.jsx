import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit , formState:{errors}} = useForm();
    const {signInUser} = useAuth()
    const location = useLocation()
    console.log(location);
    const from = location.state?.from || '/';
    const navigate = useNavigate();
    const onSubmit = data =>{
         signInUser(data.email, data.password).then(result =>{
          console.log(result.user);
          navigate(from)
         }).catch(error => console.log(error))
    }
    return (
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Please Login</h1> 
       <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email')} className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" {...register('password',{
            required:true,
            minLength:6
          })} />
          {
            errors.password?.type === 'required' && 
            <p className='text-red-500'>PassWord is Required</p> 
          }
          {
            errors.password?.type ==='minLength' && <p className='text-red-500'>Password Must be 6 character or longer</p>
          }

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-primary text-black  mt-4">Login</button>
        </fieldset>
          <p><small>New to this website? <Link state={{from}}  className='btn btn-link' to="/register">Register</Link></small></p>
       </form>
       <SocialLogin></SocialLogin>
       </div>
       </div>
    );
};

export default Login;