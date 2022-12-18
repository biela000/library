import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretPasswordOutputComponent } from './secret-password-output.component';

describe('SecretPasswordOutputComponent', () => {
  let component: SecretPasswordOutputComponent;
  let fixture: ComponentFixture<SecretPasswordOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretPasswordOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretPasswordOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
