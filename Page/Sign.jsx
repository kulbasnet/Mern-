import axios from 'axios';
import { useState } from 'react';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

export default function Sign() {
  const navigate = useNavigate();

  const [data,setData] = useState({name:'',
    email:'',
    password:''
})





  const UserSignup = async (e)=>{
    e.preventDefault();
    const {name,email,password} = data;
    try{
      const {data} = await axios.post('/Sign',
      {
        name,email,password
      })

      if(data.error){
        toast.error(data.error);

      }else{
        setData({})
        toast.success('Sign up Sucessful')
        navigate('/Login')
      }
    }catch(error){
      console.log(error)

    }
  }

  function HandleUsername(e){
    setData({...data, name: e.target.value});
  }

  function HandleEMail(e){
    setData({...data, email : e.target.value});
  }

  function HandlePassword(e){
    setData({...data, password : e.target.value});
  }





  return (
    <div className='sign-container'>
      <h1> Sign In</h1>
      <form onSubmit={UserSignup} > 
        <label>Username</label><br/>
        <input className='input' type='text' value={data.name}  onChange={HandleUsername}/><br/>
        <label>Email</label><br/>
        <input className='input'   type='email'  value={data.email} onChange={HandleEMail}/><br/>
        <label>Password</label><br/>
        <input className='input' type='password'  value={data.password} onChange={HandlePassword}/><br/>

        <button type='submit' className='button'> Submit</button><br/>
        {/* <a href=''>Create an Account</a> */}

      </form>


      
    </div>
  )
}
