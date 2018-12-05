import axios from "axios";


const apiKey = process.env.GIPHY_KEY;
const giphyUrl = "https://api.giphy.com";


async function getTrendingGifs(): Promise<any> {
    const trendingUrl = `${giphyUrl}/v1/gifs/trending?api_key=${apiKey}&limit=20`;
    let response = await axios.get(trendingUrl);
    return massageData(response.data);
}


async function searchGifs(searchTerm: string): Promise<any> {
    const searchUrl = `${giphyUrl}/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=20`;
    let response = await axios.get(searchUrl);
    return massageData(response.data);
}


async function getGifWithId(gifID: string): Promise<any> {
    const url = `${giphyUrl}/v1/gifs/${gifID}?api_key=${apiKey}`;
    let response = await axios.get(url);
    return massageData(response.data)[0];
}


function massageData(data) {
    const createGif = (result) => {
        let gif = {
            id: result.id,
            url: result.images.original.url,
            rating: result.rating,
            trendingDatetime: result.trending_datetime,
            title: result.title
        };
        return gif;
    };

    let gifs = [];
    let isArray = data.data instanceof Array;
    if (!isArray){
        let gif = createGif(data.data);
        return [gif];        
    }
    
    for (let result of data.data) {
        let gif = createGif(result);
        gifs.push(gif);
    }
    return gifs;
}

export const giphy = {
    getTrendingGifs,
    searchGifs,
    getGifWithId
};