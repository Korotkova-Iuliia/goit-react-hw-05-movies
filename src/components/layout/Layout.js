import styled from 'styled-components';
import { Outlet, NavLink } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
// import { Toaster } from 'react-hot-toast';
const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Link = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;

const Wrapper = styled.div`
  padding: 12px;
`;

export const Layout = () => {
  return (
    <Wrapper>
      {/* <GlobalStyle /> */}
      <Nav>
        <Link to="/home">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
      <Outlet />
      {/* <Toaster /> */}
    </Wrapper>
  );
};
export const LayoutFeatureMovie = () => {
  return (
    <Wrapper>
      <Nav>
        <Link to="cast">
          <h2>Cast</h2>
        </Link>
        <Link to="reviews">
          <h2>Reviews</h2>
        </Link>
      </Nav>
      <Outlet />
      {/* <Toaster /> */}
    </Wrapper>
  );
};
//  <Link to={`cast`}>

//             <Cast />
//           </Link>
//           <NavLink to={`reviews`}>

//           </NavLink>
