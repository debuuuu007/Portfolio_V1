import "./Navbar.css"
import {Link} from "react-scroll"

function Navbarmenu() {
  return (
    <div className="Menu">
            <Link className="MenuItm">Home</Link>
            <Link className="MenuItm">Achievement</Link>
            <Link className="MenuItm">Blogs</Link>
            <Link className="MenuItm">Experience</Link>
            <Link className="MenuItm">Contact</Link>

        </div>
  )
}

export default Navbarmenu