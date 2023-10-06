import React, { useEffect, useState } from 'react';
import style from './Map.module.scss';
import Map from '../../images/map.png'
import Point from '../Point/Point';
type AlertProps = {
};
const Main = ({ }: AlertProps): JSX.Element => {
    const [myText, setMyText] = useState('Тут информация о чем-то')
    return (
        <div className={style.Main}>
            <div className={style.Table}>
                <div className={style.Img}>
                    <img src={Map} alt="" />
                    <Point
                        text={"Мечеград. Это город на краю мира "} setText={setMyText}
                        x={6575} y={2020} width={150} height={150} />
                    <Point
                        text={"Грандуртир. Это город на краю мира "} setText={setMyText}
                        x={5685} y={2080} width={170} height={170} />
                    <Point
                        text={"Дримвиль. Это город на краю мира "} setText={setMyText}
                        x={5130} y={2150} width={130} height={130} />
                    <Point
                        text={"Чипсайд. Это город на краю мира "} setText={setMyText}
                        x={5010} y={1990} width={110} height={110} />
                    <Point
                        text={"Бейнэрис. Это город на краю мира "} setText={setMyText}
                        x={4820} y={2160} width={110} height={110} />
                    <Point
                        text={"Башня зла. Это город на краю мира "} setText={setMyText}
                        x={4780} y={1800} width={130} height={130} />
                    <Point
                        text={"Драгонбайт. Это город на краю мира "} setText={setMyText}
                        x={5140} y={1800} width={130} height={130} />
                    <Point
                        text={"Клаудфелс. Это город на краю мира "} setText={setMyText}
                        x={4970} y={1655} width={130} height={130} />
                    <Point
                        text={"Нерезмуун. Это город на краю мира "} setText={setMyText}
                        x={5070} y={1378} width={150} height={150} />
                    <Point
                        text={"Джулгей. Это город на краю мира "} setText={setMyText}
                        x={5302} y={1520} width={110} height={110} />
                    <Point
                        text={"Кирандия. Это город на краю мира "} setText={setMyText}
                        x={4450} y={1600} width={150} height={150} />
                    <Point
                        text={"Дракономор. Это город на краю мира "} setText={setMyText}
                        x={4165} y={2040} width={150} height={150} />
                    <Point
                        text={"Врата эфиоша. Это город на краю мира "} setText={setMyText}
                        x={4030} y={1870} width={170} height={170} />
                    <Point
                        text={"Остин. Это город на краю мира "} setText={setMyText}
                        x={4600} y={2210} width={110} height={110} />
                    <Point
                        text={"Старград. Это город на краю мира "} setText={setMyText}
                        x={6690} y={720} width={180} height={180} />
                </div>
            </div>
            <div className={style.About}>
                {myText}
            </div>
        </div>
    );
}
export default Main;