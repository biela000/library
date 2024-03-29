import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretPasswordComponent } from './secret-password.component';

describe('SecretPasswordComponent', () => {
  let component: SecretPasswordComponent;
  let fixture: ComponentFixture<SecretPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
