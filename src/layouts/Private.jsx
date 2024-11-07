
import { Navigate } from "react-router-dom";

function Private({children}) {
  
  function isLoggedIn() {
    return true;
  }

  return (
    <div>
        <p>
          Private Layout
        </p>
        {!isLoggedIn() && <Navigate to="/" replace={true} />}
        {children}
    </div>
  );
}

export default Private;
