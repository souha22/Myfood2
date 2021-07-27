import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../../model/user';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
listUsers: User[];
  faSearchPlus = faSearchPlus;
  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data: User[]) => this.listUsers = data);
  }
  deleteUser(u: User){

    let i = this.listUsers.indexOf(u);
    this.userService.deleteUser(u.id).subscribe(() => this.listUsers.splice(i, 1));
  }

}
