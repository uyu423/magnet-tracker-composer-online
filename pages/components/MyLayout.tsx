import Header from "./Header";
import { CSSProperties, PropsWithChildren } from "react";

const layoutStyle: CSSProperties = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = (props: PropsWithChildren<any>) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
