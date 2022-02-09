import { BALL_START } from "./config";
import {
  Ball,
  Brick,
  CollisionModel,
  CollisionModel as Collider,
  Paddle,
} from "./typings";
import { GameCanvas } from "./typings/canvas";

import { BALL } from "./assets";

let gameOver = false;
let score = 0;

const setGameOver = (view: GameCanvas) => {
  view.drawInfo("Game Over!");
  gameOver = false;
};

const setGameWin = (view: GameCanvas) => {
  view.drawInfo("Game Won!");
  gameOver = false;
};

const gameLoop = (
  canvas: GameCanvas,
  bricks: Brick[],
  paddle: Paddle,
  ball: Ball,
  collisionModel: CollisionModel
) => {
  console.log(["draw"]);

  canvas.clear();
  canvas.drawObjects(bricks, paddle, ball);

  ball.stepBall();

  if (
    (paddle.isMovingLeft && paddle.pos.x > 0) ||
    (paddle.isMovingRight && paddle.pos.x < canvas.width - paddle.width)
  ) {
    paddle.movePaddle();
  }

  // Collider.
};

const buttonHandler = (canvas: GameCanvas) => {
  console.log(["button pressed, have canvas?", canvas]);
};

const main = () => {
  const canvas = new GameCanvas({ StartButtonFunc: buttonHandler });
  const ball = new Ball();

  ball.height = 30;
  ball.width = 30;
  ball.pos = { x: 300, y: 30 };
  ball.image = new Image(30, 30);
  ball.image.src = BALL;

  canvas.clear()
  canvas.drawObjects(ball);

  console.log(ball)
};

// console.log(["hello", BALL_START.x]);

main();
