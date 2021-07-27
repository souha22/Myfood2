import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Activite} from '../../model/activite';
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import { faTrash} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {
  @Input() aChild: Activite;
  @Output() likeEvent = new EventEmitter<Activite>();
  @Output() unlikeEvent = new EventEmitter<Activite>();
  @Output() deleteEvent = new EventEmitter<Activite>();
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrash = faTrash;

   constructor() { }

  ngOnInit(): void {
  }
  delete(){
    this.deleteEvent.emit(this.aChild);
  }
  like(){
    this.likeEvent.emit(this.aChild);
  }
  unlike(){
    this.unlikeEvent.emit(this.aChild);
  }

}
