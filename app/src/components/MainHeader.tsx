/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header css={styles.heaader}>
      <nav>
        <ul>
          <li>
            <NavLink to="/welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  heaader: css`
    width: 100%;
    height: 5rem;
    background-color: #044599;
    padding: 0 10%;

    nav {
      height: 100%;
    }

    ul {
      height: 100%;
      list-style: none;
      display: flex;
      padding: 0;
      margin: 0;
      align-items: center;
      justify-content: center;
    }

    li {
      margin: 0 1rem;
      width: 5rem;
    }

    a {
      color: white;
      text-decoration: none;
    }

    a:hover,
    a:active,
    a.active {
      color: #95bcf0;
      padding-bottom: 0.25rem;
      border-bottom: 4px solid #95bcf0;
    }
  `,
};

export default MainHeader;
