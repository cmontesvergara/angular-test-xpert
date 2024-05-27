import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CatsService } from '../../services/cats/cats.service';
import { Breed, CatImage } from '../../core/models/interfaces';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnChanges {
  @Input() cardData!: Breed;
  placeholderImagePath: string;

  constructor(
    private catsService: CatsService,
    private router: Router,
    private storageService: StorageService
  ) {
    this.placeholderImagePath =
      'https://animalhaven.org/hs-fs/hubfs/raw_assets/public/animal-haven/images/placeholder--cat.png?width=512&height=512&name=placeholder--cat.png';
  }
  async ngOnChanges(changes: SimpleChanges) {
    if (this.cardData) {
      this.getImagePath();
    }
  }
  goToDetail() {
    this.storageService.saveCatData(this.cardData);
    this.router.navigateByUrl('detail');
  }
  getImagePath() {
    if (this.cardData.reference_image_id)
      this.catsService
        .getImageById(this.cardData.reference_image_id)
        .subscribe((image: CatImage) => {
          this.cardData.imagePath = image.url;
        });
  }
}
