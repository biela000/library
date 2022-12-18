import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretPasswordDateComponent } from './secret-password-date.component';

describe('SecretPasswordDateComponent', () => {
  let component: SecretPasswordDateComponent;
  let fixture: ComponentFixture<SecretPasswordDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretPasswordDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretPasswordDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
