import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Global, css } from "@emotion/react";
import Home from "@/pages/Home";
import About from "./pages/About";
import User from "@/pages/User";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App(): JSX.Element {
  return (
    <Router>
      <Global
        styles={css`
          body {
            background-color: #141414;
            color: #e5e5e5;
          }
        `}
      />
      {/* components의 Header */}
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <User />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {/* components의 Footer */}
      <Footer />
    </Router>
  );
}

export default App;
