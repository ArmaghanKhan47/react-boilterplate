import { Navigate } from "react-router-dom";
import UserRespository from "../repositories/UserRespository";

function Public({children}) {

  return (
    <div>
        <p>
          Public Layout
        </p>
        {UserRespository.isLoggedIn() && <Navigate to="/dashboard" replace={true} />}
        {children}
    </div>
  );
}

export default Public;
