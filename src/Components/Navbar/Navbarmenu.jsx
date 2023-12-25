import "./Navbar.css"
import {Link} from "react-scroll"

function Navbarmenu() {
  return (
    <div className="Menu">
            <Link className="MenuItm" activeClass="active" to="intro" smooth={true} spy={true} offset={-100}>Home</Link>
            <Link className="MenuItm" activeClass="active" to="skills" smooth={true} spy={true} offset={-100}>Skills</Link>
            <Link className="MenuItm" activeClass="active" to="blogs" smooth={true} spy={true} offset={-100}>Blogs</Link>
            <Link className="MenuItm" activeClass="active" to="achieved" smooth={true} spy={true}>Achievements</Link>

        </div>
  )
}

export default Navbarmenu