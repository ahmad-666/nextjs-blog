import PropTypes from 'prop-types';
import FormInput from '../formInput/FormInput';

const FormElm = ({ tag, ...rest }) => {
  switch (tag) {
    case 'input':
      return <FormInput {...rest} />;
    default:
      console.error('tag in FormElm is wrong');
      return null;
  }
};
FormElm.propTypes = {
  tag: PropTypes.string.isRequired,
};
export default FormElm;
