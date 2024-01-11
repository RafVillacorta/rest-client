import { Component } from '@angular/core';
import { DataService, Book } from '../data.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

  constructor(private dataService: DataService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  book!:Book

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let isbn = params.get('isbn')!
      this.dataService.getBook(isbn).subscribe(book => {
        this.book = book
      })
    })
  }

  updateBook() {
    this.dataService.saveBook(this.book).subscribe(_ => {
      //Go back to the home page
      this.router.navigate(['/'])
    })
  }
  
}
