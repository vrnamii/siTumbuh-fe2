import { ENDPOINT } from "../config";
import axios from 'axios';

const ENDPOINT_PATH = {
    ARTICLES: `${ENDPOINT}/articles`,
}

export async function getArticle(){
    try{
        const fetch = await axios.get(ENDPOINT_PATH.ARTICLES)
        return fetch.data
    } catch(error){
        throw new Error(error.message);
    }
}