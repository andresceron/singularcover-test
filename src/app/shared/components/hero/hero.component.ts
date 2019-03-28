import {
  Input,
  Component,
  OnInit,
  OnDestroy,
  HostBinding,
  HostListener,
} from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { AppConstants } from '@constants/app-constants.constant';
import { IHeroSettings } from '@interfaces/hero-settings.interface';

@Component({
  selector: 'sc-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent implements OnDestroy, OnInit {
  public ST_HOST = AppConstants.ST_HOST;
  public image: string;
  public heroHeightClass: string;
  public calculateHeight: string;

  @Input() stateClass: string;
  @HostBinding('style.display') heroDisplay;
  @HostBinding('style.height') heroHeight;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 991) {
      this.heroHeightClass = 'hero--fullheight';
      this.heroHeight = '100vh';
    } else {
      this.heroHeightClass = '';
      this.heroHeight = '650px';
    }
  }

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.image = AppConstants.ST_HOST + '/images/hero/hero.jpg';
    this.heroDisplay = 'block';

    this.heroHeightClass = window.innerWidth <= 992 ? 'hero--fullheight' : '';
    this.heroHeight = window.innerWidth <= 992 ? '100vh' : '650px';
  }

  configHeroStyles() {
    const imageSettings: IHeroSettings = {
      'background-image': 'url(' + this.image + ')',
      'background-position': '50% ' + 60 + 'px'
    };

    return imageSettings;
  }

  ngOnDestroy() {
  }


}
