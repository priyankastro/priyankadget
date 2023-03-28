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
                <h1 className='heading-xl mb-5 section-heading'>About Me</h1>
                <p>I am an India-based Full-stack Developer and I love spending time with my laptop, whether it's coding or editing photos that I have clicked myself.</p>
                <p>Since 2019, I have been working as a software engineer and have gained experience in both frontend and backend development. Nowadays, I mainly focus on frontend development and have specialized in Sitefinity CMS by working on various Sitefinity projects. Additionally, I have exposure to various other major CMS in the market.</p>
                <p>I believe that problem-solving, bug fixing, and providing architectural solutions are some of my core qualities, which I am constantly working to improve.</p>
                <p>During my leisure time, I enjoy indulging in various hobbies such as clicking pictures, studying astronomy and aircrafts, practicing canvas painting, playing guitar, and swimming occasionally. These activities provide me with a great sense of satisfaction and fulfillment, allowing me to unwind and explore my creative side.</p>
                <a href="/skill" className={styles.link}><p className="text-lg">Checkout my skillset for more details.</p></a>
            </div>
            <div>
                <Image className="m-auto img-about" src={'/images/about.png'} alt={'My Picture is not available because of your internet'} width={300} height={600}></Image>
            </div>
        </div>
    )
}
export default About;
