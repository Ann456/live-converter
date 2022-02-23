import PropTypes from 'prop-types';
import s from './Button.module.scss';

const Button = ({ currencies, currency, onBtnClick }) => {
  return (
    <div>
      <div>
        <p className={s.box}>Currency:</p>
      </div>
      <select
        value={currency}
        onChange={e => onBtnClick(e.target.value)}
        className={s.button}
      >
      {currencies.map(currency => (
        <option value={currency} key={currency}>
          {currency}
        </option>
      ))}
      </select>
    </div>
  );
};

Button.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired),
  currency: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default Button;
