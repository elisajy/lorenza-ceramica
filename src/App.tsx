import React, { useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './pages/layout/Layout';
import { RouteInfo, siteRoutes } from './routes';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MainCarousel from './pages/landing-carousel/MainCarousel';
import Landing from './pages/landing/Landing';
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/react"
import ScrollToTop from './components/scroll-to-top/ScrollToTop';

function App() {

  const renderSiteRoutes = useMemo(() => {
    return siteRoutes.map((route: RouteInfo) => {
      if (route.children) {
        const childrenRoute = <Route key={route.id} path={route.path} element={<route.component />}>
          {
            route.children.map((childRoute: RouteInfo) => {
              return <Route path={childRoute.path} element={<childRoute.component />} />
            })
          }
        </Route>
        return childrenRoute;
      } else {
        return (<Route key={route.id} path={route.path} element={<route.component />} />);
      }
    });
  }, []);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <ColorModeProvider>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          {renderSiteRoutes}
        </Routes>
      </Layout>
    </ColorModeProvider>
  );
}

export default App;
