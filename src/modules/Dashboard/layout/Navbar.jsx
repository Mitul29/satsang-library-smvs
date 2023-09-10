import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetAuthData } from "../../../redux/slice/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(resetAuthData());
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#265373] py-4 lg:px-12 shadow border-solid border-t-2 border-white">
      <div className="flex justify-between w-full pl-6 pr-2">
        <div className="flex items-center flex-shrink-0 text-white">
          <span
            className="font-semibold text-xl tracking-tight cursor-pointer"
            onClick={() => navigate("/")}
          >
            Satsang Library
          </span>
        </div>
        <div className="">
          <button
            className="block text-md rounded text-white font-bold hover:text-[#265373] hover:bg-white px-4 py-2"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
