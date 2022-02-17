import styled from 'styled-components';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { Toaster } from 'react-hot-toast';
const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;
const Link = styled(NavLink)`
  color: gray;
  &.active {
    color: tomato;
  }
`;
const Wrapper = styled.div`
  padding: 40px;
`;
const Title = styled.h2`
  font-size: 20px;
`;
export const Layout = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Nav>
          <Link to="/" state={{ from: location }}>
            <Title>Home</Title>
          </Link>
          <Link to="/movies" state={{ from: location }}>
            <Title>Movies</Title>
          </Link>
          <Toaster />
        </Nav>
        <Outlet />
      </Wrapper>
    </>
  );
};
export const LayoutFeatureMovie = () => {
  return (
    <>
      <Nav>
        <Link to="cast">
          <Title>Cast</Title>
        </Link>
        <Link to="reviews">
          <Title>Reviews</Title>
        </Link>
      </Nav>
      <Outlet />
    </>
  );
};
