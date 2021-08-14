import { Test, TestingModule } from '@nestjs/testing';
import { ElectronicHealthRecordService } from './electronic-health-record.service';

describe('ElectronicHealthRecordService', () => {
  let service: ElectronicHealthRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElectronicHealthRecordService],
    }).compile();

    service = module.get<ElectronicHealthRecordService>(ElectronicHealthRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
