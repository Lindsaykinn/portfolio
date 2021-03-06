import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="nav-header">
      <div className="container mx-auto flex justify-between">
        <nav>
          <NavLink
            to="/"
            exact
            className="lindsay inline-flex items-center py-2 px-3 mr-4 cursive tracking-widest"
          >
            Lindsay
          </NavLink>

          <NavLink
            to="/project"
            className="navsubs inline-flex items-center py-2 px-3 mr-4 tracking-widest"
            activeClassName="teal"
          >
            Projects
          </NavLink>
          
          <NavLink
            to="/post"
            className="navsubs inline-flex items-center py-2 px-3 mr-4 tracking-widest"
            activeClassName="teal"
          >
            My Skills
          </NavLink>


          <NavLink
            to="/about"
            className="navsubs inline-flex items-center py-2 px-3 mr-4 tracking-widest"
            activeClassName="teal"
          >
            About Me!
          </NavLink>
        </nav>
        <div className='inline-flex py-3 px-3 my-6'>          
          <h1 className='contact'>Get in Touch! 👉🏻</h1>&nbsp;&nbsp;
         
          <SocialIcon
            url="mailto:lindsay.kinn@gmail.com"
            className="md:mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/Lindsaykinn"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/lindsaykinn/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://marketableskillz.medium.com/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/pidgita"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
