import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'
@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      Your selected ID - {{ departmentId }}
    </p>
    <p>
      <button (click)="contactDetails()">Contact Details</button>
    </p>
    <router-outlet></router-outlet>
    <p>
      <button (click)="goPrev()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>

    <button (click)="goBack()">Back</button>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId:any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //this.departmentId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.route.paramMap.subscribe((params: ParamMap) => {
        this.departmentId = parseInt(params.get('id')!)
    });
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  goPrev() {
    let prevId = this.departmentId - 1;
    this.router.navigate(['/departments', prevId]);
  }

  goBack() {
    let selectedIt = this.departmentId ?? null;
    this.router.navigate(['/departments', {id:selectedIt}]);
  }

  contactDetails() {
    //use relative path
    this.router.navigate(['contact'], { relativeTo: this.route })
  }

}
