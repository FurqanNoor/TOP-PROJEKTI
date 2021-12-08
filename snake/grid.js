const GRID_SIZE = 21
/* this is the javascript code for the grid of the game 
  so we can make an area where the game can be played and
  create rules where if the snake exits the made grid-area, 
  the game ends */

  /* that rule is gonna be created in game.js */
export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1
  }
}

export function outsideGrid(position) {
  return (
    position.x < 1 || position.x > GRID_SIZE ||
    position.y < 1 || position.y > GRID_SIZE
  )
}