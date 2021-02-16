import PropTypes from 'prop-types';
import axios from 'axios';
import styles from '../styles/about.module.scss';
import Meta from '../components/meta/Meta';
import Layout from '../components/layout/Layout';

const About = ({}) => {
  return (
    <>
      <Meta title='blog - About' />
      <Layout>
        <div className={styles.about}>
          <h6 className={styles.title}>about us</h6>
          <p className={styles.txt}>
            content of about us content of about us content of about us content
            of about us content of about us content of about us content of about
            us content of about us content of about us content of about us
            content of about us content of about us content of about us content
            of about us content of about us content of about us content of about
            us content of about us content of about us content of about us
            content of about us content of about us content of about us content
            of about us
          </p>
        </div>
      </Layout>
    </>
  );
};
// About.defaultProps = {
//   about: '',
// };
// About.propTypes = {
//   about: PropTypes.string,
// };
// export const getStaticProps = async () => {
//   const res = (await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/about`))
//     .data;
//   const props = {};
//   if (res.error) props.about = '';
//   else props.about = res.aboutTxt;
//   return {
//     props,
//   };
// };
export default About;
