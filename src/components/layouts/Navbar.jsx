import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <div className="flex gap-5 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "btn btn-sm btn-neutral" : "btn btn-sm btn-ghost"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/assignment"
          className={({ isActive }) =>
            isActive ? "btn btn-sm btn-neutral" : "btn btn-sm btn-ghost"
          }
        >
          Assignments
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "btn btn-sm btn-neutral" : "btn btn-sm btn-ghost"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "btn btn-sm btn-neutral" : "btn btn-sm btn-ghost"
          }
        >
          Register
        </NavLink>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;