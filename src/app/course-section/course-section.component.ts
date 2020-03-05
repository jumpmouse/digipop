import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { Predmet, ContentMetaData } from '@app/models/skripta.model';
import { SadrzajSripte } from 'src/assets/script-content/script-content.constant';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '@app/shared/services/projects.service';

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

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      // const courseName: string = param.courseName;
      // const sectionName: string = param.sectionName;
      this.content = this.prepareContent(param);
    });
  }

  prepareContent(param: object): string {
    let oblasti = '';
    for (let i = 0; i < SadrzajSripte.predmeti.length; i++) {
      const predmet = SadrzajSripte.predmeti[i];
      // tslint:disable-next-line: no-string-literal
      const courseName = param['courseName'];
      // tslint:disable-next-line: no-string-literal
      const sectionName = param['sectionName'];

      if (courseName === predmet.link) {
        // this.section = this.prepareCourse(predmet);
        for (let a = 0; a < predmet.oblasti.length; a++) {
          const oblast = predmet.oblasti[a];
          if (sectionName === oblast.link) {
            this.section = oblast;
            console.log(this.section);
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
