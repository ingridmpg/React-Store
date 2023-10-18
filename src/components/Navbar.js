import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link text-navbar">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ms-auto">
                    <ButtonContainer>
                        <span>
                        <FontAwesomeIcon icon={faCartPlus} />
                        </span>  my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainGray);
    .nav-link {
        color: var(--black) !important;
        font-size: 1.3rem;
    }
`;
