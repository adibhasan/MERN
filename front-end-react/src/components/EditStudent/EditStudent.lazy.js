import React, { lazy, Suspense } from 'react';

const LazyEditStudent = lazy(() => import('./EditStudent'));

const EditStudent = props => (
  <Suspense fallback={null}>
    <LazyEditStudent {...props} />
  </Suspense>
);

export default EditStudent;
