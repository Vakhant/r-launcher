import { Field, Form, Formik } from 'formik'
import Button from '../../../components/_common/Button';
import css from './Forms.module.css'
import InputBlock from './FormsParts/InputBlock';

const AccountRegistration = () => {
  
  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    if (value === 'Attention') {
      error = 'Attention';
    }
    return error;
  }
  
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
        initialValues={{ login: "", 'email': "", pass: "", passCopy: "", newsSubscribe: false }}
        onSubmit={(values)=>console.log(values)}
        >
        {({ errors, touched, isValid, dirty, isValidating }) => (
        <Form className={css.auth_form}>
        <div className={css.auth_page_block}>
          <InputBlock name='login' validateFunc={validateUsername} label='Придумайте логин' placeholder='Логин' specType='login' errors={errors} touched={touched}/>
          <InputBlock name='email' validateFunc={validateEmail} label='Ваша почта' placeholder='Почта' specType='email' errors={errors} touched={touched}/>
          <InputBlock name='pass' validateFunc={()=>{}} label='Придумайте пароль' placeholder='Пароль' specType='password' errors={errors} touched={touched}/>
          <InputBlock name='passCopy' validateFunc={()=>{}} label='Повторите пароль' placeholder='Пароль' specType='password' errors={errors} touched={touched}/>
          <div className={css.form_row}>
            <Field className={css.input_checkbox} type="checkbox" id={'newsSubscribe'} name='newsSubscribe'/>
            <label htmlFor="newsSubscribe">Я хочу подписаться на новостную рассылку, чтобы получать различную информацию об акциях, обновлениях и других новостях.</label>
          </div>
        </div>
        <div className={css.auth_page_content_footer}>
          <Button style={{'width':'572px'}} customClasses={`${!(dirty && isValid) && css.reg_btn_disabled}`} buttonStyle={'gradBtn'} content={'Создать новый аккаунт'} disabled={!(dirty && isValid)}/>
          <div className={css.auth_comment}>У вас уже есть аккаунт? <a className={css.auth_page_link} href="#">Авторизация</a></div>
        </div>
        </Form>)}
      </Formik>
      </>
  )
}

export default AccountRegistration