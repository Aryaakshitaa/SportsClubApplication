import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { AddEditPlayerComponent } from 'src/app/player/add-edit-player/add-edit-player.component';

@Component({
  selector: 'app-show-sport',
  templateUrl: './show-sport.component.html',
  styleUrls: ['./show-sport.component.css']
})
export class ShowSportComponent implements OnInit {
  constructor(private service:SharedService) { }

  SportsList : any=[];
  ModalTitle: string | undefined;
  ActivateAddEditSportComp : boolean=false;
  sp:any;
  SportIdFilter : string="";
  SportNameFilter : string="";
  SportNameWithoutFilter:any=[];


  ngOnInit(): void {
    this.refreshSportsList();
  }

  addClick(){
    this.sp={
      SportId:0,
      SportName:""
    }
    this.ModalTitle="Add Sports";
    this.ActivateAddEditSportComp=true;
  }

  deleteClick(item:any){
    if(confirm('Delete this Sport Record?')){
      this.service.deleteSport(item.SportId).subscribe(data=>{
        alert(data.toString());
        this.refreshSportsList();
      })
    }
  }

  editClick(item: any){
    this.sp=item;
    this.ModalTitle="Edit Sports";
    this.ActivateAddEditSportComp=true;
  }
  
  refreshSportsList(){
    this.service.getSportList().subscribe(data=>{
      this.SportsList=data;
      this.SportNameWithoutFilter=data;
    })
  }

  FilterFun(){
    var SportIdFilter = this.SportIdFilter;
    var SportNameFilter = this.SportNameFilter;
    this.SportsList = this.SportNameWithoutFilter.filter(function (el : any){
      return el.SportId.toString().toLowerCase().includes(
        SportIdFilter.toString().trim().toLocaleLowerCase()
      )&&
      el.SportName.toString().toLowerCase().includes(
        SportNameFilter.toString().trim().toLowerCase()
      )
    }); 
  }

    sortResult(prop: any, asc: any){
      this.SportsList=this.SportNameWithoutFilter.sort(function(x : any,y : any){
        if(asc){
          return (x[prop]>y[prop])?1 : ((x[prop]<y[prop]) ?-1 : 0);
        }
        else{
          return (y[prop]>x[prop])?1 : ((y[prop]<x[prop]) ?-1 : 0);
        }
      })
    }

  closeClick(){
    this.ActivateAddEditSportComp=false;
    this.refreshSportsList();
  }

}
