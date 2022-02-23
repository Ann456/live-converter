import PropTypes from 'prop-types';
import Table from '../Table';
import s from './Header.module.scss';

const Header = ({ currencies }) => {
  return (
    <header className={s.container}>
      <Table currencies={currencies} />
    </header>
  );
};

Header.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      ccy: PropTypes.string.isRequired,
      sale: PropTypes.string.isRequired,
      buy: PropTypes.string.isRequired,
    }),
  ),
};

export default Header;
