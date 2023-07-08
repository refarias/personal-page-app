import { Component, OnInit} from '@angular/core';
import { PageService } from './page.service';
import { FirstPage } from './firstPage';
import { Profile } from './profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  
  page : FirstPage = {
    profile : new Profile("","","","",null),
    menu : {items:[]},
    posts: []
  };

  constructor(private pageService: PageService){}
  
  ngOnInit(): void {
      this.pageService.getFirstPage().subscribe((data : FirstPage) => { this.page = data;})
  }

}
