import React, { lazy, Suspense } from 'react';

const LazySigninComponent = lazy(() => import('./SigninComponent'));

const SigninComponent = props => (
  <Suspense fallback={null}>
    <LazySigninComponent {...props} />
  </Suspense>
);

export default SigninComponent;
