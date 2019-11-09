import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  link = 'assets/images/';
  title = 'Ticket Incident';
  items = ['Home','Message','Ticket','Contact'];
  login ='';
  password = '';



  //functions
  onClickedContact(){
    alert(this.login);
   
  }

  onClickedHome(){
    alert('Home');
  }

  onSubmit(event: any){
  console.log(this.login);
  return this.login;
}

control(){
  if(this.login.length > 6) {
    alert('mot de pass surperieur a 6');
    
  }
}
  

}

