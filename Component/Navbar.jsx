import { Link } from "react-router-dom"

 function Navbar() {
  return (
    <div>
        <nav>
            <Link to='/' > Home</Link>
            <Link to='/Login' > Login</Link>
            <Link to='/Sign' > Sign</Link>

        
        
        </nav>
      
    </div>
  )
}
export default Navbar
