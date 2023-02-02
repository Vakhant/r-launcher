import { Field, Form, Formik } from 'formik'
import Button from '../../../components/_common/Button';
import css from './Forms.module.css'
import InputBlock from './FormsParts/InputBlock';

const Auth = () => {

  function validateUsername(value) {
    let error;
    if (value === 'admin') {
      error = 'Nice try!';
    }
    if (value === 'Attention') {
      error = 'Attention';
    }
    return error;
  }
  return (

    <>
    <Formik
        initialValues={{ login: "", pass: "" }}
        onSubmit={(values)=>console.log(values)}
        >
        {({ errors, touched, isValid, dirty }) => (
        <Form className={css.auth_form}>
        <div className={css.auth_page_block}>
          <InputBlock name='login' validateFunc={validateUsername} label='Придумайте логин' placeholder='Логин' specType='login' errors={errors} touched={touched}/>
          <InputBlock name='pass' validateFunc={()=>{}} label='Придумайте пароль' placeholder='Пароль' specType='password' errors={errors} touched={touched}/>
          <div className={css.auth_page_txt}>Проблемы с входом, забыли данные? <a className={css.auth_page_link} href="#">Восстановление</a></div>
          <div className={css.form_row}>
            <Field className={css.input_checkbox} type="checkbox" id={'newsSubscribe'} name='newsSubscribe'/>
            <label htmlFor="newsSubscribe">Запомнить данные для авторизации</label>
          </div>
        </div>
        <div className={css.auth_page_content_footer}>
          <Button style={{'width':'572px'}} customClasses={`${!(dirty && isValid) && css.reg_btn_disabled}`} buttonStyle={'gradBtn'} content={'Войти в систему'} disabled={!(dirty && isValid)}/>
          <div className={css.auth_comment}>У вас еще нету аккаунта? <a className={css.auth_page_link} href="#">Регистрация</a></div>
        </div>
        </Form>)}
      </Formik>
      </>
  )
}

export default Auth