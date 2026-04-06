import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navigation = () => {

  const navigate = useNavigate()

  const baseClasses =
    "flex items-center justify-between px-4 py-2 rounded-lg text-sm font-medium transition";

  return (
    <nav className="flex ml-150 gap-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseClasses} ${
            isActive
               ? "bg-black text-white"
              : "text-black hover:bg-yellow-400 hover:text-white"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          `${baseClasses} ${
            isActive
              ? "bg-black text-white"
              : "text-black hover:bg-yellow-400 hover:text-white"
          }`
        }
      >
        Shop
      </NavLink>
      <button
        onClick={() => {
          localStorage.removeItem("authUser");
          navigate("/login", { replace: true });
        }}
        className="
    mt-auto
    flex items-center gap-2
    px-4 py-2
    cursor-pointer
    rounded-md
    text-sm font-medium
    border
    text-red-600
    hover:bg-red-50
    hover:text-red-700
    transition-colors
  "
      >
        Logout
      </button>

    </nav>
  );
};

export default Navigation;
