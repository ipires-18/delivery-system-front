import styled from 'styled-components';

export  const FooterNav = styled.footer`
  width: 100%;
  background-color: #333333;
  color: #ffffff;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.2);

  a{
    text-decoration: none;
    color: #FFF;
    font-size: 16px;
    transition: color 0.3s ease;
    &:hover {
      color: #f39c12;
    }
  }

`;

export const NavList = styled.div`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.span`
  margin: 0;
`;


