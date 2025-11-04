import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  max-width: 1000px;
  margin: 40px auto;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.12);
  }

  img {
    width: 350px;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;

    @media (max-width: 768px) {
      width: 100%;
      border-radius: 16px 16px 0 0;
    }
  }
`;

export const Description = styled.div`
  flex: 1;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #1e293b;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.25rem;
    margin-top: 20px;
    color: #334155;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #475569;
    margin-top: 6px;
  }

  span {
    margin-right: 8px;
  }
`;

export const VoteAverage = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fbbf24;
  font-weight: 600;
  font-size: 1.1rem;
  margin: 10px 0 20px;

  svg {
    color: #fbbf24;
  }
`;

export const SecondTitle = styled.h2`
  color: #475569;
`;

export const Genres = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  color: #475569;
  margin-top: 8px;

  span {
    background: #e2e8f0;
    border-radius: 8px;
    padding: 4px 10px;
    font-size: 0.9rem;
  }
`;

// import styled from 'styled-components';
// export const Card = styled.div`
//   display: flex;
//   align-items: flex-start;
//   margin-right: 40px;
//   margin-bottom: 40px;
//   max-width: 1000px;
//   background-color: #c4c4c4;
// `;
// export const Description = styled.div`
//   padding: 40px;
// `;
// export const SecondTitle = styled.h2`
//   color: gray;
// `;
// export const Genres = styled.p`
//   padding-left: 4px;
// `;
// export const VoteAverage = styled.p`
//   display: flex;
//   padding-left: 4px;
// `;
