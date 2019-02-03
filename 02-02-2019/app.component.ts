import { Component } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
import { users } from './users';
import { TittoService } from './titto.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'docere';
  titto = 'Titto k varghese';

  user:any;
  click:boolean=true;




  users = new users(1,"titto","",1);
  error ='';
  sucess='';
  isRegistered=false;


          constructor(private applyService: TittoService)
          {
          this.user= 
          {
            name : this.titto,
            job:'Software Devloper',
            phone:['1','2','3']
          }
          };

          togo()
          {
            this.click=!this.click;
          }

          



          signup(f: NgForm){
            this.error='';
            this.sucess = '';

this.applyService.store(this.users).subscribe(data=>{
this.sucess="Registered";
this.isRegistered=true;

f.reset();
},
(err) => {this.error=err;
this.isRegistered=false;})







          }

}
