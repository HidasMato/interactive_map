import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import style from './Country.module.scss';
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
const Main = ({ x, y, width,height, title, text, setText, setTitle, mode }: AlertProps): JSX.Element => {
    return (
        <div className={style.Main} style={{width: (width / mode), height: (height/mode), top: (y/mode), left: (x/mode) }} onClick={() => {
            setText(text);
            setTitle(title);
        }}>{title}</div>
    );
}
export default Main;