import React, { Component, PropTypes } from 'react';
import { fetchUserInfo } from '../actions/userInfo';
import '../styles/user-info.less';

const propTypes = {
  name: PropTypes.string,
  website: PropTypes.string,
};

export default class UserInfo extends Component {

  static fetchData({ dispatch }) {
    const dispatchTask = [];
    dispatchTask.push(dispatch(fetchUserInfo()));
    return dispatchTask;
  }

  render() {
    const { name, website } = this.props;
    return (
      <div className="user-info">
        <p className="user-info__name">{ name }</p>
        <p className="user-info__website">{ website }</p>
      </div>
    );
  }
}

UserInfo.propTypes = propTypes;
