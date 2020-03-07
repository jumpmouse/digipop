import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { Predmet, Oblast, ContentMetaData, Skripta } from '@app/models/skripta.model';
import { ActivatedRoute } from '@angular/router';
import { Project } from '@app/models/project.model';
import { ProjectsService } from '@app/shared/services/projects.service';
import { ScriptContentService } from '@app/shared/services/script-content.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  version: string | null = environment.version;
  course: ContentMetaData;
  sections: Project[];

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private scriptContentService: ScriptContentService
  ) {}

  ngOnInit() {
    combineLatest([this.route.params, this.scriptContentService.scriptContent]).subscribe(([param, script]) => {
      const courseName: string = param.courseName;
      this.sections = this.prepareProjects(courseName, script);
    });
  }

  prepareProjects(courseName: string, script: Skripta): Project[] {
    let oblasti: Project[] = [];
    const predmeti = Object.entries(script.predmeti);
    for (let i = 0; i < predmeti.length; i++) {
      const predmet = predmeti[i][1];
      if (courseName === predmet.link) {
        this.course = this.prepareCourse(predmet);
        oblasti = Object.entries(predmet.oblasti).map(([id, oblast]: [string, Oblast], index: number) => {
          return this.projectsService.prepareProjectFromOblast(oblast, courseName, index);
        });
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
