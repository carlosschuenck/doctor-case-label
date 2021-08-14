import { Connection } from 'mongoose';
import { UserSchema } from './../schemas/user.schema';
import { DATABASE_PROVIDE } from './database.provider';

export const USER_MODEL = 'USER_MODEL';
export const userProvider = [
  {
    provide: USER_MODEL,
    useFactory: (connection: Connection) => connection.model('User', UserSchema),
    inject: [ DATABASE_PROVIDE ],
  },
];