import { Component, OnInit } from '@angular/core';
import { Breed, ImageResponse } from '../../core/models/interfaces';
import { CatsService } from '../../services/cats/cats.service';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'detail',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent  implements OnInit{
   breedData!:Breed;
  constructor(private catsService:CatsService, private storageService:StorageService){
  }
  ngOnInit(): void {
   this.breedData = this.storageService.readCatData()
   this.catsService.getImages(this.breedData.id).subscribe((images:ImageResponse[])=>{
    this.breedData.images = images
   })
   this.scrollToTop()
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
