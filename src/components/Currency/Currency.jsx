import PropTypes from 'prop-types';
import s from './Currency.module.scss';

const Currency = ({ ccy, buy, sale }) => {
  return (
    <div>
      <p className={s.box}>{ccy}</p>
      <p className={s.box}>{sale}</p>
      <p className={s.box}>{buy}</p>
    </div>
  );
};

Currency.propTypes = {
  ccy: PropTypes.string.isRequired,
  buy: PropTypes.string.isRequired,
  sale: PropTypes.string.isRequired,
};

export default Currency;
