import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../../lib/core/coreservice-index';
import { MainServiceService } from '../services/main-service.service';
import { InfoPageComponent } from './info-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('InfoPageComponent', () => {
  let component: InfoPageComponent;
  let fixture: ComponentFixture<InfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ InfoPageComponent ],
      providers: [ MainServiceService, ApiService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
