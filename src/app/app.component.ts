import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userArray: User[] = [
    {id: 1, name: "Patricio", password: "abc123", 
      phone: {
        number:99988776,
        cityCode:2,
        countryCode:56
      }}
  ] 

  selectedUser: User = new User()

  openForEdit(user: User){
    this.selectedUser = user
  }

  addOrEdit(){ 
    if(this.selectedUser.id === 0){
      this.selectedUser.id = this.userArray.length + 1
      this.userArray.push(this.selectedUser)
    }
    this.selectedUser = new User()
  }

  delete(){
    if(confirm("Are you sure you want to delete it?")){
      this.userArray = this.userArray.filter(x => x != this.selectedUser)
      this.selectedUser = new User() 
    }

  }

}
