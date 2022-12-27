/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header css={styles.header}>
      <div css={styles.logo}>Great Quotes</div>
      <nav css={styles.nav}>
        <ul>
          <li>
            <NavLink to="/quotes">All Quotes</NavLink>
          </li>
          <li>
            <NavLink to="/new-quote">Add a Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: css`
    width: 100%;
    height: 5rem;
    display: flex;
    padding: 0 10%;
    justify-content: space-between;
    align-items: center;
    background-color: #008080;
  `,
  logo: css`
    font-size: 2rem;
    color: white;
  `,
  nav: css`
    ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
    }

    li {
      margin-left: 1.5rem;
      font-size: 1.25rem;
    }

    a {
      text-decoration: none;
      color: #88dfdf;
    }

    a:hover,
    a:active,
    a.active {
      color: #e6fcfc;
    }
  `,
};

export default MainNavigation;
