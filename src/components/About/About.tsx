import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import style from './About.module.scss';
type AlertProps = {
    text: string,
    title: string
};
const Main = ({ text, title }: AlertProps): JSX.Element => {
    return (
        <div className={style.About}>
            <div className={style.Title}>{title}</div>
            <div className={style.Text}>{text}</div>
        </div>
    );
}
export default Main;