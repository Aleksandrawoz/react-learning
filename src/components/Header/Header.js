import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './Header.scss';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import Search from '../Search/Search';

class Header extends React.Component {
  render(){
    const{icon}= settings.headerIcon;
    return (
      <header className={styles.component}>
        <Container>
          <Search />
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={icon} />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}
  
export default Header;

