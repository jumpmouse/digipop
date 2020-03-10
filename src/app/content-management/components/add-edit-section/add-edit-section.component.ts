import { Component, OnInit } from '@angular/core';
import { EmptySectionForEditing } from '../../constants/course-management.const';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-section',
  templateUrl: './add-edit-section.component.html',
  styleUrls: ['./add-edit-section.component.scss']
})
export class AddEditSectionComponent implements OnInit {
  public content = Object.assign({}, EmptySectionForEditing);
  public fields: string[] = [];
  public labels: { required: boolean; name: string }[] = [];

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      // const courseName: string = param.courseName;
      const sectionName: string = param.sectionName;
      if (sectionName) {
        // use existing data
        // this.content = ...
      }
      this.fields = Object.keys(this.content);
      this.labels = this.fields.map(label => {
        const required = !!this.content[label];
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
