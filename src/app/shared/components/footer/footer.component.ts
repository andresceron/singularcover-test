import {
  Component,
  Input,
  OnInit,
  ContentChild,
  TemplateRef,
  AfterViewInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'sc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FooterComponent implements OnInit, AfterViewInit {
  @ContentChild('hotelNameRef') hotelNameRef: TemplateRef<any>;
  @ContentChild('hotelCityRef') hotelCityRef: TemplateRef<any>;
  @ContentChild('hotelCountryRef') hotelCountryRef: TemplateRef<any>;

  @Input() defaultTemplate: boolean;
  @Output() tabEvent =  new EventEmitter();


  constructor(
  ) {}

  ngOnInit() {}

  clickedTab(tab) {
    this.tabEvent.emit(tab);
  }

  ngAfterViewInit() {}

}
