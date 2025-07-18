import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import LoggedInLayout from "./components/LoggedInLayout";
import "./index.css";

// Pages
import Account from "./pages/account";
import Editor from "./pages/editor/[projectId]";
import Export from "./pages/export/[projectId]";
import HomeAfterLogin from "./pages/home";
import Home from "./pages/index";
import Login from "./pages/login";
import Marketplace from "./pages/marketplace";
import Preview from "./pages/preview/[projectId]";
import Signup from "./pages/signup";
import Team from "./pages/team";
import Templates from "./pages/templates";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./components/landing/AboutUs";
import Pricing from "./components/Pricing";

// Global effects
import MouseTrail from "./components/MouseTrail";
import CircleExplosion from "./components/CircleExplosion";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        {/* Global Animations */}
        <ScrollToTop />
        <MouseTrail />
        <CircleExplosion />

        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />

          {/* After-login routes */}
          <Route
            path="/home"
            element={
              <LoggedInLayout>
                <HomeAfterLogin />
              </LoggedInLayout>
            }
          />
          <Route
            path="/templates"
            element={
              <LoggedInLayout>
                <Templates />
              </LoggedInLayout>
            }
          />
          <Route
            path="/account"
            element={
              <LoggedInLayout>
                <Account />
              </LoggedInLayout>
            }
          />
          <Route
            path="/team"
            element={
              <LoggedInLayout>
                <Team />
              </LoggedInLayout>
            }
          />
          <Route
            path="/marketplace"
            element={
              <LoggedInLayout>
                <Marketplace />
              </LoggedInLayout>
            }
          />
          <Route
            path="/editor/:projectId"
            element={
              <LoggedInLayout>
                <Editor />
              </LoggedInLayout>
            }
          />
          <Route
            path="/preview/:projectId"
            element={
              <LoggedInLayout>
                <Preview />
              </LoggedInLayout>
            }
          />
          <Route
            path="/export/:projectId"
            element={
              <LoggedInLayout>
                <Export />
              </LoggedInLayout>
            }
          />
        </Routes>
      </Router>
    </DndProvider>
  );
}

export default App;
