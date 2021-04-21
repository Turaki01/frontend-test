import React, { FC } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { constants } from "utils/constants";
import Logo from "../../assets/img/logo.png";

import "./app-nav.styles.scss";

const AppNav: FC<RouteComponentProps> = ({ history }) => {
  const path = history.location.pathname;

  return (
    <div className="app-nav">
      <img
        className="logo"
        src={Logo}
        alt="Logo"
        style={{ maxWidth: "80px" }}
      />

      <div className="menu-items">
        <div className="menu-item__container">
          <p className="cursor" onClick={() => history.push(constants.dashboard)}>
            Dashboard
          </p>
          {path.includes("dashboard") && (
            <div className="active-menu__item"></div>
          )}
        </div>

        <div className="menu-item__container">
          <p className="cursor" onClick={() => history.push(constants.starships)}>
            Starships
          </p>
          {path.includes("starships") && (
            <div className="active-menu__item"></div>
          )}
        </div>

        <div className="menu-item__container">
          <p className="cursor">People</p>
          {/* <div className="active-menu__item"></div> */}
        </div>

        <div className="menu-item__container">
          <p className="cursor">Vehicles</p>
          {/* <div className="active-menu__item"></div> */}
        </div>

        <div className="menu-item__container">
          <p className="cursor">Species</p>
          {/* <div className="active-menu__item"></div> */}
        </div>
      </div>
    </div>
  );
};

export default withRouter(AppNav);
