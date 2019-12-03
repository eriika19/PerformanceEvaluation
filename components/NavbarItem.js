import { Component } from "react";
//import Link from "next/link";

const NavbarItem = (props) => (
    //   <Link href={route}>
        <a
          className="navbar-item"
        >
          {props.section}
        </a>
    //   </Link>
    );

export default NavbarItem;