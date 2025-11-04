import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CastItem = styled.li`
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  width: 160px;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  }

  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    background-color: #e2e8f0;
  }

  p {
    padding: 10px;
    font-size: 0.95rem;
    font-weight: 600;
    color: #334155;
  }
`;

// import styled from 'styled-components';
// export const CastList = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   padding: 10px;
//   max-width: 1200px;
// `;
// export const CastItem = styled.li`
//   background-color: gray;
//   margin: 30px;
//   padding: 10px;
// `;
// export const BackgroundImg = styled.img`
//   max-width: 200px;
//   background-image: url('../../images/inconito.jpg');
// `;
