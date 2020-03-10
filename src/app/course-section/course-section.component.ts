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
  private courseLink: string;
  private courseId: string;
  private courseName: string;
  private sectionLink: string;
  private sectionId: string;
  private sectionName: string;







  constructor(private route: ActivatedRoute, private scriptContentService: ScriptContentService) {}

  ngOnInit() {
    combineLatest([this.route.params, this.scriptContentService.scriptContent]).subscribe(([param, script]) => {
      const courseMetaData = param.courseName.split('_');
      const sectionMetaData = param.sectionName.split('_');
      this.courseLink = param.courseName;
      this.courseId = courseMetaData[0];
      this.courseName = courseMetaData[1];
      this.sectionLink = param.sectionName;
      this.sectionId = sectionMetaData[0];
      this.sectionName = sectionMetaData[1];

      this.content = this.prepareContent(script);
    });
  }

  prepareContent(script: Skripta): string {
    let oblasti = '';
    this.section = script.predmeti[this.courseId].oblasti[this.sectionId];

    for (let index = 0; index < this.section.programske_celine.length; index++) {
      const programskaCelina = this.section.programske_celine[index];
      oblasti += '<h3>' + programskaCelina.naziv + '</h3><p>' + programskaCelina.tekst + '</p>';
    }
    return oblasti;
  }
}
