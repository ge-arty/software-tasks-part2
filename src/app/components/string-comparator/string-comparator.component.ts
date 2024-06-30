import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-comparator',
  templateUrl: './string-comparator.component.html',
  styleUrls: ['./string-comparator.component.css'],
})
export class StringComparatorComponent implements OnInit {
  @Input() value1: string;
  @Input() value2: string[];
  results: { str: string; matchPercentage: number }[];

  constructor() {}

  ngOnInit(): void {
    this.compareStrings();
  }

  compareStrings(): void {
    if (!this.value1 || !this.value2 || this.value2.length === 0) {
      this.results = [];
      return;
    }

    this.results = this.value2.map((str) => {
      const matchPercentage = this.calculateMatchPercentage(this.value1, str);
      return { str, matchPercentage };
    });
  }

  calculateMatchPercentage(str1: string, str2: string): number {
    const len = Math.max(str1.length, str2.length);
    let matchCount = 0;

    for (let i = 0; i < len; i++) {
      if (str1[i] === str2[i]) {
        matchCount++;
      }
    }

    return (matchCount / len) * 100;
  }
}
