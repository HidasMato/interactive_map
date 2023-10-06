import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import style from './Point.module.scss';
type AlertProps = {
    width: number,
    height: number,
    x: number,
    y: number,
    title: string,
    setText: Dispatch<SetStateAction<string>>,
    setTitle: Dispatch<SetStateAction<string>>,
    text: string,
    mode: number
};
const Main = ({ x, y, width,height, text, setText, title, setTitle, mode }: AlertProps): JSX.Element => {
    return (
        <div className={style.Main} style={{width: (width / mode), height: (height/mode), top: (y/mode), left: (x/mode) }} onClick={() => {
            setText(text);
            setTitle(title);
        }}/>
    );
}
export default Main;