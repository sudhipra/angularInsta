import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { AuthService } from 'src/app/service/auth.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  initialPosts!: Post[];
  id: number = 0;
  post: Post = {
    id: 0,
    userId: 0,
    img: '',
    location: '',
    description: '',
  };
  constructor(
    private postService: PostService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.post.userId = Number(this.authService.getuserId());
  }

  addPost() {
    console.log(this.post);
    this.postService.addPost(this.post).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
