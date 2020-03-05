import { Injectable } from '@angular/core';
import { Predmet, Oblast, ProgramskaCelina } from '@app/models/skripta.model';
import { Project, SimpleLinkObject } from '@app/models/project.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  sections: SimpleLinkObject[] = [];

  constructor(private utilsService: UtilsService) {}

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
      key: this.utilsService.romanize(index + 1),
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

  private addSubsectionsRecursively(podceline: ProgramskaCelina[], parrentKey: string, parrentLink: string): void {
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
}
