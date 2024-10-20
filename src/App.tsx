import React, { useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './pages/layout/Layout';
import { RouteInfo, siteRoutes } from './routes';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MainCarousel from './pages/landing-carousel/MainCarousel';
import Landing from './pages/landing/Landing';
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/react"

function App() {

  const renderSiteRoutes = useMemo(() => {
    return siteRoutes.map((route: RouteInfo) => {
      if (route.children) {
        const childrenRoute = route.children.map((childRoute: RouteInfo) => {
          return (<Route key={childRoute.id} path={`${route.path}${childRoute.path}`} element={<childRoute.component />} />);
        });
        return [...childrenRoute];
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
          <Routes>
            <Route path="/" element={<Landing />}>
              {/* <Route index element={<Dashboard />} /> */}
              {renderSiteRoutes}
            </Route>
          </Routes>
        </Layout>
      </ColorModeProvider>
  );
}

export default App;
