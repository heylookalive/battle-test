# Byhiras code test

This is a solution to the Byhrias code test using Create React App, TypeScript, React hooks and Styled Components.

## Commands

```bash
# Install the dependencies
yarn

# Run website in dev (hot reload) mode ( http://localhost:3000 )
yarn start

# Run the unit tests
yarn test
```

## Notes

- The state is setup such that you could later extend to have more than one player, but the reducer is more basic for the sake of time.
- We could have more actions like "roll_dice", "set_dice", "apply_damage" with chained dispatches but this felt wrong. There's one true action here and that's Attack. This is supported by the events that happen within the UI.

## Todos

If more time were allowed...

- [ ] Add Cypress testing
- [ ] Animate the Dice roll
- [ ] More colours for the health bar
- [ ] Be a better designer

# The specification

In this game you (The Player) are fighting some kind of monster (your choice). Both characters begin with 100 health points.

The two health values must be represented somehow on the screen.

The UI consists of an “Attack!” button. When you click this, the following sequence should happen:

1. Two dice are rolled for The Player
2. Two dice are rolled for The Monster
   1. All dice are 6-sided. For each roll pick a random number between 1 and 6. The results of all 4 rolls should be displayed.
3. Whoever scores the lowest total will take damage and lose health points. The amount of health they lose will be the difference between the two rolls. So: if the player rolls a 2 and a 3, and the monster rolls a 4 and a 5, the player will take (4+5)-(3+2) = 4 damage.
4. Now the player can attack again when they like. If The Player loses all their health the game stops and “Game Over” is displayed in large red text. If the monster loses all their health the game ends and “You Win” is displayed in large green text.
