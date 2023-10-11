import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommenserService } from 'src/app/commenser.service';
import { of } from 'rxjs';

import { HelpComponent } from './help.component';

describe('HelpComponent', () => {
  let component: HelpComponent;
  let fixture: ComponentFixture<HelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpComponent ],
      imports:[HttpClientTestingModule],
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all data from gettingData',()=>{
    const service=fixture.debugElement.injector.get(CommenserService);
    spyOn(service,'gettingData').and.returnValue(of([]));
    component.ngOnInit();
    expect(component.stuData).toEqual([]);
  })
});
