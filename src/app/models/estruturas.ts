export class Adotante {
  id?: string;
  userTipe = 'adotante';
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
  id?: string;
  userTipe = 'ong';
  emailOng: string = '';
  senhaOng: string = '';
  repetirSenhaOng: string = '';
  nomeOng: string = '';
  localizacaoOng: string = '';
  telefoneOng: string = '';
}

export class Cao {
  nomeCao: string = '';
  tipoPelagem: string = '';
  pesoEstimado: string = '';
  idadeEstimada: string = '';
  castrado: boolean = false;
  vermifugado: boolean = false;
  vacinas: boolean = false;
  historico: string = '';
  sexo: string = '';
}
