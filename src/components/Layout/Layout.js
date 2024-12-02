/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Fragment } from "react";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
