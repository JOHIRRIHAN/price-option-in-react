import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
const Navbar = () => {
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About Us" },
    { id: 3, path: "/services", name: "Our Services" },
    { id: 4, path: "/contact", name: "Contact Us" },
    { id: 5, path: "/products", name: "Our Products" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <FaWindowClose className="text-4xl " />
        ) : (
          <IoMdMenu className="text-4xl " />
        )}
      </div>
      <nav>
        <ul className={`md:flex absolute md:static bg-yellow-200 p-5 rounded-xl text-black text-xl font-semibold ${open ? '' : 'hidden'}`
        
    }>
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
