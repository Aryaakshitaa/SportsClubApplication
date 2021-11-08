import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-player',
  templateUrl: './show-player.component.html',
  styleUrls: ['./show-player.component.css']
})
export class ShowPlayerComponent implements OnInit {

  constructor(private service:SharedService) { }

  PlayerList : any=[];
  ModalTitle: string | undefined;
  ActivateAddEditPlayerComp : boolean=false;
  ply:any;

  ngOnInit(): void {
    this.refreshPlayerList();
  }

  addClick(){
    this.ply={
      PlayerId:0,
      PlayerName:"",
      Sport:"",
      DateOfJoining:"",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle="Add Player";
    this.ActivateAddEditPlayerComp=true;
  }

  deleteClick(item:any){
    if(confirm('Delete this Player Record?')){
      this.service.deletePlayer(item.PlayerId).subscribe(data=>{
        alert(data.toString());
        this.refreshPlayerList();
      })
    }
  }

  editClick(item: any){
    console.log(item);
    this.ply=item;
    this.ModalTitle="Edit Player";
    this.ActivateAddEditPlayerComp=true;
  }
  
  refreshPlayerList(){
    this.service.getPlayerList().subscribe(data=>{
      this.PlayerList=data;
    })
  }

  closeClick(){
    this.ActivateAddEditPlayerComp=false;
    this.refreshPlayerList();
  }
}
