import { GetStaticProps } from "next";
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
        <>
            <h1>About</h1>
        </>
    )
}
export default About;
