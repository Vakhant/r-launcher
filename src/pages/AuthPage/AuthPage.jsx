import Logo from '../../components/_common/Logo'
import AccountRegistration from './Forms/AccountRegistration'
import css from './AuthPage.module.css'
import { useParams } from 'react-router';
import RegistrationConfirm from './Forms/RegistrationConfirm';
import Auth from './Forms/Auth';
import RegainAccess from './Forms/RegainAccess';
import RegainAccess2 from './Forms/RegainAccess2';
import PassChange from './Forms/PassChange';
import EmailChange from './Forms/EmailChange';
import EmailChange2 from './Forms/EmailChange2';


const AuthPage = () => {
  let { auth_page } = useParams();
  return (
    <div className={css.auth_page}>
      <aside className={css.auth_page_aside}>
        <Logo page="auth"/>
        {auth_page === 'acc_reg' && <>
        <div className={css.comment}>
          <div className={css.comment_h}>
            Единый аккаунт для всех
            ресурсов проекта
          </div>
          <div className={css.comment_txt}>
            Зарегистрировав данную учетную
            запись,вы получите доступ на всех
            других официальных ресурсах проекта
            — сайт, форум и игровые сервера
          </div>
        </div>
        <div className={css.auth_page_footer}>
          <a href="#">rapid-motion.ru</a>
          <a href="#">vk.com/rapidm</a>
        </div></>}

      </aside>
      
      <div className={css.auth_page_content}>
        <header className={css.auth_page_header}>
          <div className={css.auth_page_header_left}>
            <div className={css.auth_launcher_name}>Rapid Motion Launcher</div>
            <h1 className={css.auth_page_h}>
              {auth_page === 'acc_reg' && 'Регистрация нового аккаунта'}
              {auth_page === 'reg_confirm' && 'Подтверждение регистрации'}
              {auth_page === 'auth' && 'Авторизация в систему'}
              {auth_page === 'regain_access' && 'Восстановление доступа / Шаг 1'}
              {auth_page === 'regain_access2' && 'Восстановление доступа / Шаг 2'}
              {auth_page === 'pass_change' && 'Изменение пароля аккаунта'}
              {auth_page === 'email_change' && 'Изменение почты аккаунта / Шаг 1'}
              {auth_page === 'email_change2' && 'Изменение почты аккаунта / Шаг 2'}
            </h1>
          </div>
          <div className={css.headphones_btn}><img src={process.env.PUBLIC_URL+'/imgs/icons/auth_page/mini-frame.svg'} alt="" /><div className={css.headphones_btn_wrap}><img src={process.env.PUBLIC_URL+'/imgs/icons/aside/support.svg'} alt="" /></div></div>
        </header>
        {auth_page === 'acc_reg' && <AccountRegistration/>}
        {auth_page === 'reg_confirm' && <RegistrationConfirm/>}
        {auth_page === 'auth' && <Auth/>}
        {auth_page === 'regain_access' && <RegainAccess/>}
        {auth_page === 'regain_access2' && <RegainAccess2/>}
        {auth_page === 'pass_change' && <PassChange/>}
        {auth_page === 'email_change' && <EmailChange/>}
        {auth_page === 'email_change2' && <EmailChange2/>}
      </div>
    </div>
  )
}

export default AuthPage