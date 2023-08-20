import '../App.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { Tooltip } from '@mui/material';

function CartWidget() {
  return (
    <Link to="/cart">
      <Tooltip title="Carro de Compras" arrow>
        <a className="nav-link" href="cart">
          <FaShoppingCart />
        </a>
      </Tooltip>
    </Link>
  );
}

export default CartWidget;
