import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadShopComponent } from './read-shop.component';

describe('ReadShopComponent', () => {
  let component: ReadShopComponent;
  let fixture: ComponentFixture<ReadShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
