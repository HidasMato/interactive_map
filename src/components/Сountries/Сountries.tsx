import React, { useEffect, useState } from 'react';
import style from './Сountries.module.scss';
import Map from '../../images/map.png'
import Country from '../Country/Country';
import About from '../About/About';
type AlertProps = {
};
const Main = ({ }: AlertProps): JSX.Element => {
    const [text, setText] = useState('Выберите метку на карте для отображения информации')
    const [title, setTitle] = useState('')
    const [mode, setMode] = useState(5);
    useEffect(() => {
        document.getElementById('Countries')?.style.setProperty("--mode", String(mode));
    },[mode])
    return (
        <div className={style.Main} id='Countries'>
            <div className={style.Table}>
                <div className={style.Img}>
                <img src={Map} alt="" style={{ width: `${7680 / mode}px` }} />
                    <Country
                        title={"Маас Атер"}
                        text={"Маас Атер. Одна из шести стран-вассалов Кирандийской империи. Близь этого острова обитает большое количество дракочерепах. Из разумных гуманоидов здесь живут драконорожденные, людоящеры, юаньти, торглы и прочие твари с чешуей. Также здесь обитает большое количество драконов и находится много порталов в царство драконов. Правят этой землей, как ни странно драконорожденные. Они делятся на пять великих кланов, каждый принадлежит своему цвету. Половина континента отводится цветным драконорожденным, которые служат злу и хотят подогнать власть под себя однако они находятся в стадии холодной войны уже долгое время. Драконий принц так и не смог примерить их окончательно, старые предрассудки все еще держатся. Известен тем, что был родиной великого императора, создавшего Кирандийскую имерию."}
                        x={600} y={800} width={1000} height={200}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Country
                        title={"Теократия Авгур"}
                        text={"Страна"}
                        x={1400} y={2300} width={800} height={500}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Country
                        title={"Гринвуд"}
                        text={"Одна из шести стран-вассалов Кирандийской империи."}
                        x={3000} y={1800} width={800} height={400}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Country
                        title={"Кирандия"}
                        text={"Страна-сюзерен (столица) Кирандийской империи."}
                        x={4300} y={1400} width={800} height={400}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Country
                        title={"Хассамир"}
                        text={"Одна из шести стран-вассалов Кирандийской империи."}
                        x={3800} y={2600} width={800} height={400}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Country
                        title={"Калденор"}
                        text={"Страна"}
                        x={4700} y={2800} width={800} height={400}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Country
                        title={"Грантурдир"}
                        text={"Одна из шести стран-вассалов Кирандийской империи."}
                        x={5400} y={1800} width={800} height={400}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Country
                        title={"Мечеград"}
                        text={"Одна из шести стран-вассалов Кирандийской империи."}
                        x={6400} y={1800} width={800} height={400}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Country
                        title={"Старград"}
                        text={"Одна из шести стран-вассалов Кирандийской империи."}
                        x={5800} y={900} width={800} height={400}
                        mode={mode} setText={setText} setTitle={setTitle}/>
                    <Country
                        title={"Земли зеленокожих"}
                        text={"Страна"}
                        x={6200} y={2500} width={1000} height={600}
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