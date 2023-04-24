"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { getPublicUrlFetch } from "../../lib/interceptor";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Experience from './experience/page';
import Connect from './connect/page';
// import DOMPurify from 'isomorphic-dompurify';

// const getData = async () => {
//   const response = await getPublicUrlFetch('home');
//   return {
//     props: {
//       data: response.data.attributes,
//     },
//   };
// }

export default function Home({ data }: any) {
  // const desc = data.description
  useEffect(() => {

  }, [])
  return (
    <>
      <div className='content-body p-8 lg:p-20 md:p-10 xl:p-24 2xl:p-40'>
        <div className="md:flex md:flex-row md:py-5">
          {/* <div className="flex-none mx-1 px-5"> */}
          <div className="md:flex-none">
            <Image className={`position-absolute ${styles.img_hi}`} src={'/images/img_hi.png'} alt={'hi'} width={250} height={250}></Image>
          </div>
          <div className="md:grow mx-0 md:mx-1 mt-5 md:mt-0">
            <h3 className='font-bold tracking-widest'>my name is</h3>
            <h1 className='multicolored-text heading-xl'>Priyanka Das</h1>
            <h2 className='font-bold heading-lg py-3'>Engineer + Photographer</h2>
            <h3 className='hidden lg:block text-md py-3'>(A generic combo commonly found among engineers worldwide)</h3>
          </div>
        </div>
        {/* <div className="flex py-5"> */}
        <div className="w-full px-0 md:px-5 py-5 mt-0 md:mt-5">
          {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(desc) }}></div> */}
          {/* <p className='text-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum nunc porttitor tortor sagittis rutrum. Sed molestie eget eros et ornare. Ut eget nunc id ante commodo egestas sed nec elit. Proin auctor iaculis ex sit amet sollicitudin
          </p> */}
          <h2 className={`${styles.desc} font-bold heading-md mb-5`}><span>Front-End Developer</span> / <span>Sitefinity Expert</span> / <span>Hobbyist Photographer</span></h2>
          <br />
          <Link className="btn-contact" href={'/connect'}>Contact me!</Link>
        </div>
        {/* <div className="basis-1/2">
          <video className='m-auto' width={'60%'} controls src='videos/intro.mp4'></video>
          <h1>test3</h1>
        </div> */}
        {/* </div> */}
      </div>
      <Experience />
      <Connect />
    </>
  )
}
