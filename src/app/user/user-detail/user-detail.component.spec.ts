import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { provideRouter } from '@angular/router';
import { Location } from '@angular/common';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let location:Location

  beforeEach(async () => {
    const locationspy=jasmine.createSpyObj('Location',['back'])
    await TestBed.configureTestingModule({
      declarations: [ UserDetailComponent ],
      providers:[
        { provide: Location,useValue:locationspy},
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    location=TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should navigate back',()=>{
    component.goBack();
    expect(location.back).toHaveBeenCalled();
  })
});
