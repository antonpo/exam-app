import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningItemComponent } from './listening-item.component';

describe('ListeningItemComponent', () => {
  let component: ListeningItemComponent;
  let fixture: ComponentFixture<ListeningItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeningItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
