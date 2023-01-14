export interface typeType {
  name: string;
}

export interface typesType {
  type: typeType;
}

export interface statType {
  name: string;
}

export interface statsType {
  base_stat: number;
  stat: statType;
}

export interface abilityType {
  name: string;
}

export interface abilitiesType {
  ability: abilityType;
}

export interface moveType {
  name: string;
}

export interface movesType {
  move: moveType;
}

export interface DatasType {
  name: string;
  url: string;
  stats: statsType[];
  weight: number;
  height: number;
  types: typesType[];
  abilities: abilitiesType[];
  moves: movesType[];
  id: number;
  sub_name: string;
}
