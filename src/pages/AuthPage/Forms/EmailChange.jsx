import { Field, Form, Formik } from 'formik'
import Button from '../../../components/_common/Button';
import css from './Forms.module.css'
import InputBlock from './FormsParts/InputBlock';

const EmailChange = () => {
  
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

  return (
    <>
    <Formik
        initialValues={{ newEmail: "", oldEmail: ''}}
        onSubmit={(values)=>console.log(values)}
        >
        {({ errors, touched, isValid, dirty }) => (
        <Form className={css.auth_form}>
        <div className={css.auth_page_block}>
          <InputBlock name='newEmail' validateFunc={validateEmail} label='Ваша почта' placeholder='Почта' specType='email' errors={errors} touched={touched}/>
          <InputBlock name='oldEmail' validateFunc={validateEmail} label='Ваша почта' placeholder='Почта' specType='email' errors={errors} touched={touched}/>
        </div>
        <div className={css.auth_page_content_footer}>
          <Button style={{'width':'572px'}} customClasses={`${!(dirty && isValid) && css.reg_btn_disabled}`} buttonStyle={'gradBtn'} content={'Подтвердить и продолжить'} disabled={!(dirty && isValid)}/>
          <div className={css.auth_comment}>Я передумал! <a className={css.auth_page_link} href="#">Вернуться назад</a></div>
        </div>
        </Form>)}
      </Formik>
      </>
  )
}

export default EmailChange