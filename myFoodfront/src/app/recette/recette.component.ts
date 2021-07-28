import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recette} from '../../model/recette';
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import { faTrash} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {
  @Input() aChild: Recette;
  @Output() likeEvent = new EventEmitter<Recette>();
  @Output() unlikeEvent = new EventEmitter<Recette>();
  @Output() deleteEvent = new EventEmitter<Recette>();
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
