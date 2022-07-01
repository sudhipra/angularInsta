import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  initialPost: Post[] = [
    {
      id: 1,
      img: 'https://media.istockphoto.com/photos/gamer-work-space-concept-top-view-a-gaming-gear-mouse-keyboard-in-picture-id1170073824?k=20&m=1170073824&s=612x612&w=0&h=lQYUGw9IIqI9bsTrIrS8xCyId2PmmNYPSwB7UNEzssI=',
      description: 'games',
      location: 'games',
      userId: 1,
    },

    {
      id: 2,
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190430-make-friends-app-1556655645.jpg?crop=0.502xw:1.00xh;0.235xw,0&resize=640:*',
      description: 'Friends forever',
      location: 'games',
      userId: 1,
    },

    {
      id: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvzxcfiReo91hvOEPT1BMhMZqLA3Aq7lcQo2j5lbIXgOdlwZpQP2JJc0DprxIpsDrpi6A&usqp=CAU',
      description: 'Out in the beach',
      location: 'games',
      userId: 1,
    },
  ];

  getAllPost() {
    return this.http.get('http://localhost:9092/api/post/get/all');
  }

  addPost(post: Post) {
    return this.http.post('http://localhost:9092/api/post/add', post);
  }
  delete(id: number) {
    return this.http.delete('http://localhost:9092/api/post/delete/${id}');
  }
}
