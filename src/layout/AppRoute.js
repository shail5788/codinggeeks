import React from "react";
import { Route } from "react-router-dom";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={prop => (
        <Layout>
          <Component {...prop} />
        </Layout>
      )}
    />
  );
};

export default AppRoute;
