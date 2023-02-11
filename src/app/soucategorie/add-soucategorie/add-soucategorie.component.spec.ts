import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSoucategorieComponent } from './add-soucategorie.component';

describe('AddSoucategorieComponent', () => {
  let component: AddSoucategorieComponent;
  let fixture: ComponentFixture<AddSoucategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSoucategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSoucategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
