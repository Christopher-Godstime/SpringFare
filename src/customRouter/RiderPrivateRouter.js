import { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

function RiderPrivateRouter({ component: Component, ...rest }) {
  const [firstLogin, setFirstLogin] = useState(true);
  const [userRole, setUserRole] = useState("customer");

  return (
    <Route
      {...rest}
      render={(props) =>
        firstLogin && userRole === "rider" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default RiderPrivateRouter;
