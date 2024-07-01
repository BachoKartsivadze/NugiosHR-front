import { Component, OnInit } from '@angular/core';

interface Country {
  name: string;
  iso: string;
  country_iso: string;
  flag: string;
}

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  countries: Country[] = [];

  ngOnInit(): void {
    this.countries = [
      { name: 'GEO', iso: '00000', country_iso: '00000', flag: 'flag of GEO' },
      { name: 'AZE', iso: '00001', country_iso: '00001', flag: 'flag of AZE' },
      { name: 'UAE', iso: '00002', country_iso: '00002', flag: 'flag of UAE' },
      { name: 'KAZ', iso: '00003', country_iso: '00003', flag: 'flag of KAZ' },
      { name: 'TUR', iso: '00004', country_iso: '00004', flag: 'flag of TUR' },
      { name: 'QAT', iso: '00005', country_iso: '00005', flag: 'flag of QAT' },
    ];
  }
}
