// src/components/Bouton.jsx
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  button {
    display: inline-block;
    width: 160px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid var(--main-text);
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease-in;
    z-index: 1;
    background-color: transparent;
    cursor: pointer;
  }

  button::before,
  button::after {
    content: '';
    position: absolute;
    top: 0;
    width: 0;
    height: 100%;
    transform: skew(15deg);
    transition: all 0.5s;
    overflow: hidden;
    z-index: -1;
  }

  button::before {
    left: -10px;
    background: var(--highlight); /* rose */
  }

  button::after {
    right: -10px;
    background: var(--main-text); /* brun */
  }

  button:hover::before,
  button:hover::after {
    width: 58%;
  }

  button:hover span {
    color: white;
    transition: 0.3s;
  }

  button span {
    color: var(--main-text);
    font-size: 1rem;
    font-family: var(--font-secondary);
    transition: all 0.3s ease-in;
  }
`;

const Bouton = ({ children, onClick }) => {
    return (
        <StyledWrapper>
            <button onClick={onClick}>
                <span>{children}</span>
            </button>
        </StyledWrapper>
    );
};

export default Bouton;
