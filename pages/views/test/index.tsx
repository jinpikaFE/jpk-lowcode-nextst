import React, { useEffect } from 'react';
import { NextPage } from 'next';
import request from 'pages/utils/request';

const Page: NextPage = () => {
  const test = async () => {
    const res = await request('/api/test',{
      method: 'POST'
    })
    console.log(res);
    
  }
  useEffect(() => {
    test()
  }, [])
  return <div>Test!</div>;
};

export default Page;
