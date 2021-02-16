import * as actionTypes from '../actions';

const initState = {
  newArticle: {},
  newArticleHasError: false,
  newArticleIsLoading: false,
  articles: [],
  articlesHasError: false,
  articlesIsLoading: false,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES_START:
      return {
        ...state,
        articles: [],
        articlesHasError: false,
        articlesIsLoading: true,
      };
    case actionTypes.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.articles,
        articlesHasError: false,
        articlesIsLoading: false,
      };
    case actionTypes.FETCH_ARTICLES_ERROR:
      return {
        ...state,
        articles: [],
        articlesHasError: true,
        articlesIsLoading: false,
      };
    case actionTypes.POST_ARTICLE_START:
      return {
        ...state,
        newArticle: [],
        newArticleHasError: false,
        newArticleIsLoading: true,
      };
    case actionTypes.POST_ARTICLE_SUCCESS:
      return {
        ...state,
        newArticle: action.article,
        newArticleHasError: false,
        newArticleIsLoading: false,
      };
    case actionTypes.POST_ARTICLE_ERROR:
      return {
        ...state,
        newArticle: [],
        newArticleHasError: true,
        newArticleIsLoading: false,
      };
    default:
      return { ...state };
  }
};
export default reducer;
