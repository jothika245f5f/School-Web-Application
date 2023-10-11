import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommenserService } from 'src/app/commenser.service';
import { StudentDetails } from 'src/app/stu-details';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
})
export class HelpComponent implements AfterViewInit, OnInit {
  stuData: StudentDetails[] = [];
  dataLength : number;
  
  coloums = [
    'Name',
    'Age',
    'Sex',
    'Nationality',
    'Address',
    'Delete',
    'Update',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public dataSource = new MatTableDataSource<StudentDetails>();
  currentUser: any = [];
  setof: any = [];
  constructor(private commonservice: CommenserService, private router: Router) {
    commonservice.onChangeHeader();
  }
  ngOnInit(): void {}

  

  ngAfterViewInit(): void {
    this.currentUser = this.commonservice.getName();

    this.commonservice.gettingData().subscribe((data: any) => {
      // var filter_array = data.filter((x:any) => x.name == this.currentUser);
      // console.log(filter_array,"filter")
      // this.setof=filter_array;
      this.dataSource.data = data;
      this.dataLength= data.length;
      this.dataSource.paginator = this.paginator;
    });
  }
  deleteStudent(id: any) {
    this.commonservice.deleteData(id).subscribe((data: any) => {
      console.log("Data deleted successfully");
      this.ngAfterViewInit();
    });
  }
  updateStudent(id: any) {
    this.router.navigate(['/update/', id]);
  }

  filterData(search:any){
    console.log(search);
   let serchItem= this.dataSource.data.filter(element => (
    (element.name).toLowerCase()).includes(search.toLowerCase()) 
   );
   console.log(serchItem);
   this.dataSource.data= serchItem;

  }
  cancel(search:any){
    search = '';
    this.ngAfterViewInit();
  }
}
