import {
  SELECTOR_CANVAS,
  SELECTOR_INFO_BOX,
  SELECTOR_SCORE_BOX,
  SELECTOR_START_BUTTON,
} from "../config";

import { Drawable, SupportedRenderContextMode, DrawableNDArray } from ".";

interface GameCanvasOptions {
  CanvasElemSelector?: string;
  ScoreElemSelector?: string;
  StartButtonSelector?: string;
  InfoBoxElemSelector?: string;
  RenderContextMode?: SupportedRenderContextMode;
  StartButtonFunc?: (canvas: GameCanvas) => void;
}

export class GameCanvas {
  static Defaults: Required<GameCanvasOptions> = {
    CanvasElemSelector: SELECTOR_CANVAS,
    ScoreElemSelector: SELECTOR_SCORE_BOX,
    StartButtonSelector: SELECTOR_START_BUTTON,
    InfoBoxElemSelector: SELECTOR_INFO_BOX,
    RenderContextMode: "2d",
    StartButtonFunc: () => {},
  };

  #canvas: HTMLCanvasElement | null;
  #context: CanvasRenderingContext2D | null;
  #scoreDisplay: HTMLObjectElement | null;
  #start: HTMLObjectElement | null;
  #info: HTMLObjectElement | null;

  constructor(options?: GameCanvasOptions) {
    const opts = Object.assign({}, GameCanvas.Defaults, options);

    this.#canvas = document.querySelector(opts.CanvasElemSelector);
    this.#context = this.#canvas?.getContext(opts.RenderContextMode) ?? null;
    this.#scoreDisplay = document.querySelector(opts.ScoreElemSelector);
    this.#start = document.querySelector(opts.StartButtonSelector);
    this.#info = document.querySelector(opts.InfoBoxElemSelector);

    this.#start?.addEventListener("click", () => opts.StartButtonFunc(this));
  }

  clear(): void {
    this.#context?.clearRect(
      0,
      0,
      this.#canvas?.width ?? 0,
      this.#canvas?.height ?? 0
    );
  }

  drawScore(score: number): void {
    if (this.#scoreDisplay) {
      this.#scoreDisplay.innerHTML = score.toString();
    }
  }

  drawInfo(text: string): void {
    if (this.#info) {
      this.#info.innerHTML = text;
    }
  }

  private drawObject({ image, pos: { x, y }, width, height }: Drawable): void {
    this.#context?.drawImage(image, x, y, width, height);
  }

  private drawObjectArray(drawables: Drawable[]) {
    drawables.map((drawable) => this.drawObject(drawable));
  }

  drawObjects(...drawables: DrawableNDArray): void {
    drawables.map((drawable) =>
      Array.isArray(drawable)
        ? this.drawObjects(...drawable)
        : this.drawObject(drawable)
    );
  }

  get width() {
    return this.#canvas?.width ?? 0;
  }
}
