import PropTypes from 'prop-types';
import s from './Input.module.scss';

const Input = ({ type, amount, onInput }) => {
  return (
    <div className={s.box}>
    <label>Amount:</label>
      <input
        autoComplete="off"
        autoFocus
        type={type}
        value={amount}
        onChange={e => onInput(e.target.value)}
        className={s.input}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onInput: PropTypes.func.isRequired,
};

export default Input;
