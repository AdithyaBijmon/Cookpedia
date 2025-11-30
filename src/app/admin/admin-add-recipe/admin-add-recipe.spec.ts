import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddRecipe } from './admin-add-recipe';

describe('AdminAddRecipe', () => {
  let component: AdminAddRecipe;
  let fixture: ComponentFixture<AdminAddRecipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAddRecipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddRecipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
