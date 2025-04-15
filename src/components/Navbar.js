import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/"> 🌐Головна</Link></li>
        <li><Link to="/about">🔍 Про нас</Link></li>
        <li><Link to="/contact"> ✉️Контакти</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
