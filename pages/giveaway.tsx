import React from 'react'
import type { NextPage } from 'next';
import Layout from '../components/layouts/index';


const Giveaway: NextPage = ({auth}:any) => {
  return (
    <Layout page="tentang-kami" auth={auth}>
      <div className='w-full'>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSdW7f6SLrZwTH0N9D8m7BUkGW6mX61yCGUlhlp16kufw_swdA/viewform' target='_blank' rel='noreferrer'>
              <picture>
              <source media="(min-width:650px)" srcSet="/images/femmy_giveaway.jpg" />
              <img src="/images/femmy_giveaway-m.jpg" alt="Flowers" className='m-auto object-contain' width={'100%'} height={'100%'}/>
              </picture>
          </a>
      </div>
    </Layout>
  )
}

export default Giveaway