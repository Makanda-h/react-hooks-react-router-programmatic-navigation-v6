import { Outlet, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <>
          <NavBar logout={logout} />
          <Outlet context={login} />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}

export default App;
