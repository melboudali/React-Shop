import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCurrentCollection } from '../../Redux/Shop/ShopSelectors';
import CollectionItem from '../../Components/ShopPageComponents/CollectionItem/CollectionItem';
import NotFound from '../404/NotFound';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import './Collection.scss';

const Collection = ({ CurrentCollection, match, history }) => {
  const paths = history.location.pathname.toUpperCase().split('/');
  console.log(paths);
  return CurrentCollection ? (
    <div className='CollectionPreview'>
      <Breadcrumbs
        className='Breadcrumbs'
        separator={<i className='far fa-chevron-right' />}
        aria-label='breadcrumb'>
        <Link href='/'>HOME</Link>
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
  CurrentCollection: PropTypes.object
};

const mapStateToProps = (state, otherProps) => ({
  CurrentCollection: SelectCurrentCollection(otherProps.match.params.collectionRouteName)(state)
});

export default connect(mapStateToProps)(Collection);
