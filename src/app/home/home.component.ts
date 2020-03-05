import { Component, OnInit } from '@angular/core';
import { Project } from '@app/models/project.model';
import { SadrzajSripte } from '../../assets/script-content/script-content.constant';
import { Predmet, ContentMetaData } from '@app/models/skripta.model';
import { ProjectsService } from '@app/shared/services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class ContentManagementComponent implements OnInit {
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
    return predmeti;
  }
}
