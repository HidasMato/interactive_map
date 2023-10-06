import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Map from './components/Map/Map';
import Chronicle from './components/Chronicle/Chronicle';
import PageNotFound from './components/PageNotFound/PageNotFound';
import FameBoard from './components/FameBoard/FameBoard';
import Сountries from './components/Сountries/Сountries';
import SwitchWindowButton from './components/SwitchWindowButton/SwitchWindowButton';
import style from './App.module.scss';

const App = () => {
    return (
        <div className={style.Main}>
            <div className={style.Switcher}>
                <SwitchWindowButton text={'Страны'} href={'countries'} />
                <SwitchWindowButton text={'Карта мира'} href={'map'} />
                <SwitchWindowButton text={'Летопись'} href={'chronicle'} />
                <SwitchWindowButton text={'Доска почета'} href={'fameboard'} />
            </div>
            <div className={style.Window}>
                <Routes>
                    <Route path="/interactive_map/countries" Component={Сountries} />
                    <Route path="/interactive_map/map" Component={Map} />
                    <Route path="/interactive_map/chronicle" Component={Chronicle} />
                    <Route path="/interactive_map/fameboard" Component={FameBoard} />
                    <Route path='/*' Component={PageNotFound} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
