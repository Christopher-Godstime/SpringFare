import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRouter from "./customRouter/PrivateRouter";
import PageRender from "./customRouter/PageRender";
import Home from "./publicPages/Home";
import CustomerDashboard from "./customerPages/Dashboard";
import RiderDashboard from "./riderPages/Dashoard";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RiderPageRender from "./customRouter/RiderPageRender";
import RiderPrivateRouter from "./customRouter/RiderPrivateRouter";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import { GLOBALTYPES } from "./redux/actions/globalTypes";
import Testing from "./publicPages/Testing";

function App() {
  const auth = false; // Replace with your actual authentication logic
  const [show, setShow] = useState(false);
  return (
    <Router>
      <div className="font-poppins">
        <div className={auth === true ? "hidden" : "visible"}>
          <Header show={show} setShow={setShow} />
        </div>
        <div className={auth === true ? "visible" : "hidden"}>
          <Navbar />
        </div>

        <Route
          exact
          path="/"
          render={() => {
            if (auth) {
              // Check the user's role here (you may have this logic based on your authentication)
              const userRole = "rider"; // Replace this with actual user role

              // Render the corresponding dashboard based on the user's role
              if (userRole === "rider") {
                return <RiderDashboard />;
              } else if (userRole === "customer") {
                return <CustomerDashboard />;
              }
            }

            // If not authenticated, render the Home component
            return <Home />;
          }}
        />
        <Route exact path="/testing" component={Testing} />
        <RiderPrivateRouter
          exact
          path="/rider/:riderPage"
          component={RiderPageRender}
        />
        <RiderPrivateRouter
          exact
          path="/rider/:riderPage/:riderId"
          component={RiderPageRender}
        />
        <PrivateRouter
          exact
          path="/customer/:customerPage"
          component={PageRender}
        />
        <PrivateRouter
          exact
          path="/customer/:CustomerPage/:customerId"
          component={PageRender}
        />
        <div className={auth === true ? "hidden" : "visible"}>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
