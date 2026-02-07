
export enum GameState {
  WELCOME = 'WELCOME',
  DISCOVERY = 'DISCOVERY',
  CALC_HYPOTENUSE = 'CALC_HYPOTENUSE',
  CALC_LEG = 'CALC_LEG',
  CONVERSE = 'CONVERSE',
  VICTORY = 'VICTORY'
}

export interface Challenge {
  id: string;
  question: string;
  a?: number;
  b?: number;
  c?: number;
  expectedAnswer: number | boolean;
  type: 'hypotenuse' | 'leg' | 'converse';
  hint: string;
}

export interface Message {
  role: 'user' | 'ai';
  content: string;
}
