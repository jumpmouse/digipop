import { Component, OnInit } from '@angular/core';
import { Project } from '@app/models/project.model';
import { SadrzajSripte } from '../../../../assets/script-content/script-content.constant';
import { Predmet, ContentMetaData } from '@app/models/skripta.model';
import { ProjectsService } from '@app/shared/services/projects.service';
import { EmptyCourse } from '@app/content-management/constants/course-management.cont';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss']
})
export class CourseManagementComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  predmeti: Project[];
  script: ContentMetaData;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.predmeti = this.prepareProjects();
    this.isLoading = false;
    this.script = {
      title: SadrzajSripte.naslov,
      subtitle: SadrzajSripte.podnaslov,
      shortDescription: SadrzajSripte.opis_ukratko,
      description: SadrzajSripte.opis
    };
  }

  prepareProjects(): Project[] {
    const predmeti: Project[] = SadrzajSripte.predmeti.map((predmet: Predmet, index: number) =>
      this.projectsService.prepareProjectFromPredmet(predmet, index)
    );
    const emptyCourse: Project = this.projectsService.prepareProjectFromPredmet(EmptyCourse, predmeti.length);
    predmeti.push(emptyCourse);
    return predmeti;
  }
}
