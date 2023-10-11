import { Injectable, setTestabilityGetter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { StudentDetails } from './stu-details';




@Injectable({
  providedIn: 'root'
})
export class CommenserService {
 name :any;
 age:any;
 header_Check:boolean=true;
  baseUrl:any=environment.baseURL;
  signUrl:any="http://localhost:8000/singIn";
  constructor(private http:HttpClient) { }
// getData(){
//   return this.http.get<any>('https://httpbin.org/get').pipe(map((res:Response)=>res.body));

// }
// postData(data:any){
//   return this.http.post('https://httpbin.org/post',data);
// }

gettingData(){
  return this.http.get(this.baseUrl);
}
postingData(data:any){
  return this.http.post(this.baseUrl,data);
}
deleteData(id:any){
  return this.http.delete(this.baseUrl+'/'+id)
}
getUpdateData(id:number){
  const url= `${this.baseUrl}/${id}`;
  return this.http.get<StudentDetails>(url);
}
updateData(id:any,data:any){
  return this.http.put<StudentDetails>(this.baseUrl+'/'+id,data);
}
postSignData(data:any){
  return this.http.post("http://localhost:8000/singIn",data);
}
gettingSignData(){
  return this.http.get(this.signUrl);
}
setName(name:any){
  this.name=name;
}
getName(){
  return this.name;
}

onChangeHeader(){
   this.header_Check=true;
}

}

