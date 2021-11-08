import { Component, OnInit, Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-sport',
  templateUrl: './add-edit-sport.component.html',
  styleUrls: ['./add-edit-sport.component.css']
})
export class AddEditSportComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() sp:any;
  SportId:String | undefined;
  SportName:string | undefined;

  ngOnInit(): void {
    this.SportId=this.sp.SportId;
    this.SportName=this.sp.SportName;
  }

  addSports(){
    var val = {SportId:this.SportId, SportName:this.SportName};
    this.service.addSport(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateSports(){
    var val = {SportId:this.SportId, SportName:this.SportName};
    this.service.updateSport(val).subscribe(res=>{
      alert(res.toString());
    });
  }
}
