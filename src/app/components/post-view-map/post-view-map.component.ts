import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-view-map',
  templateUrl: './post-view-map.component.html',
  styleUrls: ['./post-view-map.component.css']
})
export class PostViewMapComponent implements OnInit {

  @Input() posts!: Post;
  @Output() closeDialogEmitter = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    
  }

  close(): void {
    this.closeDialogEmitter.emit();
  }

}
