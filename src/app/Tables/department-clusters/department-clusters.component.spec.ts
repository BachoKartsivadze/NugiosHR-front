import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentClustersComponent } from './department-clusters.component';

describe('DepartmentClustersComponent', () => {
  let component: DepartmentClustersComponent;
  let fixture: ComponentFixture<DepartmentClustersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartmentClustersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentClustersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
