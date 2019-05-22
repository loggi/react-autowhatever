import styles from './SourceCodeLink.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SourceCodeLink extends Component {
  static propTypes = {
    file: PropTypes.string.isRequired
  };

  render() {
    const { file } = this.props;

    return (
      <a className={styles.link}
         href={`//github.com/moroshko/react-autowhatever/tree/master/${file}`}
         target="_blank">
        Source code
      </a>
    );
  }
}
