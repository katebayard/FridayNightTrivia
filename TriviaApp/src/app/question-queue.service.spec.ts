import { TestBed } from '@angular/core/testing';

import { QuestionQueueService } from './question-queue.service';

describe('QuestionQueueService', () => {
  let service: QuestionQueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionQueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
