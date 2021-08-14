import * as mongoose from 'mongoose';

export const DATABASE_PROVIDE = 'DATABASE_CONNECTION';

export const databaseProvider = [
  {
    provide: DATABASE_PROVIDE,
    useFactory: (): Promise<typeof mongoose> => {
      mongoose.set('useFindAndModify', false);
      return mongoose.connect('mongodb+srv://admin:admin@electronichealthrecord.yyvyn.mongodb.net/ElectronicHealthRecord?retryWrites=true&w=majority');}
  },
];