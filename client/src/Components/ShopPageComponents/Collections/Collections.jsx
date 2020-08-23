import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectAllCollections } from '../../../Redux/Shop/ShopSelectors';
import CollectionsContainer from './CollectionsContainer/CollectionsContainer';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import './Collections.scss';
import PropTypes from 'prop-types';

const Collections = ({ AllCollections, history }) => {
  const paths = history.location.pathname.toUpperCase().split('/');

  return (
    <div className='Collections'>
      <Breadcrumbs
        className='Breadcrumbs'
        separator={
          <svg viewBox='0 0 24 24'>
            <path stroke='none' d='M0 0h24v24H0z' />
            <polyline points='9 6 15 12 9 18' />
          </svg>
        }
        aria-label='Breadcrumb'>
        <Link to='/'>
          <svg viewBox='0 0 24 24'>
            <path stroke='none' d='M0 0h24v24H0z' />
            <polyline points='5 12 3 12 12 3 21 12 19 12' />
            <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
            <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
          </svg>
          home
        </Link>
        <span>{paths[1]}</span>
      </Breadcrumbs>
      {AllCollections.map(({ id, ...AllCollections }) => (
        <CollectionsContainer key={id} {...AllCollections} />
      ))}
    </div>
  );
};

Collections.propTypes = {
  AllCollections: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  AllCollections: SelectAllCollections
});

export default withRouter(connect(mapStateToProps)(Collections));
