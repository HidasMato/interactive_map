import React, { useEffect, useState } from 'react';
import style from './Chronicle.module.scss';
import History from '../History/History'
type AlertProps = {
};
const Main = ({ }: AlertProps): JSX.Element => {
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    return (
        <div className={style.Main}>
            <div className={style.Library}>
                <History title={'Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок '} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.Obcaecati veniam minima odio officiis modi eaque accusantium distinctio, ab blanditiis sapiente quaerat recusandae, praesentium, quibusdam vero.Minima sapiente quod neque ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore ab veritatis earum dolorum inventore iure eum quae rerum eos magnam magni illum, autem possimus recusandae dolore architecto dignissimos illo.Voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit.Nisi error alias quae beatae, nobis, ratione velit deserunt illo atque expedita voluptatibus magnam eaque delectus aliquam necessitatibus animi dicta, modi ea ? Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsa omnis debitis, magnam asperiores deleniti sit, nesciunt repellat quas ducimus ipsum aperiam pariatur alias.Unde vel qui debitis iure quam ducimus. Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nisi earum facilis possimus officia mollitia in voluptatem similique iste laboriosam, corporis magni harum ad, impedit nam totam modi adipisci aut eius. Lorem ipsum dolor sit, amet consectetur adipisicing elit.Fuga nulla distinctio, rem animi quisquam sapiente, illo accusantium odio veniam, saepe sit! Eos beatae laboriosam voluptate! Minima delectus magni unde doloremque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quibusdam itaque aspernatur perferendis esse nobis officia, quod natus quas.At debitis atque minima, excepturi labore eos nam totam quisquam saepe rem ? Lorem, ipsum dolor sit amet consectetur adipisicing elit.Placeat enim dicta odit veniam, in obcaecati, nesciunt nihil totam corrupti itaque quod, voluptate at exercitationem cum.Eaque vitae omnis explicabo minima. Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt laudantium aperiam autem blanditiis vero perspiciatis numquam sunt! Doloremque vitae possimus quidem, eligendi soluta excepturi cumque odit, libero, in a hic. Lorem ipsum dolor, sit amet consectetur adipisicing elit.Explicabo impedit dolore libero, consequuntur velit commodi aspernatur doloribus.Sunt cumque vero ad, maiores, ullam aperiam rem optio nisi, pariatur fugit inventore. Lorem ipsum dolor sit amet consectetur, adipisicing elit.Officiis ipsum nemo officia enim deserunt expedita quo ipsa consequatur dignissimos porro qui sint repudiandae dolorum laborum reiciendis vitae molestiae, consequuntur explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus, aliquid unde ab neque cupiditate pariatur quaerat ? Qui, quisquam non.Quam inventore voluptates animi corrupti nam recusandae vel rem reprehenderit quos! Lorem ipsum dolor sit amet, consectetur adipisicing elit.Assumenda veniam distinctio, quibusdam vitae natus asperiores enim eius excepturi tempore hic quasi architecto laudantium totam laboriosam cum maiores accusantium! Expedita, vel. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, ipsum. Quam, voluptas? Deserunt placeat animi consequatur iusto totam, distinctio eligendi id ipsa aspernatur. Cumque sapiente, libero tempora architecto adipisci explicabo.\n\n\n\n\nLorem ipsum dolor sit amet consectetur adipisicing elit.Obcaecati veniam minima odio officiis modi eaque accusantium distinctio, ab blanditiis sapiente quaerat recusandae, praesentium, quibusdam vero.Minima sapiente quod neque ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore ab veritatis earum dolorum inventore iure eum quae rerum eos magnam magni illum, autem possimus recusandae dolore architecto dignissimos illo.Voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit.Nisi error alias quae beatae, nobis, ratione velit deserunt illo atque expedita voluptatibus magnam eaque delectus aliquam necessitatibus animi dicta, modi ea ? Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsa omnis debitis, magnam asperiores deleniti sit, nesciunt repellat quas ducimus ipsum aperiam pariatur alias.Unde vel qui debitis iure quam ducimus. Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nisi earum facilis possimus officia mollitia in voluptatem similique iste laboriosam, corporis magni harum ad, impedit nam totam modi adipisci aut eius. Lorem ipsum dolor sit, amet consectetur adipisicing elit.Fuga nulla distinctio, rem animi quisquam sapiente, illo accusantium odio veniam, saepe sit! Eos beatae laboriosam voluptate! Minima delectus magni unde doloremque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quibusdam itaque aspernatur perferendis esse nobis officia, quod natus quas.At debitis atque minima, excepturi labore eos nam totam quisquam saepe rem ? Lorem, ipsum dolor sit amet consectetur adipisicing elit.Placeat enim dicta odit veniam, in obcaecati, nesciunt nihil totam corrupti itaque quod, voluptate at exercitationem cum.Eaque vitae omnis explicabo minima. Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt laudantium aperiam autem blanditiis vero perspiciatis numquam sunt! Doloremque vitae possimus quidem, eligendi soluta excepturi cumque odit, libero, in a hic. Lorem ipsum dolor, sit amet consectetur adipisicing elit.Explicabo impedit dolore libero, consequuntur velit commodi aspernatur doloribus.Sunt cumque vero ad, maiores, ullam aperiam rem optio nisi, pariatur fugit inventore. Lorem ipsum dolor sit amet consectetur, adipisicing elit.Officiis ipsum nemo officia enim deserunt expedita quo ipsa consequatur dignissimos porro qui sint repudiandae dolorum laborum reiciendis vitae molestiae, consequuntur explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus, aliquid unde ab neque cupiditate pariatur quaerat ? Qui, quisquam non.Quam inventore voluptates animi corrupti nam recusandae vel rem reprehenderit quos! Lorem ipsum dolor sit amet, consectetur adipisicing elit.Assumenda veniam distinctio, quibusdam vitae natus asperiores enim eius excepturi tempore hic quasi architecto laudantium totam laboriosam cum maiores accusantium! Expedita, vel. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, ipsum. Quam, voluptas? Deserunt placeat animi consequatur iusto totam, distinctio eligendi id ipsa aspernatur. Cumque sapiente, libero tempora architecto adipisci explicabo.\n\n\nLorem ipsum dolor sit amet consectetur adipisicing elit.Obcaecati veniam minima odio officiis modi eaque accusantium distinctio, ab blanditiis sapiente quaerat recusandae, praesentium, quibusdam vero.Minima sapiente quod neque ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore ab veritatis earum dolorum inventore iure eum quae rerum eos magnam magni illum, autem possimus recusandae dolore architecto dignissimos illo.Voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit.Nisi error alias quae beatae, nobis, ratione velit deserunt illo atque expedita voluptatibus magnam eaque delectus aliquam necessitatibus animi dicta, modi ea ? Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsa omnis debitis, magnam asperiores deleniti sit, nesciunt repellat quas ducimus ipsum aperiam pariatur alias.Unde vel qui debitis iure quam ducimus. Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nisi earum facilis possimus officia mollitia in voluptatem similique iste laboriosam, corporis magni harum ad, impedit nam totam modi adipisci aut eius. Lorem ipsum dolor sit, amet consectetur adipisicing elit.Fuga nulla distinctio, rem animi quisquam sapiente, illo accusantium odio veniam, saepe sit! Eos beatae laboriosam voluptate! Minima delectus magni unde doloremque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quibusdam itaque aspernatur perferendis esse nobis officia, quod natus quas.At debitis atque minima, excepturi labore eos nam totam quisquam saepe rem ? Lorem, ipsum dolor sit amet consectetur adipisicing elit.Placeat enim dicta odit veniam, in obcaecati, nesciunt nihil totam corrupti itaque quod, voluptate at exercitationem cum.Eaque vitae omnis explicabo minima. Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt laudantium aperiam autem blanditiis vero perspiciatis numquam sunt! Doloremque vitae possimus quidem, eligendi soluta excepturi cumque odit, libero, in a hic. Lorem ipsum dolor, sit amet consectetur adipisicing elit.Explicabo impedit dolore libero, consequuntur velit commodi aspernatur doloribus.Sunt cumque vero ad, maiores, ullam aperiam rem optio nisi, pariatur fugit inventore. Lorem ipsum dolor sit amet consectetur, adipisicing elit.Officiis ipsum nemo officia enim deserunt expedita quo ipsa consequatur dignissimos porro qui sint repudiandae dolorum laborum reiciendis vitae molestiae, consequuntur explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus, aliquid unde ab neque cupiditate pariatur quaerat ? Qui, quisquam non.Quam inventore voluptates animi corrupti nam recusandae vel rem reprehenderit quos! Lorem ipsum dolor sit amet, consectetur adipisicing elit.Assumenda veniam distinctio, quibusdam vitae natus asperiores enim eius excepturi tempore hic quasi architecto laudantium totam laboriosam cum maiores accusantium! Expedita, vel. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, ipsum. Quam, voluptas? Deserunt placeat animi consequatur iusto totam, distinctio eligendi id ipsa aspernatur. Cumque sapiente, libero tempora architecto adipisci explicabo.'} setText={setText} setTitle={setTitle} />
                <History title={'Заголовок2'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odio perferendis ducimus sint unde laborum eligendi nam esse porro magni pariatur est alias consequuntur harum nulla, incidunt eveniet repellat dolore.'} setText={setText} setTitle={setTitle} />
                <History title={'Заголовок3'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.Obcaecati veniam minima odio officiis modi eaque accusantium distinctio, ab blanditiis sapiente quaerat recusandae, praesentium, quibusdam vero.Minima sapiente quod neque ad.'} setText={setText} setTitle={setTitle} />
                <History title={'Заголовок4'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore ab veritatis earum dolorum inventore iure eum quae rerum eos magnam magni illum, autem possimus recusandae dolore architecto dignissimos illo.Voluptatem.'} setText={setText} setTitle={setTitle} />
                <History title={'Заголовок5'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.Nisi error alias quae beatae, nobis, ratione velit deserunt illo atque expedita voluptatibus magnam eaque delectus aliquam necessitatibus animi dicta, modi ea ? Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsa omnis debitis, magnam asperiores deleniti sit, nesciunt repellat quas ducimus ipsum aperiam pariatur alias.Unde vel qui debitis iure quam ducimus.'} setText={setText} setTitle={setTitle} />
                <History title={'Заголовок6'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nisi earum facilis possimus officia mollitia in voluptatem similique iste laboriosam, corporis magni harum ad, impedit nam totam modi adipisci aut eius.'} setText={setText} setTitle={setTitle} />
                <History title={'Заголовок7'} text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Fuga nulla distinctio, rem animi quisquam sapiente, illo accusantium odio veniam, saepe sit! Eos beatae laboriosam voluptate! Minima delectus magni unde doloremque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quibusdam itaque aspernatur perferendis esse nobis officia, quod natus quas.At debitis atque minima, excepturi labore eos nam totam quisquam saepe rem ? Lorem, ipsum dolor sit amet consectetur adipisicing elit.Placeat enim dicta odit veniam, in obcaecati, nesciunt nihil totam corrupti itaque quod, voluptate at exercitationem cum.Eaque vitae omnis explicabo minima.Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt laudantium aperiam autem blanditiis vero perspiciatis numquam sunt! Doloremque vitae possimus quidem, eligendi soluta excepturi cumque odit, libero, in a hic.'} setText={setText} setTitle={setTitle} />
                <History title={'Заголовок8'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Explicabo impedit dolore libero, consequuntur velit commodi aspernatur doloribus.Sunt cumque vero ad, maiores, ullam aperiam rem optio nisi, pariatur fugit inventore.'} setText={setText} setTitle={setTitle} />
                <History title={'Заголовок9'} text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Officiis ipsum nemo officia enim deserunt expedita quo ipsa consequatur dignissimos porro qui sint repudiandae dolorum laborum reiciendis vitae molestiae, consequuntur explicabo.'} setText={setText} setTitle={setTitle} />
                <History title={'Заголовок10'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus, aliquid unde ab neque cupiditate pariatur quaerat ? Qui, quisquam non.Quam inventore voluptates animi corrupti nam recusandae vel rem reprehenderit quos!'} setText={setText} setTitle={setTitle} />
                <History title={'Заголовок11'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Assumenda veniam distinctio, quibusdam vitae natus asperiores enim eius excepturi tempore hic quasi architecto laudantium totam laboriosam cum maiores accusantium! Expedita, vel.'} setText={setText} setTitle={setTitle} />
                <History title={'Заголовок12'} text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, ipsum. Quam, voluptas? Deserunt placeat animi consequatur iusto totam, distinctio eligendi id ipsa aspernatur. Cumque sapiente, libero tempora architecto adipisci explicabo.'} setText={setText} setTitle={setTitle} />
            </div>
            {
                title != '' && text != ''
                    ?
                    <div className={style.ThisMyText}>
                        <div className={style.Title}>{title}</div>
                        <div className={style.Text}>{text}</div>
                    </div>
                    : null
            }
        </div>
    );
}
export default Main;