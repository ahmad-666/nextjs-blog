import PropTypes from 'prop-types';
import axios from 'axios';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPen } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import styles from '../../styles/article.module.scss';
import Meta from '../../components/meta/Meta';
import Layout from '../../components/layout/Layout';
import Loader from '../../components/loader/Loader';
import { articleAnimation } from '../../animations';
import articlesData from '../../public/data/articles';

const Article = ({ title, content, imgSrc, writer, date }) => {
  const router = useRouter();
  return (
    <>
      <Meta title={`blog - ${title}`} />
      <Layout>
        {router.isFallback ? (
          <Loader />
        ) : (
          <motion.div className={styles.article} variants={articleAnimation}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                layout='fill'
                src={imgSrc}
                alt={imgSrc}
                objectFit='cover'
              />
              <h3 className={styles.title}>{title}</h3>
            </div>
            <div className={styles.info}>
              <div className={styles.withIcon}>
                <FontAwesomeIcon
                  size='2x'
                  className={styles.icon}
                  icon={faCalendar}
                />
                <p className={styles.iconText}>{date}</p>
              </div>
              <div className={styles.withIcon}>
                <FontAwesomeIcon
                  size='2x'
                  className={styles.icon}
                  icon={faPen}
                />
                <p className={styles.iconText}>{writer}</p>
              </div>
            </div>
            <div className={styles.content}>
              <p className={styles.txt}>{content}</p>
            </div>
          </motion.div>
        )}
      </Layout>
    </>
  );
};
Article.defaultProps = {
  title: '',
  content: '',
  imgSrc: '/',
  writer: '',
  date: '',
};
Article.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imgSrc: PropTypes.string,
  writer: PropTypes.string,
  date: PropTypes.string,
};
export const getStaticPaths = async () => {
  const paths = articlesData.map(article => {
    return {
      params: {
        id: article._id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };

  // try {
  //   const res = (
  //     await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/articles`)
  //   ).data;
  //   // const paths = res.articles.map(article => {
  //   //   return {
  //   //     params: {
  //   //       id: article._id,
  //   //     },
  //   //   };
  //   // });
  //   // return {
  //   //   paths,
  //   //   fallback: false,
  //   // };
  //   return {
  //     paths: [{ params: { id: '1' } }],
  //     fallback: true,
  //   };
  // } catch (err) {
  //   return {
  //     paths: [],
  //     fallback: false,
  //   };
  // }
};
export const getStaticProps = async context => {
  const { id } = context.params;
  const article = articlesData.filter(art => art._id == id);
  if (!article.length) {
    return {
      props: {},
      notFound: true,
    };
  }
  const props = {};
  props.title = article[0].title;
  props.content = article[0].content;
  props.imgSrc = article[0].imgSrc;
  props.writer = article[0].writer;
  props.date = article[0].date;

  return {
    props,
    revalidate: 60,
  };
  // const { id } = context.params;
  // const res = (
  //   await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/articles/${id}`)
  // ).data;
  // const props = {};
  // if (res.error) props.article = {};
  // else {
  //   props.title = res.article.title;
  //   props.content = res.article.content;
  //   props.imgSrc = res.article.imgSrc;
  //   props.writer = res.article.writer;
  //   props.date = res.article.date;
  // }
  // return {
  //   props,
  //   revalidate: 60,
  //   notFound: res.error && true,
  // };
};
export default Article;
