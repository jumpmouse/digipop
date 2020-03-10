import { Component, OnInit } from '@angular/core';
import { EmptyCourseForEditing } from '../../constants/course-management.const';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { ScriptContentService } from '@app/shared/services/script-content.service';
import { Predmet, Skripta } from '@app/models/skripta.model';
import { UtilsService } from '@app/shared/services/utils.service';

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss']
})
export class AddEditCourseComponent implements OnInit {
  public content = Object.assign({}, EmptyCourseForEditing);
  public fields: string[] = [];
  public labels: { required: boolean; name: string }[] = [];
  private currentCourse: Predmet;
  private courseName: string;
  private script: Skripta;

  constructor(
    private route: ActivatedRoute,
    private scriptContentService: ScriptContentService,
    private utils: UtilsService
    ) {}
  
  ngOnInit(): void {
    combineLatest([this.route.params, this.scriptContentService.scriptContent]).subscribe(([param, script]) => {
      this.courseName = param.courseName;
      this.script = script;
      const allCourses = Object.values(script.predmeti);
      for (let i = 0; i < allCourses.length; i++) {
        const tempCourseName = this.utils.sanitizeFileName(allCourses[i].naziv);
        if (tempCourseName === this.courseName) {
          this.currentCourse = allCourses[i];
          break;
        }
      }
      this.fields = Object.keys(this.content);
      this.labels = this.fields.map(label => {
        const required = !!this.content[label];
        if (this.currentCourse) {
          this.content[label] = this.currentCourse[label];
        } else {
          this.content[label] = '';
        }
        return {
          required,
          name: label.replace('_', ' ')
        };
      });
    });

    this.route.params.subscribe(param => {
    });
  }

  onSubmit(): void {
    const fileName = this.utils.sanitizeFileName(this.content.naziv);
    const courseForUpdate: Predmet =
      Object.assign(
        {},
        this.content,
        {
          link: fileName,
          id: this.currentCourse.id || this.getId(),
          oblasti: this.currentCourse.oblasti
        }
      );

      this.scriptContentService.addUpdateCourse(courseForUpdate);
    // this.utils.downloadDocument(fileName || 'newsection' + '.txt', JSON.stringify(this.content));
  }

  private getId(): string {
    const courseOrderNumber = Object.keys(this.script.predmeti).length + 1;
    return this.utils.romanize(courseOrderNumber);

  }
}
