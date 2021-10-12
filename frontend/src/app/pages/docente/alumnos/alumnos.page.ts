import { AlumnosService } from './../../../services/alumnos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {
  alumnos: any = [ ]
  constructor(private AlumnosService: AlumnosService) { }

  ngOnInit() {
    this.AlumnosService.getAll().subscribe(
      (res) => {
        console.log(res)
        this.alumnos = res;
      },
      (err) => console.log(err)
    );
  }

}
