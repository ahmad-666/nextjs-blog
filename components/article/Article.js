import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from './article.module.scss';
import { articlesAnimation } from '../../animations';

const Article = ({ _id, imgSrc, date, title }) => {
  return (
    <motion.div variants={articlesAnimation} className={styles.article}>
      <Link href={`/articles/${encodeURIComponent(_id)}`}>
        <a className={styles.link}>
          <div className={styles.imgContainer}>
            <Image
              src={imgSrc}
              alt={imgSrc}
              layout='fill'
              objectFit='cover'
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.withIcon}>
              <FontAwesomeIcon
                icon={faCalendar}
                className={styles.icon}
                size='2x'
              />
              <p className={styles.date}>{date}</p>
            </div>
            <h3 className={styles.title}>{title}</h3>
          </div>
        </a>
      </Link>
    </motion.div>
  );
};
Article.propTypes = {
  _id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Article;
