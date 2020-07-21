import React, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import TileGrid from "../components/TileGrid/TileGrid";
import {
  authInterface,
  loginAction,
  logoutAction,
} from "../actions/authenticate";
import { connect } from "react-redux";

// interface HomePageProps {
//   isLoggedIn: boolean;
//   login(): void;
// }

const HomePage = () => {
  return (
    <Fragment>
        <Navbar />
        <TileGrid />
    </Fragment>
  );
};


const mapState = (state: any) => {
  return {
    isLoggedIn: state.authenticateReducer.isLoggedIn,
  };
};

const mapDispatch = (dispatch: (action: authInterface) => void) => {
  return {
    login: () => {
      dispatch(loginAction());
    },
    logout: () => {
      dispatch(logoutAction());
    },
  };
};

export default connect(mapState, mapDispatch)(HomePage);
