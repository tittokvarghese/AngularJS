import { Component } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

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

          constructor()
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



}
