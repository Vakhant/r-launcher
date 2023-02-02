import React from 'react'
import Button from '../../../components/_common/Button'
import css from './FirstRunPage.module.css'

const FirstRunPage = () => {
  return (
    <>
        <div className={css.first_run_content}>
            <div className={css.first_run_txt}><div>Благодарим за установку и добро пожаловать в «<span className={css.first_run_txt_blod}>Rapid Motion Launcher</span>»!<br/>
            В разделах «<span className={css.first_run_txt_blod}>Главная</span>» & «<span className={css.first_run_txt_blod}>Мониторинг</span>» вы можете выбрать для себя понравившийся<br/>
            сервер и начать на нем игру. Желаем приятной игры!</div></div>
            <div className={css.first_run_txt}>
                <div>Рекомендованный сервер для игры — <span className={css.first_run_server_name}>Rapid Motion / Fallen Mercury #2</span><br/>
                В настоящее время проходит акция<br/>
                «<span className={css.first_run_main_comment}>X2 на первое пополнение игрового счета (RC) / Осталось 2 дня</span>»</div>
                <div className={css.first_run_server_block}>
                    <div className={css.first_run_server_icon_wrap}><img src={'/imgs/icons/settings_page/server_FM.svg'} alt="" /></div>
                    <div className={css.first_run_server_main_info}>
                        <div className={css.first_run_server_block_name}>Fallen Mercury / 2</div>
                        <div className={css.first_run_server_users_count}>Игроков онлайн 300 / 300</div>
                    </div>
                    <img className={css.first_run_server_star} src={'/imgs/icons/main_page/star.svg'} alt="" />
                    <div className={css.first_run_special}>x 2</div>
                </div>
            </div>
            <Button style={{'width':'378px', 'marginTop':'30px'}} buttonStyle={'gradBtn'} link={'#'} content={<><span> Принять информацию и перейти к лаунчеру</span></>}/>
        </div>
    </>
  )
}

export default FirstRunPage