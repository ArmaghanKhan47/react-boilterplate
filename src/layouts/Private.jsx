
import { Navigate } from "react-router-dom";
import UserRespository from "../repositories/UserRespository";

function Private({children}) {

  return (
    <div>
        <p>
          Private Layout
        </p>
        {!UserRespository.isLoggedIn() && <Navigate to="/" replace={true} />}
        {children}
    </div>
  );
}

export default Private;
