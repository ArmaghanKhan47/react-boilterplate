import { Navigate } from "react-router-dom";

function Public({children}) {

  function isLoggedIn() {
    return false;
  }

  return (
    <div>
        <p>
          Public Layout
        </p>
        {!isLoggedIn() && <Navigate to="/dashboard" replace={true} />}
        {children}
    </div>
  );
}

export default Public;
