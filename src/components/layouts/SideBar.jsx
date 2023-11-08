import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Theme from "../../shared/Theme";

const SideBar = () => {
  const { user, logout } = useAuth();
  
    return (
      <div className="flex flex-col gap-5">
        {user?.email ? (
          <div>
            <img
              src={
                user.photoURL
                  ? user.photoURL
                  : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
              }
              className="text-center mx-auto"
            />
            <h6 className="text-xl font-bold text-center">
              {user?.displayName ? user?.displayName : "User"}
            </h6>
          </div>
        ) : (
          <div></div>
        )}

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "btn btn-neutral" : "btn btn-ghost"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="all-assignment"
          className={({ isActive }) =>
            isActive ? "btn btn-neutral" : "btn btn-ghost"
          }
        >
          Assignments
        </NavLink>

        {!user?.email ? (
          <>
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
          </>
        ) : (
          <>
            <NavLink
              to="/createAssignment"
              className={({ isActive }) =>
                isActive ? "btn btn-sm btn-neutral" : "btn btn-sm btn-ghost"
              }
            >
              Create assignments
            </NavLink>

            <NavLink
              to="/my-submitted-assignment"
              className={({ isActive }) =>
                isActive ? "btn btn-sm btn-neutral" : "btn btn-sm btn-ghost"
              }
            >
              My assignments
            </NavLink>

            <NavLink
              to="/all-submitted-assignment"
              className={({ isActive }) =>
                isActive ? "btn btn-sm btn-neutral" : "btn btn-sm btn-ghost"
              }
            >
              Submitted assignments links
            </NavLink>
            <a
              onClick={logout}
              className="text-lg text-center mx-auto font-semibold"
            >
              LOGOUT
            </a>
          </>
        )}

        <div className="text-center mx-auto">
          <Theme />
        </div>
      </div>
    );
};

export default SideBar;