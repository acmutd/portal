import React, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import TileGrid from "../components/TileGrid/TileGrid";
import { useAuth0 } from "@auth0/auth0-react";
import {
  authInterface,
  loginAction,
  logoutAction,
} from "../actions/authenticate";
import { connect } from "react-redux";

interface HomePageProps {
  isLoggedIn: boolean;
  login(): void;
}

const HomePage = (props: HomePageProps) => {
  const { loginWithRedirect, isLoading } = useAuth0();

  const wrapperFunction = () => {
    // const result = callApi("/api/createDivison");
    props.login();
    loginWithRedirect();
  };

  // return (
  //   <div>
  //     <button onClick={wrapperFunction}>Click me to sign in</button>
  //     {props.isLoggedIn && !isLoading ? (
  //       <h1>authenticated</h1>
  //     ) : (
  //       <h1>Not Authenticated</h1>
  //     )}
  //   </div>
  // );

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
