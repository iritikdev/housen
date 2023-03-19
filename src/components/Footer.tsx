import { Box, Container } from "@chakra-ui/react";
import React from "react";

interface Props {}

function Footer(props: Props) {
  return (
    <footer>
      <div className="footer container">
        <div className="logo">Housen © 2020</div>

        <ul className="nav">
          <li className="nav__item">About</li>
          <li className="nav__item">FAQ</li>
          <li className="nav__item">Terms & Conditions</li>
          <li className="nav__item">Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
