import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  posts: Post[] = [];

  constructor(public postService: PostService) {}

  ngOnInit(): void {
    // this.postService.getAll().subscribe((data: Post[]) => {
    //   this.posts = data;
    //   console.log(this.posts);
    // });
    const data = [
      {
        userId: 1,
        id: 1,
        companyName: '',
        jobTitle: '',
        jobDescription: '',
      },
    ];

    console.log('pravin--', JSON.parse(localStorage.getItem('jobs')));
    this.posts = JSON.parse(localStorage.getItem('jobs'));
  }

  deletePost(id) {
    this.postService.delete(id).subscribe((res) => {
      this.posts = this.posts.filter((item) => item.id !== id);
      console.log('Post deleted successfully!');
    });
  }
}
