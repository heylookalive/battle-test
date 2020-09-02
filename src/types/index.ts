export enum GameState {
  ACTIVE = 'ACTIVE',
  OVER = 'OVER',
}

export enum PlayerTypes {
  HERO = 'HERO',
  MONSTER = 'MONSTER',
}

export type PlayerState = {
  type: PlayerTypes;
  health: number;
  dice?: number[];
};

// Lots of ways to skin a cat here, could have a "players" object to allow for
// more than two defined players.
export type BattleState = {
  players: {
    playerOne: PlayerState;
    playerTwo: PlayerState;
  };
  message: string;
  gameState: GameState;
};

export type BattleActions = { type: 'attack' };
