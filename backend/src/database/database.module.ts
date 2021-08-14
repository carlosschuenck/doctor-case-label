import { databaseProvider } from './providers/database.provider';
import { Module } from '@nestjs/common';
import { electronicHealthRecordProvider } from './providers/electronic-health-record.provider';
import { userProvider } from './providers/user.provider';


@Module({
  providers: [
    ...databaseProvider, 
    ...electronicHealthRecordProvider, 
    ...userProvider],
  exports: [
    ...databaseProvider, 
    ...electronicHealthRecordProvider, 
    ...userProvider],
})
export class DatabaseModule {}
