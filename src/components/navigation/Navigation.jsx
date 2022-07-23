import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assests/crown.svg';

import './Navigation.scss';
export default function Navigation() {
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                    <Link className="nav-link" to="/sign-in">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}
