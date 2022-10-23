export function Size(width = 80, height = 60) {
  this.height = height;
  this.width = width;

  this.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  };
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;

  this.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
  };
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    let [newWidth, newHeight] = [newSize.width, newSize.height];
    if (newWidth < 1) newWidth = 1;
    if (newHeight < 1) newHeight = 1;
    if (newWidth > this.screenSize.width - this.position.x)
      newWidth = this.screenSize.width - this.position.x;
    if (newHeight > this.screenSize.height - this.position.y)
      newHeight = this.screenSize.height - this.position.y;
    this.size.resize(newWidth, newHeight);
  }

  move(newPosition) {
    let [newX, newY] = [newPosition.x, newPosition.y];
    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX > this.screenSize.width - this.size.width)
      newX = this.screenSize.width - this.size.width;
    if (newY > this.screenSize.height - this.size.height)
      newY = this.screenSize.height - this.size.height;
    this.position.move(newX, newY);
  }
}

export const changeWindow = programWindow => {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
};
