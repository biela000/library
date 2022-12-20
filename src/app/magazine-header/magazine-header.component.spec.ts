import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineHeaderComponent } from './magazine-header.component';

describe('MagazineHeaderComponent', () => {
  let component: MagazineHeaderComponent;
  let fixture: ComponentFixture<MagazineHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazineHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagazineHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
