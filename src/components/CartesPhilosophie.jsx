import React from "react";
import styled from "styled-components";

const CartesPhilosophie = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <h2 className="heading">Mes compétences clés</h2>
        <ul>
          <li>Développement web (React, HTML/CSS, Tailwind)</li>
          <li>Conception UI/UX</li>
          <li>Gestion de projet & organisation</li>
          <li>Communication & storytelling</li>
          <li>Création de contenu</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="heading">Ma personnalité & philosophie</h2>
        <p>
          Je suis une personne douce, passionnée et curieuse. Je suis convaincue que la simplicité est la clé pour la compréhension et la créativité.
          L'élégance réside dans la simplicité bien pensée.
        </p>
        <p>
          J’aime construire des choses utiles, belles et humaines, avec un
          équilibre entre logique, émotions et foi.
        </p>
        <p className="signature">— Abigaëlle Jean</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  margin-bottom: 4rem;

  .card {
    position: relative;
    width: 100%;
    max-width: 550px;
    min-height: 340px;
    background-color: #fffdf9;
    padding: 2rem;
    border-radius: 16px;
    color: var(--main-text);
    cursor: default;
    overflow: hidden;
    z-index: 1;
    transition: all 0.4s ease;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(4px);
  }

  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 500px;
    height: 500px;
    border-radius: 20px;
    background: linear-gradient(
      -45deg,
      #f4a6a6 0%,
      #ffd6d6 50%,
      #ffecec 100%
    );
    z-index: -1;
    pointer-events: none;
    transition: transform 0.6s ease;
    filter: blur(12px);
    opacity: 0.6;
  }

  .card:hover::before {
    transform: rotate(-90deg) scale(1.15);
    opacity: 0.85;
  }

  .heading {
    font-family: var(--font-secondary);
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    color: var(--main-text);
  }

  ul {
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.7rem;
    font-size: 1rem;
  }

  p {
    font-family: var(--font-primary);
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  .signature {
    color: var(--highlight);
    font-style: italic;
    font-weight: bold;
    text-align: right;
  }

  @media (max-width: 768px) {
    .card {
      padding: 1.5rem;
      max-width: 90%;
    }
  }
`;

export default CartesPhilosophie;
