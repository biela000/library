import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretPasswordInputComponent } from './secret-password-input.component';

describe('SecretPasswordInputComponent', () => {
  let component: SecretPasswordInputComponent;
  let fixture: ComponentFixture<SecretPasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretPasswordInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
