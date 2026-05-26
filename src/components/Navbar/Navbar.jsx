import Link from "../Link/Link";
import { RiMenuFold4Fill } from "react-icons/ri";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/dashboard", name: "Dashboard" },
    { id: 3, path: "/profile", name: "UserProfile" },
    { id: 4, path: "/login", name: "Login" },
    { id: 5, path: "/settings", name: "Settings" },
  ];

  return (
    <nav className="text-black">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <MdOutlineRestaurantMenu className="text-2xl" />
        ) : (
          <RiMenuFold4Fill className="text-2xl"></RiMenuFold4Fill>
        )}
      </div>
      <ul className={`md:flex absolute duration-500 md:static
        ${open ? 'top-16' : '-top-60'}
        bg-yellow-400`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
