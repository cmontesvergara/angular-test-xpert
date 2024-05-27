import { Component } from '@angular/core';
import { CatsService } from '../../services/cats/cats.service';
import { CardComponent } from '../../components/card/card.component';
import { Breed } from '../../core/models/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, AsyncPipe,SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cardsShowing: number = 10;
  searchMode: boolean = false;
  breedsInventoryLength:number = 0
  breedsInventory$!: Observable<Breed[]>;
  breedsInventoryRendered$!: Observable<Breed[]>;

  constructor(private catsService: CatsService) {
    this.breedsInventory$ = this.catsService.getBreeds();
    this.breedsInventoryRendered$ = this.breedsInventory$;
    this.breedsInventoryRendered$.subscribe((breeds:Breed[])=>{
      this.breedsInventoryLength = breeds.length
    })
  }

  showMoreCards(increase:number){
    this.cardsShowing += increase
  }

  async validateWordInSearch(searchValue:string){
    let behaviorSubject = new BehaviorSubject<Breed[]>([]) ;
    console.log(searchValue)
    if(searchValue == ''){
      this.searchMode= false
      this.breedsInventoryRendered$ = this.catsService.getBreeds();

    }else{
      this.searchMode= true
      let breeds = await this.getObservableValue(this.breedsInventory$)
      let searchedData:Breed[]=[]
     for (const i of breeds) {
       if(i.name.toLowerCase().includes(searchValue.toLowerCase())){
        searchedData.push(i)
       }
     }
     this.breedsInventoryRendered$ = behaviorSubject ;
     behaviorSubject.next(searchedData)
    }

  }



 getObservableValue<T>(observable$: Observable<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    const subscription = observable$.subscribe(
      (value) => {
        resolve(value);
        subscription.unsubscribe();
      },
      (error) => {
        reject(error);
        subscription.unsubscribe();
      }
    );
  });
}

}



