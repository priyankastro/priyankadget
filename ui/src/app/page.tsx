"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { getPublicUrlFetch } from "../../lib/interceptor";
import { useEffect, useState } from 'react';
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
    <div>
      <div className="grid grid-cols-12 gap-1 md:flex md:flex-row md:py-5">
        {/* <div className="flex-none mx-1 px-5"> */}
        <div className="col-span-12 md:flex-none">
          <Image className={`position-absolute ${styles.img_hi}`} src={'/images/img_hi.png'} alt={'hi'} width={250} height={250}></Image>
        </div>
        <div className="col-span-12 md:grow mx-1">
          <h3 className='font-bold tracking-widest'>my name is</h3>
          <h1 className='heading-xl'>Priyanka Das</h1>
          <h2 className='font-bold text-3xl py-3'>Engineer + Photographer</h2>
          <h3 className='font-bold text-xl py-3'>(A generic combo commonly found among engineers worldwide)</h3>
        </div>
      </div>
      {/* <div className="flex py-5"> */}
        <div className="w-full p-5 mt-5">
          {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(desc) }}></div> */}
          {/* <p className='text-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum nunc porttitor tortor sagittis rutrum. Sed molestie eget eros et ornare. Ut eget nunc id ante commodo egestas sed nec elit. Proin auctor iaculis ex sit amet sollicitudin
          </p> */}
          <h2 className={`${styles.desc} font-bold text-2xl`}><span>Front-End Developer</span> / <span>Sitefinity SME</span> / <span>Hobyist Photographer</span></h2>
          <button className="mt-10 btn-contact">
            Contact me!
          </button>
        </div>
        {/* <div className="basis-1/2">
          <video className='m-auto' width={'60%'} controls src='videos/intro.mp4'></video>
          <h1>test3</h1>
        </div> */}
      {/* </div> */}
    </div>
  )
}
