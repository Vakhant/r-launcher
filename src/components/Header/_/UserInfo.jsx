import React, { useState } from 'react'
import css from './css/UserInfo.module.css'

const UserInfo = ({nickname, avatarSrc}) => {
  const [active, setActive] = useState(false)

  return (
    <button className={css.profile_wrap} onBlur={()=>setActive(false)}>
        <div onClick={()=>setActive(!active)} className={css.username_txt}>{nickname}</div>

        <div className={css.profile_menu + ` ${active?css.profile_popup_active:''}`}>
          <div onClick={()=>setActive(!active)} href="#" className={`${css.username_imgs_wrap} ${avatarSrc?css.avatar_chosen:''}`}>
              {avatarSrc?<img className={`${css.username_img} ${css.username_img_avatar}`} width="42" height="42" src={avatarSrc} alt=""/>:''}
          </div>
          <div className={css.profile_popup}>
              <div className={css.profile_popup_main_info}>
                <div href="#" className={`${css.username_imgs_wrap} ${avatarSrc?css.avatar_chosen:''}`}>
                    {avatarSrc?<img className={`${css.username_img} ${css.username_img_avatar}`} width="42" height="42" src={avatarSrc} alt=""/>:''}
                </div>
                <div className={css.profile_popup_nickname}>{nickname}</div>
                <div className={css.profile_popup_mail}>airxstreets@ya.ru</div>
              </div>
              <div className={css.profile_nav_list}>
                <div className={css.profile_nav_list_block}>Проверить файлы</div>
                <div className={css.profile_nav_list_block}>Изменить почту</div>
                <div className={css.profile_nav_list_block}>Подтвердить почту</div>
                <div className={css.profile_nav_list_block}>Изменить пароль</div>
                <div className={css.profile_nav_list_block}>Выйти из аккаунта</div>
              </div>
          </div>
      </div>
    </button>
  )
}

export default UserInfo