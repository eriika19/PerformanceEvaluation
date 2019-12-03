import Nav from "./Nav";

const Layout = props => (
  <div className="has-padding-top">
    <Nav />
        {props.children}
        <style>{`
        .has-padding-top {
            padding-top: 8.2rem;
        }
        `}
        </style>
  </div>
);

export default Layout;
