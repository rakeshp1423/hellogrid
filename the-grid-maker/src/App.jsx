import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoggedInLayout from "./components/LoggedInLayout";
import './index.css';
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

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* After-login routes with layout */}
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
        <Route path="/editor/:projectId" element={<Editor />} />
        <Route path="/preview/:projectId" element={<Preview />} />
        <Route path="/export/:projectId" element={<Export />} />
      </Routes>
    </Router>
  );
}

export default App;
