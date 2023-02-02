import { Field, Form, Formik } from 'formik'
import Button from '../../../components/_common/Button';
import css from './Forms.module.css'
import InputBlock from './FormsParts/InputBlock';

const RegainAccess = () => {
  
  function validateCode(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (value !== 123456) {
      error = 'Code is not right';
    }
    return error;
  }

  return (
    <>
    <Formik
        initialValues={{ code: "" }}
        onSubmit={(values)=>console.log(values)}
        >
        {({ errors, touched, isValid, dirty }) => (
        <Form className={css.auth_form}>
        <div className={css.auth_page_block}>
            <div className={css.auth_page_txt}>Процесс регистрации аккаунта почти завершен, осталось совсем
            немного! Мы отправили на указанную вами электронную почту письмо
            с уникальным кодом подтверждения.</div>
          <InputBlock name='code' validateFunc={validateCode()} label='Полученный код' placeholder='Код' specType='code' errors={errors} touched={touched}/>
        </div>
        <div className={css.auth_page_content_footer}>
          <Button style={{'width':'572px'}} customClasses={`${!(dirty && isValid) && css.reg_btn_disabled}`} buttonStyle={'gradBtn'} content={'Подтвердить аккаунт'} disabled={!(dirty && isValid)}/>
          <div className={css.auth_comment}>Я забыл кое-что! <a className={css.auth_page_link} href="#">Вернуться назад</a></div>
        </div>
        </Form>)}
      </Formik>
      </>
  )
}

export default RegainAccess