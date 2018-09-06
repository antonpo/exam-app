import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningItemPartComponent } from './listening-item-part.component';

describe('ListeningItemPartComponent', () => {
  let component: ListeningItemPartComponent;
  let fixture: ComponentFixture<ListeningItemPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeningItemPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningItemPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
