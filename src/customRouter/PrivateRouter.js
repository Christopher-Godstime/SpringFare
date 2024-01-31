import { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRouter({ component: Component, ...rest }) {
  const [firstLogin, setFirstLogin] = useState(true);
  const [userRole, setUserRole] = useState("customer");

  return (
    <Route
      {...rest}
      render={(props) =>
        firstLogin && userRole === "customer" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default PrivateRouter;
