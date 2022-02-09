import styled from 'styled-components';
import { Outlet, NavLink } from 'react-router-dom';
// import { GlobalStyle } from '../GlobalStyle';
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

// export const Layout = () => {
//   return <Wrapper>Wrapper</Wrapper>;
// };
export const Layout = () => {
  return (
    <Wrapper>
      {/* <GlobalStyle /> */}
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/Movies">Movies</Link>
      </Nav>
      <Outlet />
      {/* <Toaster /> */}
    </Wrapper>
  );
};
