import React, { useEffect } from "react";
import styled from "styled-components";
// import { useRecoilState } from "recoil";
// import { useAuth0 } from "@auth0/auth0-react";
import { jwt, auth } from "../../api/state";
import { useHistory } from "react-router-dom";

const AuthorizeAuth0 = () => {
  // const { isAuthenticated, isLoading } = useAuth0();
  // const [token, setToken] = useRecoilState(jwt);
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  })

  return (
    <AuthorizeComponent>
      <div className="container">
        <img
          className="acm-logo"
          src="https://www.acmutd.co/brand/General/Assets/Logos/favicon.png"
          alt="ACM Logo"
        />
        <h1 className="text">Thanks for signing in! Redirecting...</h1>
      </div>
    </AuthorizeComponent>
  );
};

const AuthorizeComponent = styled.div`
  .container {
    display: flex;
    background-color: black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .acm-logo {
    width: 20%;
  }
  .text {
    color: white;
    margin: 30px;
    font-family: ;
  }
  .retry-button {
    outline: none;
    border: 1px solid transparent;
    margin: 0px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 12px 0px;
    padding: 8px 18px;
    min-height: 48px;
    background-color: rgb(243, 126, 3);
    color: rgb(255, 255, 255);
    border-radius: 4px;
    font-size: 20px;
  }
  .retry-button:hover {
    background-color: rgb(247, 152, 52);
  }
`;

export default AuthorizeAuth0;