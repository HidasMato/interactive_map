import React, { useEffect, useState } from 'react';
import style from './FameBoard.module.scss';
type AlertProps = {
};
const Main = ({ }: AlertProps): JSX.Element => {
    return (
        <div className={style.Main}>
            FameBoard
        </div>
    );
}
export default Main;