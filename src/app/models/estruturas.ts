export class Adotante {
  emailAdotante: string = '';
  senhaAdotante: string = '';
  repetirSenhaAdotante: string = '';
  nomeCompleto: string = '';
  idade: number = 0;
  localizacao: string = '';
  telefoneAdotante: string = '';
  tipoMoradia: string = '';
  quantidadeCriancas: number = 0;
  tempoDisponivel: string = '';
  tipoPelagem: string = '';
  pesoEstimado: string = '';
  motivoAdocao: string = '';
  sexo: string[] = [];
  compromissoResponsabilidade: boolean = false;

  constructor() {}
}

export class Ong {
  emailOng: string = '';
  senhaOng: string = '';
  repetirSenhaOng: string = '';
  nomeOng: string = '';
  localizacaoOng: string = '';
  telefoneOng: string = '';
}

// = {
//   emailTutor: '',
//   senhaTutor: '',
//   repetirSenhaTutor: '',
//   nomeCompleto: '',
//   idade: 0,
//   localizacao: '',
//   telefoneTutor: '',
//   tipoMoradia: '',
//   quantidadeCriancas: 0,
//   tempoDisponivel: '',
//   tipoPelagem: '',
//   pesoEstimado: '',
//   motivoAdocao: '',
//   sexo: [],
//   compromissoResponsabilidade: false,
// };

// export class Nota {
//     id: number;
//     titulo: string;
//     texto: string ="null";
//     modificacao: Date;
//     status: number;

//     constructor(id: number, titulo: string) {
//         this.id = id;
//         this.titulo = titulo;
//         this.modificacao = new Date();
//         this.status = 0;
//     }
// }
