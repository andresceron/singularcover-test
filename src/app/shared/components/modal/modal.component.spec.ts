import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from '@components/modal/modal.component';
import { ModalService } from './shared/modal.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        ModalService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
