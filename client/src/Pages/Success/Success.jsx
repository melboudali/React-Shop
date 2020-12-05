import React from 'react';
import { withRouter } from 'react-router-dom';
import SuccessImg from '../../Assets/Images/success.png';
import './Success.scss';
import PropTypes from 'prop-types';

function Success({ history }) {
  return (
    <div className='SuccessContainer'>
      <div className='SuccessImageContainer'>
        <img className='SuccessImage' src={SuccessImg} alt='Success' />
      </div>
      <div className='SuccessMessage'>
        <div className='SuccessTitle'>
          <h1>Payment Successful!</h1>
          <p>Transaction Number: {history.location.search.replace('?id=', '')}</p>
        </div>
        <div className='SuccessBody'>
          <h2>We received your order - thanks!</h2>
          <p>
            Items may not ship immediately due to limited airline capacity and government
            restrictions as a result of COVID-19.
          </p>
          <p>
            Once your order has shipped, we will send you an email confirmation including a tracking
            number.
          </p>
        </div>
        <div className='SuccessFooter'>
          <p>Thank you for ordering from React Shop!</p>
        </div>
      </div>
    </div>
  );
}

Success.propTypes = { history: PropTypes.object.isRequired };

export default withRouter(Success);
