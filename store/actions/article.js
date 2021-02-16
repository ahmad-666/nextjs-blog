import axios from 'axios';
import * as actionTypes from '.';

export const fetchArticles = articles => async dispatch => {
  dispatch({ type: actionTypes.FETCH_ARTICLES_START });
  try {
    dispatch({
      type: actionTypes.FETCH_ARTICLES_SUCCESS,
      articles,
    });
  } catch (err) {
    dispatch({ type: actionTypes.FETCH_ARTICLES_ERROR });
  }
};
export const postArticle = ({ values, submitProps }) => async dispatch => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  dispatch({ type: actionTypes.POST_ARTICLE_START });
  try {
    const res = (
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/articles/newarticle`,
        values,
        headers
      )
    ).data;
    submitProps.resetForm();
    submitProps.setSubmitting(false);
    dispatch({
      type: actionTypes.POST_ARTICLE_SUCCESS,
      article: res.article,
    });
  } catch (err) {
    dispatch({ type: actionTypes.POST_ARTICLE_ERROR });
  }
};
