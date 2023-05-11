import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvComponentsLibraryComponent } from './pv-components-library.component';

describe('PvComponentsLibraryComponent', () => {
  let component: PvComponentsLibraryComponent;
  let fixture: ComponentFixture<PvComponentsLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvComponentsLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvComponentsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
