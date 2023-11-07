import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Theme from "../../shared/Theme";

const Navbar = () => {
  const { user, logout } = useAuth();


    return (
      <div className="flex gap-1 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "btn btn-sm btn-neutral" : "btn btn-sm btn-ghost"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="all-assignment"
          className={({ isActive }) =>
            isActive ? "btn btn-sm btn-neutral" : "btn btn-sm btn-ghost"
          }
        >
          Assignments
        </NavLink>

        <div className="navbar-end">
          {!user?.email ? (
            <div className="flex gap-1 items-center">
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

              <Theme />
            </div>
          ) : (
            <div className="flex gap-1 items-center">
              <NavLink
                to="/createAssignment"
                className={({ isActive }) =>
                  isActive ? "btn btn-sm btn-neutral" : "btn btn-sm btn-ghost"
                }
              >
                Create assignments
              </NavLink>

              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "btn btn-sm btn-neutral" : "btn btn-sm btn-ghost"
                }
              >
                My assignments
              </NavLink>

              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "btn btn-sm btn-neutral" : "btn btn-sm btn-ghost"
                }
              >
                Submitted assignments links
              </NavLink>

              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={
                        user.photoURL
                          ? user.photoURL
                          : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                      }
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      {user?.displayName ? user?.displayName : "User"}
                    </a>
                  </li>
                  <li>
                    <a onClick={logout}>Logout</a>
                  </li>
                </ul>
              </div>

              <Theme />
            </div>
          )}
        </div>
      </div>
    );
};

export default Navbar;