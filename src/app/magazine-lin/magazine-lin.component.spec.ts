import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineLinComponent } from './magazine-lin.component';

describe('MagazineLinComponent', () => {
  let component: MagazineLinComponent;
  let fixture: ComponentFixture<MagazineLinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazineLinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagazineLinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
