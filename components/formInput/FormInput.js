import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field, ErrorMessage } from 'formik';
import styles from './formInput.module.scss';

const FormInput = ({ type, id, name, placeholder, icon, ...rest }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={icon} size='2x' className={styles.icon} />
        </div>
        <Field
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          {...rest}
          className={styles.input}
        />
      </div>
      <ErrorMessage name={name} component='p' className={styles.error} />
    </div>
  );
};
FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};
export default FormInput;
