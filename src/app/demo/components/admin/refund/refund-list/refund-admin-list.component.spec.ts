import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundAdminListComponent } from './refund-admin-list.component';

describe('RefundList', () => {
  let component: RefundAdminListComponent;
  let fixture: ComponentFixture<RefundAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RefundAdminListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefundAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
