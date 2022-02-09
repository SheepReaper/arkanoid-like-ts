export { GameCanvas } from "./canvas";

export class XYnumber {
  x = 0;
  y = 0;
}

export type RenderContextMode = "2d" | "bitmaprenderer" | "webgl" | "webgl2";

export const supportedRenderContextModes = ["2d"] as const;

export type SupportedRenderContextMode =
  typeof supportedRenderContextModes[number];

export const isSupportedRenderContextMode = (
  contextMode: string
): contextMode is SupportedRenderContextMode =>
  supportedRenderContextModes.some((mode) => mode === contextMode);

class Boundable {
  pos: XYnumber = new XYnumber();
  width: number = 0;
  height: number = 0;
}

class Collidable extends Boundable {
  collisionBox: CollisionBox;

  onCollide?: (thisObj: Collidable, otherObj: Collidable) => void;

  constructor(collisionBoxAnchor = AnchorPoint.bottomLeft) {
    super();

    this.collisionBox = new CollisionBox(this, collisionBoxAnchor);
  }
}

export class Drawable extends Collidable {
  image: CanvasImageSource = {} as CanvasImageSource;

  translate(newPos: XYnumber, absolute = false): void {
    this.pos.x = (absolute ? 0 : this.pos.x) + newPos.x;
    this.pos.y = (absolute ? 0 : this.pos.y) + newPos.y;
  }
}

type _DrawableNDArray = DrawableNDArray

export interface DrawableNDArray extends Array<_DrawableNDArray | Drawable> {}

export class Brick extends Drawable {}

export class Paddle extends Drawable {
  isMovingLeft = false;
  isMovingRight = false;

  movePaddle() {}
}

export class Ball extends Drawable {
  speed = new XYnumber();
  paddleCollider?: Collider

  invertXSpeed(): void {
    this.speed.x /= -1;
  }

  invertYSpeed(): void {
    this.speed.y /= -1;
  }

  stepBall() {
    this.translate(this.speed);
    if(this.paddleCollider){
      if (this.paddleCollider.currentCollision) {
        this.invertYSpeed()
      }
    }
  }
}

enum AnchorPoint {
  bottomLeft,
  center,
}

class CollisionBox {
  constructor(
    private readonly obj: Boundable,
    public anchor: AnchorPoint = AnchorPoint.bottomLeft
  ) {}

  get xBounds() {
    switch (this.anchor) {
      case AnchorPoint.bottomLeft:
        return { l: this.obj.pos.x, h: this.obj.pos.x + this.obj.width };
      case AnchorPoint.center:
        return {
          l: this.obj.pos.x - this.obj.width / 2,
          h: this.obj.pos.x + this.obj.width / 2,
        };
    }
  }

  get yBounds() {
    switch (this.anchor) {
      case AnchorPoint.bottomLeft:
        return { l: this.obj.pos.y, h: this.obj.pos.y + this.obj.height };
      case AnchorPoint.center:
        return {
          l: this.obj.pos.y - this.obj.height / 2,
          h: this.obj.pos.y + this.obj.height / 2,
        };
    }
  }
}

export class Collider {
  constructor(private obj1: Collidable, private obj2: Collidable) {}

  get currentCollision() {
    const {
      xBounds: { l: ax1, h: ax2 },
      yBounds: { l: ay1, h: ay2 },
    } = this.obj1.collisionBox;

    const {
      xBounds: { l: bx1, h: bx2 },
      yBounds: { l: by1, h: by2 },
    } = this.obj2.collisionBox;

    return ax1 <= bx2 && bx1 <= ax2 && ay1 <= by2 && by1 <= ay2;
  }
}

export class CollisionModel {}
