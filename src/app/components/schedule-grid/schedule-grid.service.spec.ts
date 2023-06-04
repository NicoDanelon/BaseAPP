import { TestBed } from '@angular/core/testing';

import { ScheduleGridService } from './schedule-grid.service';

describe('ScheduleGridService', () => {
  let service: ScheduleGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
