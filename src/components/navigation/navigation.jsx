import {Outlet, Link} from 'react-router-dom';
import {Fragment} from 'react';
import {ReactComponent as ShopLogo} from '../../assets/logo.svg';
import './navigation.scss';

const NavBar = () => {
    return (
        <Fragment>
            <div className='navBar'>
                <Link className='navBar_logo' to='/'>
                    <ShopLogo className='navBar_logo_img' />
                </Link>
                <div className='navBar_links'>
                <Link className='navBar_links_link' to='/shop'>SHOP</Link>
                <Link className='navBar_links_link' to='/login'>SIGN IN</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
  }
  export default NavBar;