import { Link } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";

export default function Navbar() {

  const {user} = useAuth();

    const handleLogout = () => {

    }

  return (
    <nav className="bg-gray-600 p-4 text-white flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to={"/"}> NoteApp</Link>
      </div>
      <input
        type="text"
        placeholder="Search notes..."
        className="bg-gray-600 px-4 py-4 rounded"
      />
      <div>
        {!user ? (
          <>
        <Link to={"/login"} className="btn btn-primary px-4 py-2 mr-4">Login</Link>
        <Link to={"/register"} className="btn btn-accent px-4 py-2 mr-4">Signup</Link>
          </>
        ) : (
          <>
          <span className="mr-4">{user.name}</span>
          <button onClick={handleLogout} className="btn btn-error px-4 py-2 mr-4">Logout</button>
          </>
        )}

      </div>
    </nav>
  );
}
