import { Component } from "react";
//import Link from "next/link";

const NavbarItem = props => (
  //   <Link href={route}>
  <a className="navbar-item">
    {props.section}
    <style jsx>
      {`
        a.navbar-item {
          color: #7a6ff0;
        }

        @media (max-width: 1023px) {
          a.navbar-item {
            border-bottom: 1px dashed #7a6ff0 !important;
            padding: 1.2rem;
            margin-left: 1rem;
            margin-right: 1rem;
            color: #352c60;
          }
        }
      `}
    </style>
  </a>
  //   </Link>
);

export default NavbarItem;