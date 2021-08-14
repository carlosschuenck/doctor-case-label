import { Test, TestingModule } from '@nestjs/testing';
import { ElectronicHealthRecordController } from './electronic-health-record.controller';

describe('ElectronicHealthRecordController', () => {
  let controller: ElectronicHealthRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElectronicHealthRecordController],
    }).compile();

    controller = module.get<ElectronicHealthRecordController>(ElectronicHealthRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
