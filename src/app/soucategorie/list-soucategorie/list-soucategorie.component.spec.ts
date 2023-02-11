import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSoucategorieComponent } from './list-soucategorie.component';

describe('ListSoucategorieComponent', () => {
  let component: ListSoucategorieComponent;
  let fixture: ComponentFixture<ListSoucategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSoucategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSoucategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
