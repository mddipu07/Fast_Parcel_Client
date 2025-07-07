import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import useAxios from '../../../Hooks/useAxios';
const Register = () => {
  const [profilePic, setProfilePic] = useState('')
  const location = useLocation()
  console.log(location);
  const from = location.state?.from || '/';
  const navigate = useNavigate();
  const axiosInstance = useAxios()
   const { register, handleSubmit, formState:{errors} } = useForm();

   const { createUser , updateUserProfile } = useAuth();


   const onSubmit = data =>{
    console.log(data);
     createUser(data.email,data.password).then(async(result) =>{
       console.log(result.user); 
       const userInfo = {
          email: data.email,
          role:'user',
          created_at : new Date().toISOString(),
          last_log_in: new Date().toISOString() 
       }

     const userRes = await axiosInstance.post('/users', userInfo)
     console.log(userRes.data);



       const userProfile = {
        displayName:data.name,
        photoURL:profilePic
        
       }
        updateUserProfile(userProfile)
        .then(() =>{
          console.log('Profile name pic updated');
          navigate(from)
        })
        .catch(error =>{
          console.log(error);
        })

     })
     .catch((error) =>{
        console.log(error);
     })
   }
   const handleImageUpload = async(e) =>{
         const image = e.target.files[0]
         console.log(image);
         const formData = new FormData();
         formData.append('image',image)
         const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_Upload_KEY}`
         const res = await axios.post(imageUploadUrl, formData)
         setProfilePic(res.data.data.url);
         
   }

    return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Create Account!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">

          <label className="label"> Your Name</label>
          <input type="text" {...register('name',{
            required:true
          })} className="input" placeholder="Your Name" />
          {
            errors.email?.type === 'required' && <p className='text-red-500'>Name is required</p>
          }
          <label className="label">Profile</label>
          <input onChange={handleImageUpload} type="file"  className="input" placeholder="Your Profile Picture" />
       
          <label className="label">Email</label>
          <input type="email" {...register('email',{
            required:true
          })} className="input" placeholder="Email" />
          {
            errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
          }

          <label className="label">Password</label>
          <input type="password" {...register('password',{
            required:true, 
            minLength:6
          })} className="input" placeholder="Password" />

          {
            errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 character or longer</p>
          }

          <button className="btn mt-4 btn-primary text-black">Register</button>
        </fieldset>
        <p><small>Already have an account? <Link className='btn btn-link' to="/login">Login</Link></small></p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
    );
};

export default Register;