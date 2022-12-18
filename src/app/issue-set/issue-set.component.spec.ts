import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueSetComponent } from './issue-set.component';

describe('IssueSetComponent', () => {
  let component: IssueSetComponent;
  let fixture: ComponentFixture<IssueSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
