import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  
  constructor(private router: Router, private postService: PostService) {}

  ngOnInit(): void {
    this.getAllPost();
    
  } 
  
  getAllPost(){
    this.postService.getAllPost().subscribe({
      next: (response: any) => {
        this.posts = response;
        console.log(response);
      },
      error: (error: any) => console.log(error),
    });
  }
  
  
}

