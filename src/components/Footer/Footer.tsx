import React from 'react';
import { FooterNav, NavItem, NavList } from './styles';
import { NavLink } from 'react-router-dom';


export const Footer = () => {
  return (
    <FooterNav>
      <NavList>
        <NavItem>
          <NavLink to="/">Fazer pedidos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/orders">Ver os pedidos</NavLink>
        </NavItem>
      </NavList>
    </FooterNav>
  );
};
