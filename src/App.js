import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { useContext } from "react";
import dayjs from "dayjs";
import { ToastContainer } from "react-toastify";

import ConditionalRoute from "./components/Router/ConditionalRoute";

import Countdown from "./pages/Countdown";
import Enroll from "./pages/Enroll";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

import EventInfoContext, { EventInfoProvider } from "./contexts/EventInfoContext";
import UserContext, { UserProvider } from "./contexts/UserContext";

export default function App() {
  return (
    <>
      <ToastContainer />
      <EventInfoProvider>
        <UserProvider>
          <Router>
            <Switch>
              <ConditionalRoute check={ensureCountdownOngoing} path="/" exact>
                <Countdown />
              </ConditionalRoute>

              <ConditionalRoute check={ensureCountdownOver} path="/enroll" exact>
                <Enroll />
              </ConditionalRoute>

              <ConditionalRoute check={ensureCountdownOver} path="/sign-in" exact>
                <SignIn />
              </ConditionalRoute>

              <ConditionalRoute check={ensureAuthenticated} path="/dashboard">
                <Dashboard />
              </ConditionalRoute>
            </Switch>
          </Router>
        </UserProvider>
      </EventInfoProvider>
    </>
  );
}

function ensureCountdownOngoing() {
  const { eventInfo } = useContext(EventInfoContext);
  const { userData } = useContext(UserContext);

  return [
    { to: "/dashboard", check: () => !userData.token },
    { to: "/enroll", check: () => dayjs().isBefore(dayjs(eventInfo.startDate)) }
  ];
}

function ensureCountdownOver() {
  const { eventInfo } = useContext(EventInfoContext);
  const { userData } = useContext(UserContext);

  return [
    { to: "/dashboard", check: () => !userData.token },
    { to: "/", check: () => dayjs().isAfter(dayjs(eventInfo.startDate)), message: "As inscrições não foram liberadas ainda!" }
  ];
}

function ensureAuthenticated() {
  const { userData } = useContext(UserContext);

  return [
    { to: "/sign-in", check: () => !!userData.token, message: "Por favor, faça login!" }
  ];
}

function ensureEventIsFinished() {
  const { eventInfo } = useContext(EventInfoContext);

  return [
    { to: "/", check: () => dayjs().isAfter(dayjs(eventInfo.endDate)), message: "Os certificados não foram liberados ainda!" }
  ];
}
