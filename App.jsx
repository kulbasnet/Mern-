import Navbar from './Component/Navbar.jsx';
import {Routes, Route} from 'react-router-dom';
import Home from '../src/Page/Home.jsx';
import Login from './Page/Login.jsx';
import Sign from './Page/Sign.jsx';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext.jsx';

axios.defaults.baseURL= 'http://localhost:8000'
axios.defaults.withCredentials= true

 function App() {


  return (
    <UserContextProvider>
    {/* <Navbar/> */}
    <Toaster position='bottom-right' toastOptions={{duration:3000}}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Sign' element={<Sign/>}/>
    </Routes>
    
    </UserContextProvider>
  );
}

export default App


































// import {Routes, Route } from  'react-router-dom';
// import Navbar from './Component/Navbar.jsx';
// import Home from '../src/Page/Home.jsx';
// import Login from './Page/Login.jsx';
// import Sign from './Page/Sign.jsx';

// function App() {

//   return(<>
//   <Navbar/>
//   <Routes>
//     <Route path="/" element={<Home/>}/>
//     <Route path="/Login" element={<Login/>}/>
//     <Route path="/Sign" element={<Sign/>}/>

//   </Routes>
//   </>

//   );
  
     
// }

// export default App