import { TestBed } from '@angular/core/testing';
import { MainServiceService } from './main-service.service';
import { ApiService } from '../../lib/core/coreservice-index';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('MainServiceService', () => {
  let service: MainServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,  HttpClientTestingModule
      ],
      providers: [MainServiceService, ApiService]
    });
    service = TestBed.inject(MainServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
