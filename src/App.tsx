import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import Slider from '@/components/pages/Slider';
import Slider2 from '@/components/pages/Slider2';
import Latest from '@/components/pages/Latest';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import reset from '@/theme/globalStyle';
import theme from '@/theme';
import Ex from './components/pages/Ex';

function App(): JSX.Element {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        {/* components의 Header */}
        <Header />
        <Switch>
          <Route path="/" exact>
            <Slider />
          </Route>
          <Route path="/genre/tv" exact>
            <Slider2 />
          </Route>
          <Route path="/genre/movie" exact>
            <Slider />
          </Route>
          <Route path="/latest" exact>
            <Latest />
          </Route>
          <Route path="/Ex">
            <Ex />
          </Route>
        </Switch>
        {/* components의 Footer */}
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
