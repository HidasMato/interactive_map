import React, { Dispatch, SetStateAction } from 'react';
import style from './History.module.scss';
import { ReactComponent as Book1 } from '../../images/Book1.svg'
import { ReactComponent as Book2 } from '../../images/Book2.svg'
type AlertProps = {
    title: string,
    text: string,
    setText: Dispatch<SetStateAction<string>>,
    setTitle: Dispatch<SetStateAction<string>>
};
const Main = ({ title, text, setText, setTitle }: AlertProps): JSX.Element => {
    return (
        <div className={style.Main} onClick={() => {
            setText(text);
            setTitle(title);
        }}>
            <div className={style.Title}>{title}</div>
            <Book1 className={style.Book} />
        </div>
    );
}
export default Main;

// {active ? <div className={style.Text}>{text}</div> : null}