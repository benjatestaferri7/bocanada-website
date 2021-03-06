import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { RiRestaurantLine } from "react-icons/ri";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  padding: 1rem;
  justify-content: left;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  position: fixed;

  @media screen and (max-width: 400px) {
    position: fixed;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  position: fixed;

  // Nest element

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(RiRestaurantLine)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
