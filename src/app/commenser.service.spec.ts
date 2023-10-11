import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpTestingController ,HttpClientTestingModule} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';


import { CommenserService } from './commenser.service';
import{StuDetails} from './stu-details'

describe('CommenserService', () => {
  let service: CommenserService;
  let httpTestingController:HttpTestingController;
  let httpClient:HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[CommenserService]
    });
    httpTestingController=TestBed.inject(HttpTestingController);
    httpClient=TestBed.inject(HttpClient);
    service = TestBed.inject(CommenserService);
  });
  afterEach(()=>{
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

//   it('get data should return expected data',()=>{

//      const expectedData:StuDetails[]=[
//         {
//           name:'xxx',
//           address:'yghhjjh',
//           age:'21',
//           phoneNum:'767678',
         
//         }
// ];
//  service.gettingData().subscribe(data=>{
//   expect(data).toEqual(expectedData);
//  });
//  const testRequest=httpTestingController.expectOne('http://localhost:3000/stuDetails');
// testRequest.flush(expectedData);
// });

it('get Data should use GET to retrieve data',()=>{
  service.gettingData().subscribe();
  const testRequest=httpTestingController.expectOne('http://localhost:3000/stuDetails');
  expect(testRequest.request.method).toEqual('GET');
})

});
