import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTennisAssociationComponent } from './table-tennis-association.component';

describe('TableTennisAssociationComponent', () => {
  let component: TableTennisAssociationComponent;
  let fixture: ComponentFixture<TableTennisAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTennisAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTennisAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
