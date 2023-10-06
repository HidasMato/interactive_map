import React, { useEffect, useState } from 'react';
import style from './Сountries.module.scss';
import Map from '../../images/map.png'
import Country from '../Country/Country';
type AlertProps = {
};
const Main = ({ }: AlertProps): JSX.Element => {
    const [myText, setMyText] = useState('Тут информация о чем-то')
    return (
        <div className={style.Main}>
            <div className={style.Table}>
                <div className={style.Img}>
                    <img src={Map} alt="" />
                    <Country
                        myText={"Маас Атер"}
                        text={"Маас Атер. Страна"} setText={setMyText}
                        x={600} y={800} width={1000} height={200} />
                    <Country
                        myText={"Теократия Авгур"}
                        text={"Теократия Авгур. Страна"} setText={setMyText}
                        x={1400} y={2300} width={800} height={500} />
                    <Country
                        myText={"Гринвуд"}
                        text={"Гринвуд. Страна"} setText={setMyText}
                        x={3000} y={1800} width={800} height={400} />
                    <Country
                        myText={"Кирандия"}
                        text={"Кирандия. Страна"} setText={setMyText}
                        x={4300} y={1400} width={800} height={400} />
                    <Country
                        myText={"Хассамир"}
                        text={"Хассамир. Страна"} setText={setMyText}
                        x={3800} y={2600} width={800} height={400} />
                    <Country
                        myText={"Калденор"}
                        text={"Калденор. Страна"} setText={setMyText}
                        x={4700} y={2800} width={800} height={400} />
                    <Country
                        myText={"Грантурдир"}
                        text={"Грантурдир. Страна"} setText={setMyText}
                        x={5400} y={1800} width={800} height={400} />
                    <Country
                        myText={"Старград"}
                        text={"Старград. Страна"} setText={setMyText}
                        x={5800} y={900} width={800} height={400} />
                    <Country
                        myText={"Земли зеленокожих"}
                        text={"Земли зеленокожих. Страна"} setText={setMyText}
                        x={6200} y={2500} width={1000} height={600} />
                </div>
            </div>
            <div className={style.About}>
                {myText}
            </div>
        </div>
    );
}
export default Main;