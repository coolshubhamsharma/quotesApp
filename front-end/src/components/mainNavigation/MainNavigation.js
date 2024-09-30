import React from 'react'
import { Link } from 'react-router-dom';
import styles from './mainNavigation.module.css'

const MainNavigation = () => {
  return (
    <nav className={styles.nav}>
        <Link to={'/'}><h2>Quotes App</h2></Link>
        <ul>
            <li><Link to="/">All Quotes</Link></li>
            <li><Link to="/new">New Quotes</Link></li>

        </ul>

    </nav>
  )
}

export default MainNavigation