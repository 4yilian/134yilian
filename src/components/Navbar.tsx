import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: white;
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>首页</Link>
        </li>
        <li>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>关于我</Link>
        </li>
      </NavList>
    </Nav>
  );
};

export default Navbar;