import { TestBed } from '@angular/core/testing';
import { ToastrService, ToastrModule, ToastPackage, ToastRef } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ErrorHandlerService } from './error-handler.service';
import { NotificationService } from '../../services/notification-service/notification.service';


describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;

  beforeEach(() => {
    const routerStub = {
      navigate: jasmine.createSpy('navigate'),
    };
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, ToastrModule.forRoot(), RouterTestingModule],
      providers: [ErrorHandlerService, NotificationService, { provide: Router, useValue: routerStub }]
    });
    service = TestBed.inject(ErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
