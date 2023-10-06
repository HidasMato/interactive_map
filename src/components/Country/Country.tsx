import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import style from './Country.module.scss';
type AlertProps = {
    width: number,
    height: number,
    x: number,
    y: number,
    myText: string,
    setText: Dispatch<SetStateAction<string>>,
    text: string
};
const Main = ({ x, y, width,height, myText, text, setText }: AlertProps): JSX.Element => {
    return (
        <div className={style.Main} style={{width: width, height: height, top: y, left: x }} onClick={() => {
            setText(text);
        }}>{myText}</div>
    );
}
export default Main;