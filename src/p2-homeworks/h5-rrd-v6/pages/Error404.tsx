import React from 'react'
import s from './Error404.module.css'
import {NavLink} from "react-router-dom";

function Error404() {
    return (
        <div>
            <div className={s.wrapper404}>
                <div className={s.numberError}>404</div>
                <div className={s.title}>-- Page Not Found --</div>
                <div className={s.keywords}>Извините, страница, которую вы искали, не найдена.</div>
                <NavLink className={s.button} to={'/'}>Перейти на главную</NavLink>
            </div>

        </div>
    )
}

export default Error404
