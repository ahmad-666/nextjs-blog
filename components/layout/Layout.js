import PropTypes from 'prop-types';
import Nav from '../nav/Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};
Layout.defaultProps = {
  children: '',
};
Layout.propTypes = {
  children: PropTypes.object,
};
export default Layout;
