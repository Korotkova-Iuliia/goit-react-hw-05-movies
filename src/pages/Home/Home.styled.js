import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TrendTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  color: #1e293b;
  margin: 40px 0 30px;
  letter-spacing: 0.5px;
`;

export const TrendList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  list-style: none;
  padding: 0 20px;
  margin-bottom: 40px;
`;

export const TrendItem = styled.li`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #111;
  font-weight: 600;
  font-size: 1rem;
  padding-bottom: 15px;
  transition: color 0.2s ease;

  &:hover {
    color: #1d4ed8;
  }

  p {
    margin-top: 10px;
    text-align: center;
    padding: 0 10px;
  }
`;

export const Loader = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #334155;
`;

export const ErrorMsg = styled.p`
  text-align: center;
  color: #dc2626;
  font-size: 1rem;
  margin-bottom: 20px;
`;
export const MoviePoster = styled.img`
  width: 320px;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

// Ссыл

// import styled from 'styled-components';
// export const TrendList = styled.ul`
//   margin: 0 0 40px 0;
//   padding: 5px;
//   color: black;
// `;

// export const TrendTitle = styled.h1`
//   color: tomato;
// `;
