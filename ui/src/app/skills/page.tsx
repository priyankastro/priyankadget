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

const Skills = ({ data }: any) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <h1 className='heading-xl mb-5 section-heading'>Skills</h1>
                
            </div>
        </div>
    )
}
export default Skills;
