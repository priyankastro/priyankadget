import { GetStaticProps } from "next";
import { getPublicUrlFetch } from "../lib/interceptor";
export const getStaticProps: GetStaticProps = async () => {
    const response = await getPublicUrlFetch('about');
    return {
        props: {
            data: response.data.attributes,
        },
    };
}

const Connect = ({ data }: any) => {
    return (
        <>
            <h2 className='font-bold text-3xl py-3'>Connect Me</h2>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"></input>
        </>
    )
}
export default Connect;