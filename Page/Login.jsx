import { useState } from 'react';
import axios from 'axios'
import { useNavigate, Link} from 'react-router-dom';
import {toast} from 'react-hot-toast'
// import { useHistory } from 'react-router-dom';

 function Login() {

  const navigate = useNavigate();

  const [data,setData] = useState({name:'',
                                   email:'',
                                   password:''
  })




  const Userlogin= async (e)=>{
    e.preventDefault();
    const {email,password} = data
    try{
      const {data} = await axios.post('/Login',{
        email, 
        password
      });

      if(data.error){
        toast.error(data.error)
      }else{
        setData({});
        // navigate('/')
        navigate('/')
      }

    }catch(error){
      console.error('Error during login:', error);
      toast.error('An error occurred during login. Please try again.');

    }
  }

  function Handleemail(e){
    setData({...data, email:e.target.value});


  }

  function HandelPassword(e){
    setData({...data,password: e.target.value});
  }

  
  return (
    <div className='login-container'>
      <h1>Log In</h1>
      <form onSubmit={Userlogin}>
        <label>Email</label><br/>
      <input  className='input-login'  type='email'  value={data.email} onChange={Handleemail}/><br/>
      <label>Password</label><br/>
        <input className='input-login' type='password'  value={data.password} onChange={HandelPassword}/><br/>
        <button className='button-login'  type='submit'>Login</button>

      </form>
      <p className='para'> Dont have an Account? <Link to={'/Sign'}>Sign up</Link></p>
      
    </div>
  )
}

export default Login