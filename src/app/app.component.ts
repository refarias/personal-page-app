import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'personal-page-app';
  dockerImg : String = "data:image/png;base64,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"
  posts : Array<any> = [
    {
        "id": "643ad326467eb22e06f33820",
        "path": "home",
        "coverImage": this.dockerImg,
        "title": "Welcome to Renan's blog",
        "shortDescription" : "Welcome to my blog, here I write about technology.",
        "content": "Welcome to my blog, here I write about technology.",
        "date": null,
        "visible": true,
        "language": "english"
    },
    {
        "id": "643ad40ea60f2449f20158e7",
        "path": "home",
        "coverImage": this.dockerImg,
        "title": "Welcome to Renan's blog",
        "shortDescription" : "Welcome to my blog, here I write about technology.",
        "content": "Welcome to my blog, here I write about technology.",
        "date": "2023-04-15T17:42:54.081",
        "visible": true,
        "language": "english"
    },
    {
        "id": "643ed26611fb13788a7e7a18",
        "path": "home",
        "coverImage": this.dockerImg,
        "title": "Welcome to Renan's blog",
        "shortDescription" : "Welcome to my blog, here I write about technology.",
        "content": "Welcome to my blog, here I write about technology.",
        "date": "2023-04-18T18:24:54.698",
        "visible": true,
        "language": "english"
    },
    {
        "id": "643ed27111fb13788a7e7a19",
        "path": "home",
        "coverImage": this.dockerImg,
        "title": "Welcome to Renan's blog",
        "shortDescription" : "Welcome to my blog, here I write about technology.",
        "content": "Welcome to my blog, here I write about technology.",
        "date": "2023-04-18T18:25:05.254",
        "visible": true,
        "language": "english"
    },
    {
        "id": "643ad326467eb22e06f33820",
        "path": "home",
        "coverImage": this.dockerImg,
        "title": "Welcome to Renan's blog",
        "shortDescription" : "Welcome to my blog, here I write about technology.",
        "content": "Welcome to my blog, here I write about technology.",
        "date": null,
        "visible": true,
        "language": "english"
    },
    {
        "id": "643ad40ea60f2449f20158e7",
        "path": "home",
        "coverImage": this.dockerImg,
        "title": "Welcome to Renan's blog",
        "shortDescription" : "Welcome to my blog, here I write about technology.",
        "content": "Welcome to my blog, here I write about technology.",
        "date": "2023-04-15T17:42:54.081",
        "visible": true,
        "language": "english"
    }
]

}
