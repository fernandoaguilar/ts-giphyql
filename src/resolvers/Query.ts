import { getUserId, Context } from '../utils';
import { giphy } from '../giphy';
import { User } from '../generated/prisma-client';


async function trending() {
    return await giphy.getTrendingGifs();
}


async function searchGifs(parent, { searchTerm }, ctx: Context, info) {
    return await giphy.searchGifs(searchTerm);
}


async function userGifs(parent, args, ctx: Context, info) {
    let user: User = ctx.user;
    return await ctx.db.user({id: user.id}).gifs();
}


async function storedGifs(parent, args, ctx: Context, info) {
    return ctx.db.gifs({});
}


function me(parent, args, ctx: Context, info) {
    return ctx.user;
}


export const Query = {
    me,
    trending, 
    searchGifs,
    storedGifs,
    userGifs
};
