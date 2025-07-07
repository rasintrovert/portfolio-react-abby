import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function CarteProjet({
  titre,
  description,
  image,
  categorie,
  slug,
}) {
  return (
    <StyledWrapper>
      <div className="card">
        <img src={image} alt={titre} className="card-img" />
        <div className="card__content">
          <p className="card__title">{titre}</p>

          <p className="card__description">{description}</p>

          <Link to={`/projets/${slug}`} className="voir-plus">
            Voir plus
          </Link>
        </div>

        <span className="badge">{categorie}</span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: clamp(260px, 30vw, 420px);
    height: clamp(260px, 34vw, 420px);

    border-radius: 16px;
    overflow: hidden;
    perspective: 1000px;
    background-color: transparent;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
    transition: transform 0.4s ease;
    cursor: pointer;
  }

  .card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
  .card:hover .card-img {
    transform: scale(0);
  }

  .card__content {
    position: absolute;
    inset: 0;
    background-color: #fffdf9;
    padding: 1.4rem 1.2rem;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: transform 0.6s ease;
    display: flex;
    flex-direction: column;
  }
  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--main-text);
    margin-bottom: 0.4rem;
  }

  .card__description {
    font-size: 1.05rem;
    line-height: 1.45;
    color: var(--secondary-text);
    flex-grow: 1;
    overflow-y: auto;
    padding-right: 4px;
  }

  .voir-plus {
    position: absolute;      
    bottom: 10px;
    right: 12px;

    padding: 6px 14px;
    font-size: 0.85rem;
    font-weight: bold;
    text-decoration: none;
    color: #d47878;
    background-color: #ffecec;
    border: 1px solid #f4a6a6;
    border-radius: 999px;
    transition: background-color 0.25s ease, color 0.25s ease;
  }
  .voir-plus:hover {
    background-color: #f4a6a6;
    color: #fffdf9;
  }

  .badge {
    position: absolute;
    bottom: 10px;
    left: 12px;
    background-color: #ffecec;
    color: var(--highlight);
    font-size: 0.78rem;
    padding: 4px 10px;
    border-radius: 999px;
    font-weight: 500;
    border: 1px solid #f4a6a6;
  }
`;
