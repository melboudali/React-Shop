import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCurrentCollection } from '../../Redux/Shop/ShopSelectors';
import CollectionItem from '../../Components/ShopPageComponents/CollectionItem/CollectionItem';
import NotFound from '../404/NotFound';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import './Collection.scss';

const Collection = ({ CurrentCollection, history }) => {
  const paths = history.location.pathname.toUpperCase().split('/');
  return CurrentCollection ? (
    <div className='CollectionPreview'>
      <Breadcrumbs
        className='Breadcrumbs'
        separator={
          <svg viewBox='0 0 24 24'>
            <path stroke='none' d='M0 0h24v24H0z' />
            <polyline points='9 6 15 12 9 18' />
          </svg>
        }
        aria-label='breadcrumb'>
        <Link href='/'>
          <svg viewBox='0 0 24 24'>
            <path stroke='none' d='M0 0h24v24H0z' />
            <polyline points='5 12 3 12 12 3 21 12 19 12' />
            <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
            <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
          </svg>
          HOME
        </Link>
        <Link href={`/${paths[1].toLowerCase()}`}>{paths[1]}</Link>
        <span>{CurrentCollection.title.toUpperCase()}</span>
      </Breadcrumbs>
      <h1 className='title'>
        <span>{CurrentCollection.title.toUpperCase()}</span>
      </h1>
      <Grid container direction='row' justify='center' alignItems='baseline' spacing={3}>
        {CurrentCollection.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Grid>
    </div>
  ) : (
    <NotFound />
  );
};

Collection.propTypes = {
  CurrentCollection: PropTypes.object,
  history: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  CurrentCollection: (state, otherProps) =>
    SelectCurrentCollection(otherProps.match.params.collectionRouteName)(state)
});

export default connect(mapStateToProps)(Collection);
