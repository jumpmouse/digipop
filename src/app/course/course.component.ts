import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { Predmet, Oblast, ContentMetaData } from '@app/models/skripta.model';
import { SadrzajSripte } from 'src/assets/script-content/script-content.constant';
import { ActivatedRoute } from '@angular/router';
import { Project } from '@app/models/project.model';
import { ProjectsService } from '@app/shared/services/projects.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  version: string | null = environment.version;
  course: ContentMetaData;
  sections: Project[];

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      const courseName: string = param.courseName;
      this.sections = this.prepareProjects(courseName);
    });
  }

  prepareProjects(courseName: string): Project[] {
    let oblasti: Project[] = [];
    for (let i = 0; i < SadrzajSripte.predmeti.length; i++) {
      const predmet = SadrzajSripte.predmeti[i];
      if (courseName === predmet.link) {
        this.course = this.prepareCourse(predmet);
        oblasti = predmet.oblasti.map((oblast: Oblast, index: number) =>
          this.projectsService.prepareProjectFromOblast(oblast, courseName, index)
        );
        break;
      }
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
