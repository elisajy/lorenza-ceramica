import { useMemo } from 'react';
import './App.css';
import Layout from './pages/layout/Layout';
import { RouteInfo, siteRoutes } from './routes';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import { ColorModeProvider } from "@chakra-ui/react"
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import FacebookTokenFetcher from './pages/landing-instagram/FacebookTokenFetcher';

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
    <ColorModeProvider>
      <Layout>
        <ScrollToTop />
        <FacebookTokenFetcher />
        <Routes>
          <Route path="/" element={<Landing />} />
          {renderSiteRoutes}
        </Routes>
      </Layout>
    </ColorModeProvider>
  );
}

export default App;
