import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { faPenAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import styles from '../styles/newarticle.module.scss';
import FormElm from '../components/formElm/FormElm';
import Meta from '../components/meta/Meta';
import Layout from '../components/layout/Layout';
import Loader from '../components/loader/Loader';
import { formAnimation } from '../animations';

const initialValues = {
  title: '',
  content: '',
};
const validationSchema = Yup.object({
  title: Yup.string().required('article title is required'),
  content: Yup.string().required('article content is required'),
});
const initFormState = {
  hasError: false,
  isSuccess: false,
  isLoading: false,
  msg: null,
};
const formReducer = (state, action) => {
  switch (action.type) {
    case 'submit':
      return {
        ...state,
        hasError: false,
        isSuccess: false,
        isLoading: true,
        msg: null,
      };
    case 'error':
      return {
        ...state,
        hasError: true,
        isSuccess: false,
        isLoading: false,
        msg: action.msg,
      };
    case 'success':
      return {
        ...state,
        hasError: false,
        isSuccess: true,
        isLoading: false,
        msg: action.msg,
      };
    default:
      return console.error('action.type is wrong');
  }
};
const NewArticle = () => {
  const [formState, dispatch] = useReducer(formReducer, initFormState);
  // const dispatch = useDispatch();
  // const { newArticle, newArticleHasError, newArticleIsLoading } = useSelector(
  //   store => store.article
  // );
  // const formSubmitHandler = async (values, submitProps) => {
  //   dispatch(postArticle({ values, submitProps }));
  // };
  const formSubmitHandler = async (values, submitProps) => {
    dispatch({ type: 'submit' });
    setTimeout(() => {
      submitProps.setSubmitting(false);
      submitProps.resetForm();
      dispatch({ type: 'success', msg: 'article successfully added' });
    }, 2000);

    // dispatch({ type: 'submit' });
    // const headers = {
    //   'Content-Type': 'application/json',
    //   Accept: 'application/json',
    // };
    // const body = values;
    // let res = null;
    // try {
    //   res = (
    //     await axios.post(
    //       `${process.env.NEXT_PUBLIC_SERVER_URL}/articles/newarticle`,
    //       body,
    //       headers
    //     )
    //   ).data;
    //   submitProps.setSubmitting(false);
    //   submitProps.resetForm();
    //   dispatch({ type: 'success', msg: res.msg });
    // } catch (err) {
    //   dispatch({ type: 'error', msg: 'error happens' });
    // }
  };
  return (
    <>
      <Meta title='add new article - blog' />
      <Layout>
        <div className={styles.wrapper}>
          <motion.div className={styles.container} variants={formAnimation}>
            <h6 className={styles.title}>add new article</h6>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              validateOnMount={false}
              validateOnBlur
              validateOnChange
              onSubmit={(values, submitProps) =>
                formSubmitHandler(values, submitProps)
              }
            >
              {formik => {
                return (
                  <Form noValidate className={styles.form}>
                    <FormElm
                      tag='input'
                      type='text'
                      id='title'
                      name='title'
                      placeholder='enter article title'
                      icon={faPenAlt}
                    />
                    <FormElm
                      tag='input'
                      type='text'
                      id='content'
                      name='content'
                      placeholder='enter article content'
                      icon={faFileAlt}
                    />
                    <button
                      type='submit'
                      className={styles.submitBtn}
                      disabled={
                        formik.isSubmitting || (formik.dirty && !formik.isValid)
                      }
                    >
                      submit article
                    </button>
                  </Form>
                );
              }}
            </Formik>
            {formState.hasError && (
              <p className={`${styles.msg} ${styles.error}`}>
                {' '}
                {formState.msg}{' '}
              </p>
            )}
            {formState.isSuccess && (
              <p className={`${styles.msg} ${styles.success}`}>
                {formState.msg}
              </p>
            )}
            {formState.isLoading && <Loader />}
            {/* {newArticleHasError && (
            <p className={`${styles.msg} ${styles.error}`}> error </p>
          )}
          {Object.keys(newArticle).length && (
            <p className={`${styles.msg} ${styles.success}`}>success</p>
          )}
          {newArticleIsLoading && <Loader />} */}
          </motion.div>
        </div>
      </Layout>
    </>
  );
};
export default NewArticle;
