import React, { lazy, Suspense } from 'react';

const LazyHomePageComponent = lazy(() => import('./HomePageComponent'));

const HomePageComponent = props => (
  <Suspense fallback={null}>
    <LazyHomePageComponent {...props} />
  </Suspense>
);

export default HomePageComponent;
