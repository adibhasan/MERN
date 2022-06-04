import React, { lazy, Suspense } from 'react';

const LazyStudentList = lazy(() => import('./StudentList'));

const StudentList = props => (
  <Suspense fallback={null}>
    <LazyStudentList {...props} />
  </Suspense>
);

export default StudentList;
