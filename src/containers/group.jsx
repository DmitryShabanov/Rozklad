import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Group from './../components/group';

const GroupContainer = ({ groupId }) => (
  <Group groupId={groupId} />
);

GroupContainer.propTypes = {
  groupId: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    groupId: ownProps.match.params.groupId,
  };
}

export default connect(mapStateToProps)(GroupContainer);
