import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Map from './components/Map/Map';
import Chronicle from './components/Chronicle/Chronicle';
import PageNotFound from './components/PageNotFound/PageNotFound';
import FameBoard from './components/FameBoard/FameBoard';
import SwitchWindowButton from './components/SwitchWindowButton/SwitchWindowButton';
import style from './App.module.scss';

const App = () => {
    return (
        <div className={style.Main}>
            <div className={style.Switcher}>
                <SwitchWindowButton text={'Карта мира'} href={'map'} />
                <SwitchWindowButton text={'Летопись'} href={'chronicle'}/>
                <SwitchWindowButton text={'Доска почета'} href={'fameboard'}/>
            </div>
            <Routes>
                <Route path="/map" Component={Map} />
                <Route path="/chronicle" Component={Chronicle} />
                <Route path="/fameboard" Component={FameBoard} />
                <Route path='/*' Component={PageNotFound} />
            </Routes>
        </div>
    );
}

export default App;
