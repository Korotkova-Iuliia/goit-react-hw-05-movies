import styled from 'styled-components';

export const SearchList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  padding: 40px;
  list-style: none;
`;

export const SearchItem = styled.li`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  }

  a {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-decoration: none;
    color: #333;
  }

  a:hover {
    color: #ff6b01;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  transition: transform 0.3s ease;

  ${SearchItem}:hover & {
    transform: scale(1.03);
  }
`;

export const MovieTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 12px;
  text-align: center;
  color: #222;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
