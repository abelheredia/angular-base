import { Component, OnInit } from '@angular/core';
import { Doctor, DoctorInsert } from '../../interfaces/doctor';
import { DoctoresService } from '../../services/doctores/doctores.service';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.scss'],
})
export class DoctoresComponent implements OnInit {
  public cargando: boolean = false;

  public docs: Array<Doctor> = [];
  public doc: DoctorInsert = {
    apellidos: '',
    celular: '',
    cmp: '',
    correo: '',
    especialidad: '',
    nombres: '',
    perfil: '',
    residencia: '',
    foto: '',
    pass: '',
    usuario: '',
  };

  constructor(private service: DoctoresService) {}

  ngOnInit(): void {
    // this.cargando = true;
    // this.service.getDoctores().subscribe((data: any) => {
    //   this.cargando = false;
    //   this.docs = data['doctores'];
    // });
  }

  insertDoctor(): void {
    this.service.insertDoctor(this.doc).subscribe((data: any) => {
      console.log(data);
    });
  }
}
