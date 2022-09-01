import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";


function Header() {

    const [burgerActive, setBurgerActive] = useState<Boolean>(false)
    const [changeBar, setСhangeBar] = useState<Boolean>(false)

    const onClickHandler = () => {
        setBurgerActive(!burgerActive)
        setСhangeBar(!changeBar)
    }

    return (
        <div>
            <div id={s.containBurger}  className={changeBar ? s.change : ''} onClick={onClickHandler}>
                <div className={s.bar1}></div>
                <div className={s.bar2}></div>
                <div className={s.bar3}></div>
            </div>
            <ul id={s.nav} className={burgerActive ? s.open : ''}>
                <li><NavLink to={'/'}>pre-junior</NavLink></li>
                <li><NavLink to={'/junior'}>junior</NavLink></li>
                <li><NavLink to={'/junior_plus'}>junior+</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
