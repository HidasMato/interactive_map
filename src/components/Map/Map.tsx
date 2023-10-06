import React, { useEffect, useState } from 'react';
import style from './Map.module.scss';
import Map from '../../images/map.png'
import Point from '../Point/Point';
import About from '../About/About';
type AlertProps = {
};
const Main = ({ }: AlertProps): JSX.Element => {
    const [text, setText] = useState('Выберите метку на карте для отображения информации')
    const [title, setTitle] = useState('')
    const [mode, setMode] = useState(5);
    useEffect(() => {
        document.getElementById('Map')?.style.setProperty("--mode", String(mode));
    },[mode])
    return (
        <div className={style.Main} id='Map'>
            <div className={style.Table}>
                <div className={style.Img}>
                    <img src={Map} alt="" style={{ width: `${7680 / mode}px` }} />
                    <Point
                        title={"Мечеград"}
                        text={"Это город на краю мира "}
                        x={6575} y={2020} width={150} height={150}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Point
                        title={"Грандуртир"}
                        text={"Это город на краю мира "}
                        x={5685} y={2080} width={170} height={170}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Point
                        title={"Дримвиль"}
                        text={"Это город на краю мира "}
                        x={5130} y={2150} width={130} height={130}
                        mode={mode} setText={setText} setTitle={setTitle} />
                    <Point
                        title={"Чипсайд"}
                        text={"Это город на краю мира "}
                        x={5010} y={1990} width={110} height={110}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Point
                        title={"Бейнэрис"}
                        text={"Это город на краю мира "}
                        x={4820} y={2160} width={110} height={110}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Point
                        title={"Башня зла"}
                        text={"Это город на краю мира "}
                        x={4780} y={1800} width={130} height={130}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Point
                        title={"Драгонбайт"}
                        text={"Это город на краю мира "}
                        x={5140} y={1800} width={130} height={130}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Point
                        title={"Клаудфелс"}
                        text={"Это город на краю мира "}
                        x={4970} y={1655} width={130} height={130}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Point
                        title={"Нерезмуун"}
                        text={"Это город на краю мира "}
                        x={5070} y={1378} width={150} height={150}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Point
                        title={"Джулгей"}
                        text={"Это город на краю мира "}
                        x={5302} y={1520} width={110} height={110}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Point
                        title={"Кирандия"}
                        text={"Это город на краю мира "}
                        x={4450} y={1600} width={150} height={150}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Point
                        title={"Дракономор"}
                        text={"Это город на краю мира "}
                        x={4165} y={2040} width={150} height={150}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Point
                        title={"Врата эфиоша"}
                        text={"Это город на краю мира "}
                        x={4030} y={1870} width={170} height={170}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Point
                        title={"Остин"}
                        text={"Это город на краю мира "}
                        x={4600} y={2210} width={110} height={110}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Point
                        title={"Старград"}
                        text={"Это город на краю мира "}
                        x={6690} y={720} width={180} height={180}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                </div>
            </div>
            <div className={style.About}>
                <About text={text} title={title} />
                <button className={style.SizeMode} onClick={() => {
                    if (mode < 6) setMode(mode + 1);
                }}>Отдалить</button>
                <button className={style.SizeMode + ' ' + style.SizeMode2} onClick={() => {
                    if (mode > 1) setMode(mode - 1);
                }}>Приблизить</button>
            </div>
        </div>
    );
}
export default Main;