import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public cards?: Image[];

  constructor(private imageService: ImagesService) { }

  ngOnInit(): void {
    this.imageService
      .getAllImages()
      .subscribe((cards) => (this.cards = cards));    
  }

}
