import PropTypes from 'prop-types';
import Currency from '../Currency/Currency';
import s from './Table.module.scss';

const Table = ({ currencies }) => {
  return (
    <div className={s.container}>
        <div>
            <p className={s.box}>Currency</p>
            <p className={s.box}>Selling</p>
            <p className={s.box}>Buying</p>
        </div>
      {currencies.map(({ ccy, sale, buy }) => (
        <Currency key={ccy} ccy={ccy} sale={sale} buy={buy} />
      ))}
    </div>
  );
};

Table.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      ccy: PropTypes.string.isRequired,
      sale: PropTypes.string.isRequired,
      buy: PropTypes.string.isRequired,
    }),
  ),
};

export default Table;
