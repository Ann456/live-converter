import PropTypes from 'prop-types';
import s from './CurrencyBox.module.scss';
import Button from '../Button';
import Input from '../Input';

const CurrencyBox = ({
  typeInput,
  currencies,
  onInput,
  onBtnClick,
  amount,
  currency,
}) => {
  return (
    <div className={s.box}>
      <Input
        type={typeInput}
        onInput={onInput}
        amount={amount}
      />
      <Button
        currencies={currencies}
        currency={currency}
        onBtnClick={onBtnClick}
      />
    </div>
  );
};

CurrencyBox.propTypes = {
  typeInput: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired),
  onInput: PropTypes.func.isRequired,
  onBtnClick: PropTypes.func.isRequired,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currency: PropTypes.string.isRequired,
};

export default CurrencyBox;
