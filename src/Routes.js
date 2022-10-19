import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Products from './pages/Products';
import NotFound from './pages/NotFound';

const Routes = () => {
  const routeList = [
    { label: 'home', link: '/', component: Main },
    { label: 'login', link: '/login', component: Login },
    { label: 'products', link: '/products', component: Products },
    { label: 'notfound', link: '*', component: NotFound },
  ];
  return (
    <Switch>
      {routeList.map((route) => (
        <Route
          key={route.label}
          exact
          path={route.link}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default Routes;
