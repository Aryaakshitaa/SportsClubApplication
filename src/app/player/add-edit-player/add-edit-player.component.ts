import { Component, OnInit, Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-player',
  templateUrl: './add-edit-player.component.html',
  styleUrls: ['./add-edit-player.component.css']
})
export class AddEditPlayerComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() ply:any;
  PlayerId:String | undefined;
  PlayerName:string | undefined;
  Sport:string | undefined;
  DateOfJoining:string | undefined;
  PhotoFileName:string | undefined;
  PhotoFilePath:String | undefined;

  SportsList:any=[]

  ngOnInit(): void {
    this.loadSportsList();
  }

  loadSportsList(){
    this.service.getAllSportNames().subscribe((data:any)=>{
      this.SportsList=data;
      this.PlayerId=this.ply.PlayerId;
      this.PlayerName=this.ply.PlayerName;
      this.Sport=this.ply.Sport;
      this.DateOfJoining=this.ply.DateOfJoining;
      this.PhotoFileName=this.ply.PhotoFileName;
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }
  addPlayer(){
    var val = {PlayerId:this.PlayerId, PlayerName:this.PlayerName,
      Sport:this.Sport, DateOfJoining:this.DateOfJoining,
      PhotoFileName:this.PhotoFileName};
    this.service.addPlayer(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updatePlayer(){
    var val = {PlayerId:this.PlayerId, PlayerName:this.PlayerName,
      Sport:this.Sport, DateOfJoining:this.DateOfJoining,
      PhotoFileName:this.PhotoFileName};
    this.service.updatePlayer(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  uploadPhoto(event: any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadFile',file,file.name);
    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }
}
