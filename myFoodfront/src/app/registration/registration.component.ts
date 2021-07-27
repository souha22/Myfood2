import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../shared/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User;
  st: string;
  id: string;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.user = new  User();
    this.id = this.route.snapshot.params.id;
    this.userService.getUserById(this.id).subscribe(data => {
      console.log(data);
      this.user = data; },
      error => console.log(error));
    }
  submit( {value, valid}: {value: User, valid: boolean} ){
    if (this.id == null)
    {console.log(this.user);
     this.user = value;
     this.st = this.user.photo.replace('C:\\fakepath\\', '');
     console.log(this.st);
     this.user.photo = this.user.photo.replace('C:\\fakepath\\', '');
     this.userService.addUser(this.user).subscribe(); }
    else {this.userService.updateUser(this.id, this.user).subscribe(); }


  }

  updateUser(){
    console.log(this.id);
    console.log(this.user.nom);
    this.userService.updateUser(this.id, this.user).subscribe();

  }

}
