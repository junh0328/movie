import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import Home from '@/pages/Home';
import Latest from '@/pages/Latest';
import User from '@/pages/User';
import Slider from '@/pages/Slider';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import reset from '@/theme/globalStyle';
import theme from '@/theme';

function App(): JSX.Element {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        {/* components의 Header */}
        <Header />
        <Switch>
          <Route path="/slider">
            <Slider />
          </Route>
          <Route path="/latest">
            <Latest />
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
      </ThemeProvider>
    </Router>
  );
}

export default App;
