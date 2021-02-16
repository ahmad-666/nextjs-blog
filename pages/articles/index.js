import PropTypes from 'prop-types';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Meta from '../../components/meta/Meta';
import Layout from '../../components/layout/Layout';
import styles from '../../styles/articles.module.scss';
import Article from '../../components/article/Article';
import { fetchArticles } from '../../store/actions/article';
import { articlesParentAnimation } from '../../animations';
import articlesData from '../../public/data/articles';

const Articles = ({ articles }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArticles(articles));
  }, []);
  // const articlesRedux = useSelector(store => store.article.articles);
  return (
    <>
      <Meta title='blog - Articles' />
      <Layout>
        <motion.div
          className={styles.articles}
          variants={articlesParentAnimation}
        >
          {articles.map(article => (
            <Article
              key={article._id}
              _id={article._id}
              imgSrc={article.imgSrc}
              date={article.date}
              title={article.title}
            />
          ))}
        </motion.div>
      </Layout>
    </>
  );
};
Articles.defaultProps = {
  articles: [],
};
Articles.propTypes = {
  articles: PropTypes.array,
};
export const getStaticProps = async () => {
  return {
    props: { articles: articlesData },
    revalidate: 60,
    notFound: !articlesData.length && true,
  };

  // try {
  //   const res = (
  //     await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/articles`)
  //   ).data;
  //   const props = {};
  //   props.articles = res.articles;
  //   return {
  //     props,
  //     revalidate: 60,
  //     notFound: res.error && true,
  //   };
  // } catch (err) {
  //   return {
  //     props: {
  //       articles: [],
  //     },
  //   };
  // }
};
export default Articles;
