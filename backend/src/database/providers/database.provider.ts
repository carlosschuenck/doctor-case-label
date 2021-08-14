import * as mongoose from 'mongoose';

export const DATABASE_PROVIDE = 'DATABASE_CONNECTION';

export const databaseProvider = [
  {
    provide: DATABASE_PROVIDE,
    useFactory: (): Promise<typeof mongoose> => {
      mongoose.set('useFindAndModify', false);
      /**
       Remove this comment to use docker database
       return mongoose.connect('mongodb://admin:admin@localhost:27099/ehrdb?retryWrites=true&w=majority');}
       */
      return mongoose.connect('mongodb+srv://admin:admin@electronichealthrecord.yyvyn.mongodb.net/ElectronicHealthRecord?retryWrites=true&w=majority');}
  },
];