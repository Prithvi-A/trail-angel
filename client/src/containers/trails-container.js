'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as trailActions from '../actions/trail-actions';
import * as favoriteActions from '../actions/favorite-actions';

import TrailList from '../components/trail/trailList.component';

const Trails = (props) => {
  const { state, actions } = props;
  return (
    <TrailList navigator={props.navigator} isFetching={state.trailsReducer.isFetching}
               didInvalidate={state.trailsReducer.didInvalidate}
               lastUpdated={state.trailsReducer.lastUpdated}
               trails={state.trailsReducer.trails}
               favorites={state.favoritesReducer.items}
               userLocation={state.appReducer.geolocation}
               {...actions} />
  );
};

const mapStateToProps = function(state) {
  return {
    state: state
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    actions: bindActionCreators({ ...trailActions, ...favoriteActions}, dispatch)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trails);