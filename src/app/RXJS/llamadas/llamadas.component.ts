import { Component, OnInit } from '@angular/core';
import { catchError, filter, forkJoin, map, mergeAll, mergeMap, of, pluck, take, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-llamadas',
  templateUrl: './llamadas.component.html',
  styleUrls: ['./llamadas.component.scss']
})
export class LlamadasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /*
  when all observables complete, provide the last
  emitted value from each as dictionary
*/
    forkJoin(
      // as of RxJS 6.5+ we can use a dictionary of sources
      [
         ajax.getJSON('https://api.github.com/users/google'),
         ajax.getJSON('https://api.github.com/users/microsoft'),
      ]
    ).pipe(
    
      catchError((err:any) => of ( "err") ),
     
    )
      // { google: object, microsoft: object, users: array }
      .subscribe(console.log);
  }

}
