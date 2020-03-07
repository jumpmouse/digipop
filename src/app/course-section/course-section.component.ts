import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { Predmet, ContentMetaData, Skripta } from '@app/models/skripta.model';
import { ActivatedRoute } from '@angular/router';
import { ScriptContentService } from '@app/shared/services/script-content.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-course-section',
  templateUrl: './course-section.component.html',
  styleUrls: ['./course-section.component.scss']
})
export class CourseSectionComponent implements OnInit {
  version: string | null = environment.version;
  course: ContentMetaData;
  content: string;
  section: any;

  constructor(private route: ActivatedRoute, private scriptContentService: ScriptContentService) {}

  ngOnInit() {
    combineLatest([this.route.params, this.scriptContentService.scriptContent]).subscribe(([param, script]) => {
      this.content = this.prepareContent(param, script);
    });
  }

  prepareContent(param: object, script: Skripta): string {
    let oblasti = '';
    const predmeti = Object.entries(script.predmeti);
    for (let i = 0; i < predmeti.length; i++) {
      const predmet = predmeti[i][1];
      // tslint:disable-next-line: no-string-literal
      const courseName = param['courseName'];
      // tslint:disable-next-line: no-string-literal
      const sectionName = param['sectionName'];

      if (courseName === predmet.link) {
        const oblastiArray = Object.entries(predmet.oblasti);
        for (let a = 0; a < oblastiArray.length; a++) {
          const oblast = oblastiArray[a][1];
          if (sectionName === oblast.link) {
            this.section = oblast;
            break;
          }
        }
        break;
      }
    }
    for (let index = 0; index < this.section.programske_celine.length; index++) {
      const programskaCelina = this.section.programske_celine[index];
      oblasti += '<h3>' + programskaCelina.naziv + '</h3><p>' + programskaCelina.tekst + '</p>';
    }
    return oblasti;
  }

  prepareCourse(predmet: Predmet): ContentMetaData {
    return {
      title: predmet.naziv,
      subtitle: '',
      shortDescription: '',
      description: predmet.opis
    };
  }
}
