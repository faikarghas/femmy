import React, { Component, useEffect } from 'react'


const WithAuth = (WrappedComponent:any) => {

  return (props:any) => (
    <div >
        <WrappedComponent {...props}/>
    </div>
  );
};

export default WithAuth;