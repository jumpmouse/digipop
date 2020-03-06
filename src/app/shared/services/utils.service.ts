import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  romanize(num: number): string | number {
    if (isNaN(num)) {
      return NaN;
    }
    const digits = String(+num).split('');
    const key = [
      '',
      'C',
      'CC',
      'CCC',
      'CD',
      'D',
      'DC',
      'DCC',
      'DCCC',
      'CM',
      '',
      'X',
      'XX',
      'XXX',
      'XL',
      'L',
      'LX',
      'LXX',
      'LXXX',
      'XC',
      '',
      'I',
      'II',
      'III',
      'IV',
      'V',
      'VI',
      'VII',
      'VIII',
      'IX'
    ];
    let roman = '';
    let i = 3;
    while (i--) {
      roman = (key[+digits.pop() + i * 10] || '') + roman;
    }
    return Array(+digits.join('') + 1).join('M') + roman;
  }

  sanitizeFileName(s: string, regex: RegExp, lettersObj: { [key: string]: string }) {
    const string = s.replace(regex, (match: string) => {
      return lettersObj[match];
    });
    return string.toLowerCase();
  }
}
