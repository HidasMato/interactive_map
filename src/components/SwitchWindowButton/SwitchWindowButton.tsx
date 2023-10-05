import React, { useEffect, useState } from 'react';
import style from './SwitchWindowButton.module.scss';
type AlertProps = {
    text: string,
    href: string
};
const Main = ({ text, href }: AlertProps): JSX.Element => {
    return (
        <div className={style.Main}>
            <div className={style.All + ' ' + ( (window.location.pathname == '/'+ href) ? style.Active : style.DisActive)} onClick={() => {
                window.location.replace(window.location.origin + '/' + href)
            }
            }>
                <div>{text}</div>
            </div>
        </div>
    );
}
export default Main;