import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-basis',
  templateUrl: './subject-basis.component.html',
  styleUrls: ['./subject-basis.component.css']
})
export class SubjectBasisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const movies:string[] = []

    const basicSubject$$ = new Subject<string[]>()  // Subject jest generykiem i musimy Mu powiedziec jakiegos typu dane beda w tym Subjecie, zakladamy ze to tablica filmow
                                                    // W zwyklym subjecie nie mozna ustawiac domyslej wartosci
    basicSubject$$.subscribe((movies)=>{
      console.log(movies)
    })

    basicSubject$$.next(['film1', 'film2'])
    basicSubject$$.next(['film1', 'film4'])
    basicSubject$$.next(['film3'])


    basicSubject$$.pipe().subscribe(console.log)   // mozna sobie pipowac


    // Zwykle subjecty polegaja na tym ze co przyjdzie nowego to dopiero subskrybent dostanie, nie dosanie wczesnijeszych danych z subjecta
    // czyli subject jest hot observable

    const movieToReplaySbj:string[] = ['Tarzan']

    const replaySubject$$ = new ReplaySubject<string[]>(2)   // Robi to samo co zwykly Subject jednak w tym przypadku zapamietuje 1 ostatni stan
  
    replaySubject$$.next(movieToReplaySbj)

   

    replaySubject$$.next(['Batman2'])
    replaySubject$$.next(['Batman3'])
    replaySubject$$.subscribe(console.log)

    //____________________________________________________________________________________________________________________

      const behaviorSubject = new BehaviorSubject<string[]>(['initState'])  // Behavior Sbj ma zawsze stan poczatkowy i kazdy kolejny stan
     

      behaviorSubject.next([...behaviorSubject.value, 'newItem'])
      

      behaviorSubject.next([...behaviorSubject.value, 'anotherNewItem'])
      
      behaviorSubject.subscribe(console.log)

      //metoda complete() zamyka strumien

      //koszyk z biletami do kina
  }

}
