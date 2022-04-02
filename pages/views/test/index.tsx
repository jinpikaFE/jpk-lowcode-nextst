import React, { useEffect } from 'react';
import { NextPage } from 'next';
import request from 'web-utils/request';
import styles from './index.module.scss'


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
  return <div className={styles.test}>Test! <div className={styles.s}>ssss</div></div>;
};

export default Page;
