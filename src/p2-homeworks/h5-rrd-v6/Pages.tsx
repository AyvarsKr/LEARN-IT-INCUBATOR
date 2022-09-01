import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import PreJunior from "../h5-rrd-v6/pages/PreJunior";
import JuniorPlus from "./pages/JuniorPlus";
import Junior from "./pages/Junior";
import Error404 from "./pages/Error404";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_plus: '/junior_plus'
}

function Pages() {
    return (
        <div>
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_plus} element={<JuniorPlus/>}/>
                // add routes
                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
