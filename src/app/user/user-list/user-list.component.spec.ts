import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { provideRouter, Router } from '@angular/router';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let router:Router;

  beforeEach(async () => {
    const routerspy=jasmine.createSpyObj('Router',['navigate'])
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      providers:[
        {provide:Router,useValue:routerspy},
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    router=TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show the details',()=>{
    const userId=1;
    component.viewDetails(userId);
    expect(router.navigate).toHaveBeenCalledWith(['/user',userId]);
  })
});
