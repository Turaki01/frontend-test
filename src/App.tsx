import AppNav from "components/app-nav/app-nav.component";
import Dashboard from "pages/dashboard/dashboard.component";
import StarShips from "pages/starships/starships.component";
import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { constants } from "utils/constants";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AppNav />
        <div className="app-content">
          <Route exact path="/" component={Dashboard} />
          <Route path={constants.dashboard} component={Dashboard} />
          <Route path={constants.starships} component={StarShips} />

          <Redirect from="/" to="/app/dashboard" />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
