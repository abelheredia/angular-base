export interface Result {
  count: number;
  next: string;
  previous: string;
  results: Array<Pokemon>;
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonList {
  name: string;
  img: string;
  order: number;
}

export interface Asegurado {
  tipo_documento: number;
  nro_documento: number;
  apellido_paterno: string;
  apellido_materno: string;
  nombre1: string;
  nombre2: string;
  fecha_nacimiento: string;
  sexo: number;
  estado_civil: string;
  nacionalidad: string;
  direccion: string;
  ubigeo: string;
  celular: number;
  email: string;
}
