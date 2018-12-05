import { Context } from '../../utils';
import { giphy } from '../../giphy';


async function saveGif(parent, {gifID}, ctx: Context, info) {
    const user = ctx.user;
    let gif = await ctx.db.gif({ giphyId: gifID });
    if(gif){
        let updatedUser = await ctx.db.updateUser({
            data: {
                gifs: { connect: {id: gif.id}}
            },
            where: { id: user.id }
        });
        return gif;
    }

    gif = await giphy.getGifWithId(gifID);    
    let data = {
        giphyId: gif.id,        
        url: gif.url,
        rating: gif.rating,
        trendingDatetime: gif.trendingDatetime,
        title: gif.title,            
        likedBy: {
            connect: {id: user.id}
        }
    };
    let savedGif = await ctx.db.createGif(data);
    return savedGif;
}


export const gif = {
    saveGif
};
