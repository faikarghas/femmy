import React from 'react';

export function withAUth(Component: any) {
  return () => {
    console.log('hoc');

    return <Component />;
  };
}
