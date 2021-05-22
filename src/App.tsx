import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import Home from '@/pages/Home';
import About from '@/pages/About';
import User from '@/pages/User';
import Footer from '@/components/Organisms/Footer';
import Header from '@/components/Organisms/Header';
import reset from '@/theme/globalStyle';

function App(): JSX.Element {
  return (
    <Router>
      <Global styles={reset} />
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
