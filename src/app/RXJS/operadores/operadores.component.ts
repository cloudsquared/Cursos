import { Component, Input, OnInit } from '@angular/core';
import { filter, from, fromEvent, map, pluck, range, reduce, scan, switchMap, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
interface IPersonaje {
  tipo: Categoria,
  nombre: string,
  nivel: number
}
type Categoria = "heroe" | "villano";

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.scss']
})
export class OperadoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const personajes: Array<IPersonaje> = [
      {
        nombre: "Batman",
        tipo: "heroe",
        nivel: 5
      },
      {
        nombre: "Robin",
        tipo: "heroe",
        nivel: 3
      },
      {
        nombre: "Joker",
        tipo: "villano",
        nivel: 5
      }
    ]

    for (let index = 0; index < personajes.length; index++) {
      const element = personajes[index];
      console.log(element);

    }

    for (let element of personajes) {
      console.log(element);
    }

    //console.log(personajes);
    return;


    //map 
    range(1, 10).pipe(
      map<number, string>(val => (val * 10).toString())
    ).subscribe(console.log)

    //filter
    range(1, 10).pipe(
      filter((val, i) => { return val % 3 === 0 })
    ).subscribe(console.log)

    //map
    const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
    keyup$.pipe(map(item => item.code)).subscribe(val => console.log('map', val))

    //pluck
    const keyup2$ = fromEvent<KeyboardEvent>(document, 'keyup');
    keyup2$.pipe(pluck('code')).subscribe(val => console.log('pluck', val))




    //from + filter + map
    from(personajes).pipe(
      filter(p => p.tipo == 'villano'),
      map((val => val.nombre))
    ).subscribe(console.log);

    //from + filter + map + tap
    from(personajes).pipe(
      tap(val => { console.log("tap", val) }),
      filter(p => p.tipo == 'villano'),
      map((val => val.nombre))
    ).subscribe(console.log);

    //reduce 
    const niveles: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
    const reducer = (acc: number, curr: number) => acc + curr;
    from(niveles).pipe(reduce(reducer)).subscribe(console.log);
    //scan 
    from(niveles).pipe(scan(reducer)).subscribe(console.log);

    const body = document.querySelector('body');
    const textInput = document.createElement('input');
    body!.append(textInput);
    const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

    const url = 'https://httpbin.org/delay/2?arg='
    input$.pipe(
      map((val: any) => val.target.value),
      switchMap(texto => ajax.getJSON(url + texto))
    ).subscribe(console.log)


  }
}


