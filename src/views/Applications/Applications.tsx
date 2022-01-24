import React, { useEffect } from "react";
import { Layout } from "antd";
import {
  Card,
  CardHeader,
  Grid,
  CircularProgress,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import Navbar from "../../components/Navbar/DarkNavbar";
import { useHistory } from "react-router-dom";
import "./Applications.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useRecoilValue } from "recoil";
import { profile, application } from "../../api/state";
const { Content } = Layout;

const Applications = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  const user_profile = useRecoilValue(profile);
  const open_applications = useRecoilValue(application);
  const history = useHistory();

  useEffect(() => {
    if (isLoading || user_profile.exists || user_profile.isLoading) {
      return;
    }
    if (isAuthenticated) {
      history.push("/newprofile");
    }
  }, [isLoading, isAuthenticated, user_profile, history]);

  const cardApps = () => {
    return (
      <Grid container alignItems="stretch" spacing={2}>
        {open_applications.applications?.map((app) => {
          if (app.active) {
            return (
              <Grid item xs={12} md={6} lg={4}>
                <Card>
                  <CardHeader title={app.typeform_name} />
                  <CardContent>{app.description}</CardContent>
                  <CardActions
                    style={{ justifyContent: "center", paddingBottom: "20px" }}
                  >
                    <Button
                      href={app.path_name}
                      variant="contained"
                      color="primary"
                    >
                      Apply here
                    </Button>
                    {app.external_link && (
                      <Button
                        href={app.external_link}
                        variant="contained"
                        color="primary"
                      >
                        Learn more
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            );
          }
        })}
      </Grid>
    );
  };

  return (
    <Layout>
      <Navbar selectedPage="applications" />
      <Content>
        {open_applications.isLoading ? <CircularProgress /> : cardApps()}
      </Content>
    </Layout>
  );
};

export default Applications;
