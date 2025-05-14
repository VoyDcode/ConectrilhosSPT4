export type CupomType = {
  id: number;
  titulo: string;
  local: string;
  status: 'Resgatado' | 'Pendente';
  descricao: string;
}; 