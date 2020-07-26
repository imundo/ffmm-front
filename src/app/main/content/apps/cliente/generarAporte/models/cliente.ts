import { TituloProfesion } from './tituloProfesion';
import { NivelEducacional } from './nivelEducacional';
import { RegimenMatrimonial } from './regimenMatrimonial';
// import { EstadoCivil } from './estadoCivil';
import { Sexo } from './sexo';
import { Nacionalidad } from './nacionalidad';
export class Cliente {

id: number;
rut: number;
dv: string;
idPerfilInversionista: number;
nombres: string;
apellidoPaterno: string;
apellidoMaterno: string;
fechaNacimiento: string;
fechaMatrimonio: string;
numeroCargasFamiliares: string;
estado: string;
descripcion: string;
nombreEmpresa: string;
correoElectronico: string;
direccionElectronica: string;
tipoCliente: number;
fecUltAct: string;
codigoPais: string;
pep: string;
codigoPaisResidencia;
codigoPaisNacimiento: string;
formaEnvioCartola: string;
fotoHashCode: string;

/** foreing-key */

nacionalidad: Nacionalidad[] = [];
esPep: number;
profesion: TituloProfesion[] = [];
sexo: Sexo[] = [];
// estadoCivil: EstadoCivil[] = [];
regimenMatrimonial: RegimenMatrimonial[] = [];
nivelEducacional: NivelEducacional[] = [];
gse: string;
}
