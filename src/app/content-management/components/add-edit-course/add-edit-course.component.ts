import { Component, OnInit } from '@angular/core';
import { EmptyCourseForEditing } from '../../constants/course-management.cont';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss']
})
export class AddEditCourseComponent implements OnInit {
  public content = Object.assign({}, EmptyCourseForEditing);
  public fields: string[] = [];
  public labels: { required: boolean; name: string }[] = [];

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const courseName: string = param.courseName;
      if (courseName) {
        // use existing data
        // this.content = ...
      }
      this.fields = Object.keys(this.content);
      this.labels = this.fields.map(label => {
        const required = !!this.content[label];
        console.log(required);
        if (required) {
          this.content[label] = '';
        }
        return {
          required,
          name: label.replace('_', ' ')
        };
      });
    });
  }

  onSubmit(): void {
    console.log(JSON.stringify(this.content, null, 2));
  }
}
