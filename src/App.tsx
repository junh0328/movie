import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import Home from '@/pages/Home';
import Latest from '@/pages/Latest';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import reset from '@/theme/globalStyle';
import theme from '@/theme';
import Slider from '@/pages/Slider';
import Slider2 from '@/pages/Slider2';

function App(): JSX.Element {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        {/* components의 Header */}
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/genre/tv" exact>
            <Slider />
          </Route>
          <Route path="/genre/movie" exact>
            <Slider2 />
          </Route>
          <Route path="/latest" exact>
            <Latest />
          </Route>
        </Switch>
        {/* components의 Footer */}
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
