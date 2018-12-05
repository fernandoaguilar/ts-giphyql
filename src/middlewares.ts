import { isAuthenticated } from './utils';


const permissions = {
    Query: {
        me: isAuthenticated,
        userGifs: isAuthenticated
    },
    Mutation: {
        saveGif: isAuthenticated        
    }
};


export const middlewares = [
    permissions
];
