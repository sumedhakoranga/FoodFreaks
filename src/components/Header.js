import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const[loggedIn, setLoggedIn] = useState(true);
  console.log(useState());

  return (
    <div className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWazbnsOdhNl46Z7u4vE4mv-SzKtGxVMw-pA&s"
        alt="logo"
      />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      {loggedIn ? (
        <button onClick={() => setLoggedIn(false)}>Login</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Logout</button>
      )}
    </div>
  );
};

export default Header;