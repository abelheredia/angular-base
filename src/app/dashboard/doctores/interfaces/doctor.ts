export interface Doctor {
  nombres: string;
  apellidos: string;
  celular: string;
  correo: string;
  cmp: string;
  especialidad: string;
  residencia: string;
  perfil: string;
}

export interface DoctorInsert {
  nombres: string;
  apellidos: string;
  celular: string;
  correo: string;
  cmp: string;
  especialidad: string;
  residencia: string;
  perfil: string;
  pass: string;
  foto: string;
  usuario: string;
}
