import React from "react";

import "./Header.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/game.svg";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, hidden }) => {
    return (
        <header className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className="option" to="/sign-in">
                        SIGN IN
                    </Link>
                )}
                <CartIcon />
            </div>
            {hidden && <CartDropdown />}
        </header>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
