import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Context } from '../../utils';


async function signup(parent, args, ctx: Context, info) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await ctx.db.createUser({...args, password });

  return {
    token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
    user,
  }
}


async function login(parent, { email, password }, ctx: Context, info) {
  const user = await ctx.db.user({ email });
  if (!user) {
    throw new Error(`No such user found for email: ${email}`);
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  }

  return {
    token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
    user,
  }
}


export const auth = {
  signup,
  login,
};
