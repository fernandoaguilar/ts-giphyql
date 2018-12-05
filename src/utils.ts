import * as jwt from 'jsonwebtoken';
import { Prisma } from './generated/prisma-client';


export interface Context {
  db: Prisma
  request: any
  user: any
}


export async function isAuthenticated(resolve, parent, args, ctx, info) {
  const Authorization = ctx.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string };
    ctx.user = await ctx.db.user({id: userId});
    return resolve();
  }

  throw new AuthError();
}


export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}
