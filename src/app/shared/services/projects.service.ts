import { Injectable } from '@angular/core';
import { Predmet, Oblast, ProgramskaCelina } from '@app/models/skripta.model';
import { Project, SimpleLinkObject } from '@app/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  sections: SimpleLinkObject[] = [];

  constructor() {}

  prepareProjectFromPredmet(predmet: Predmet, index: number): Project {
    const sections: SimpleLinkObject[] = predmet.oblasti.map((oblast, i) => {
      const key = (i + 1).toString() + '.';
      return {
        key,
        name: oblast.naziv,
        link: predmet.link + '/' + oblast.link
      };
    });

    return {
      key: this.romanize(index + 1),
      link: predmet.link,
      title: predmet.naziv,
      description: predmet.kratki_opis,
      photoUrl: predmet.URL_slike,
      sections
    };
  }
  prepareProjectFromOblast(oblast: Oblast, parrentLink: string, index: number): Project {
    const oblastKey = (index + 1).toString() + '.';
    this.sections = [];
    for (let i = 0; i < oblast.programske_celine.length; i++) {
      const programskaCelina = oblast.programske_celine[i];
      const key = (i + 1).toString() + '.';
      const oblastLink = parrentLink + '/' + oblast.link;
      const simpleLinkObject: SimpleLinkObject = {
        key: oblastKey + key,
        name: programskaCelina.naziv,
        // link: oblastLink + '#' + programskaCelina.link
        link: oblastLink
      };
      this.sections.push(simpleLinkObject);
      if (programskaCelina.podceline && programskaCelina.podceline.length) {
        this.addSubsectionsRecursively(programskaCelina.podceline, simpleLinkObject.key, oblastLink);
      }
    }

    return {
      key: oblastKey,
      link: parrentLink + '/' + oblast.link,
      title: oblast.naziv,
      description: oblast.opis,
      photoUrl: oblast.URL_slike,
      sections: this.sections
    };
  }

  addSubsectionsRecursively(podceline: ProgramskaCelina[], parrentKey: string, parrentLink: string): void {
    for (let i = 0; i < podceline.length; i++) {
      const podcelina = podceline[i];
      const key = (i + 1).toString() + '.';
      const simpleLink = {
        key: parrentKey + key,
        name: podcelina.naziv,
        // link: parrentLink + '#' + podcelina.link
        link: parrentLink
      };
      this.sections.push(simpleLink);
      if (podcelina.podceline && podcelina.podceline.length) {
        this.addSubsectionsRecursively(podcelina.podceline, simpleLink.key, parrentLink);
      }
    }
  }

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
}
