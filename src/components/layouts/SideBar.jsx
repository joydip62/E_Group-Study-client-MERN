import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
      <div className="flex flex-col gap-5">
        
        <h2 className="">user Name</h2>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "btn btn-neutral" : "btn btn-ghost"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/assignment"
          className={({ isActive }) =>
            isActive ? "btn btn-neutral" : "btn btn-ghost"
          }
        >
          Assignments
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "btn btn-neutral" : "btn btn-ghost"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "btn btn-neutral" : "btn btn-ghost"
          }
        >
          Register
        </NavLink>
        
        <NavLink>
          Logout
        </NavLink>

      </div>
    );
};

export default SideBar;