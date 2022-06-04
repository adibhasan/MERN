import React from 'react';
import PropTypes from 'prop-types';
import styles from './StudentList.module.css';

const StudentList = () => (
  <div className={styles.StudentList}>
     <p>React Student List Component!</p>
  </div>
);

StudentList.propTypes = {};

StudentList.defaultProps = {};

export default StudentList;
