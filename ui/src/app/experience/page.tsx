import { GetStaticProps } from "next";
import styles from './page.module.css'
import Image from 'next/image'
// import { getPublicUrlFetch } from "../../lib/interceptor";
// export const getStaticProps: GetStaticProps = async () => {
//     const response = await getPublicUrlFetch('about');
//     return {
//         props: {
//             data: response.data.attributes,
//         },
//     };
// }

const About = ({ data }: any) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <h1 className='heading-xl mb-5 section-heading'>Experience</h1>
                <p>I am an India-based Full-stack Developer who loves spending time with my laptop, whether it's coding or editing photos that I have clicked myself.</p>
                
            </div>
            {/* <div>
                <Image className="m-auto img-about" src={'/images/about.png'} alt={'My Picture is not available because of your internet'} width={300} height={600}></Image>
            </div> */}
        </div>
    )
}
export default About;
