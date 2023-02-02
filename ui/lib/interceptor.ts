import axios from "axios";
const apiHost: any = process.env.NEXT_PUBLIC_API_URL
export const getPublicUrlFetch = async (endpoint: any) => {
    const response = await axios.get(apiHost + '/' + endpoint, {
        headers: {
            Accept: "application/json",
        },
    });
    return response.data;
}