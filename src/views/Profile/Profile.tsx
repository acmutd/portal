import React, { useEffect, Fragment } from "react";
import { Tabs, Layout } from "antd";
import Navbar from "../../components/Navbar/DarkNavbar";
import "./Profile.css";
import Button from "../../components/OrangeButton/OrangeButton";
import { profile, event } from "../../api/state";
import { useRecoilValue } from "recoil";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import DiscordPane from "./Discord";
const { Content } = Layout;
const { TabPane } = Tabs;

const Profile = () => {
  const history = useHistory();
  const user_profile = useRecoilValue(profile);
  const events = useRecoilValue(event); //Add another check for this later
  const { isLoading, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isLoading || user_profile.exists || user_profile.isLoading) {
      return;
    }
    if (isAuthenticated) {
      history.push("/newprofile");
    }
  }, [isLoading, isAuthenticated, user_profile, history]);

  const discPane =
    user_profile.profile?.discord_verified || false ? (
      <Fragment>
        <h1 style={{ color: "white", marginBottom: 20 }}>
          Your Discord Profile:
        </h1>
        <p>
          <strong>Discord ID:</strong> {user_profile.profile?.snowflake}
        </p>
        <p>
          <strong>Username:</strong>{" "}
          {user_profile.profile?.username +
            "#" +
            user_profile.profile?.discriminator}
        </p>
      </Fragment>
    ) : (
      <DiscordPane />
    );

  const eventCard  = (event: any) => {
    //How do I get the EVENT object?
    //extract date property
    //Ignore sub-title - Only display title? Modify padding and all appropriately while keeping current title/sub-title commented out
    return (
      <div className="flex items-center lg:max-w-4xl space-x-3 border-2 justify-center rounded-2xl py-4 pl-6 pr-2 bg-gray-900">
        <div className="flex flex-col justify-center space-y-2 px-4 py-2">
            <div className="lg:text-3xl text-white text-center">
                Aug
            </div>
            <div className="lg:text-4xl text-white text-center">
                8
            </div>
            <div className="lg:text-3xl text-white text-center">
                Sun
            </div>
        </div>
        <div className="flex-auto inline-block px-2 py-1 space-y-8">
            <div className="space-y-2">
                <div className="lg:text-4xl">
                    Working with Firebase and Flutter
                </div>
                <div className="lg:text-2xl">
                    with Daniel Gerynd
                </div>
            </div>
            <div className="space-x-8">
                <a className="inline-block text-white hover:text-white text-base text-center px-1 py-3 w-32 rounded-2xl box-content border-0 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-yellow-500 hover:to-red-500 href=#">
                    RSVP
                </a>
                <a className="inline-block text-white hover:text-white text-base text-center px-1 py-3 w-32 rounded-2xl box-content border-0 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-yellow-500 hover:to-red-500 href=#">
                    View Event
                </a>
            </div>
        </div>
      </div>
    )
  }

  /*const eventSections = (
    <Menu mode="horizontal">
        <Menu.Item icon={<MailOutlined />} key="Upcoming">
            Upcoming
        </Menu.Item>
        <Menu.Item key="Attending">
            Attending
        </Menu.Item>
        <Menu.Item key="Past">
            Past
        </Menu.Item>
    </Menu>
  ) */


  return (
    <Layout>
      <Navbar selectedPage="profile" />
      <Content>
        <Tabs defaultActiveKey="1" tabPosition="left">
          <TabPane tab="Event Participation" key={1}>
            <h1 style={{ color: "white", marginBottom: 20 }}>Event History:</h1>
            {user_profile.profile?.past_events ? (
              user_profile.profile.past_events
                .map((event, index) => (
                  <div className="border sepFlexBox" key={index}>
                    <h2 style={{ color: "white" }}>{event.name}</h2>
                    <h2 style={{ color: "white" }}>
                      |&nbsp;&nbsp;&nbsp;
                      {new Date(event.submitted_at).toDateString()}
                    </h2>
                  </div>
                ))
                .reverse()
            ) : (
              <p>No events attended yet.</p>
            )}
          </TabPane>
          <TabPane tab="Past Applications" key={2}>
            <h1 style={{ color: "white" }}>Submitted Applications:</h1>
            <p>
              Note: If you recently submitted an application, it may take a
              short period of time before appearing
            </p>
            {

            }
            {user_profile.profile?.past_applications ? (
              user_profile.profile.past_applications
                .map((app, index) => (
                  <div className="border sepFlexBox" key={index}>
                    <h2 style={{ color: "white" }}>{app.name}</h2>
                    <h2 style={{ color: "white" }}>
                      |&nbsp;&nbsp;&nbsp;
                      {new Date(app.submitted_at).toDateString()}
                    </h2>
                  </div>
                ))
                .reverse()
            ) : (
              <p>No applications submitted yet.</p>
            )}
          </TabPane>
          <TabPane tab="Shortcuts" key={3}>
            <h1 style={{ color: "white", marginBottom: 20 }}>Quick Links:</h1>
            <ul className="linkList" style={{ fontSize: 20 }}>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://acmutd.co/discord"
                >
                  ACM Discord
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/acmatutd/"
                >
                  ACM Facebook
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/acmutd/"
                >
                  ACM Instagram
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/company/acmutd/"
                >
                  ACM LinkedIn
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.acmutd.co/"
                >
                  ACM Website
                </a>
              </li>
            </ul>
          </TabPane>
          {/*<TabPane tab="Badges" key={3}>
            Content 3
                </TabPane>*/}
          <TabPane tab="Settings" key={4}>
            <h1 style={{ color: "white", marginBottom: 20 }}>
              Your Profile Data:{" "}
            </h1>
            <p>
              <strong>Email:</strong> {user_profile.profile?.email}
            </p>
            <p>
              <strong>Name:</strong> {user_profile.profile?.first_name}{" "}
              {user_profile.profile?.last_name}
            </p>
            <p>
              <strong>NetID:</strong> {user_profile.profile?.net_id}
            </p>
            <p>
              <strong>Major:</strong> {user_profile.profile?.major}
            </p>
            <p>
              <strong>University:</strong> {user_profile.profile?.university}
            </p>
            <p>
              <strong>Classification:</strong>{" "}
              {user_profile.profile?.classification}
            </p>
            <Button
              text="Update Profile Information"
              redirectURL="/newprofile"
            />
          </TabPane>
          <TabPane tab="Discord" key={5}>
            {discPane}
          </TabPane>
          <TabPane tab="Events" key={6}>
              <div className="lg:text-2xl text-white">Upcoming Events</div>
              {events.events? (
                  events.events
                      .map((event, index) => (
                          eventCard(event)
                      ))
                      .reverse()
              ) : (
                  <p>No events available.</p>
              )}
          </TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
};

export default Profile;

/* const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
]; */
