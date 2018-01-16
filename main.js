let trees = [];
let amount = 1;

/**
 * Setup p5 canvas.
 *
 */
function setup() {
  createCanvas(500, 500);
  noLoop();
}

/**
 * Draw the p5 canvas.
 *
 */
function draw() {
  background(236, 240, 241);
  stroke('rgba(22, 160, 133, 0.7)');
  push();
  for (let index = 1; index <= amount; index++) {
    push();
    const tree = new Branch(createVector(width / 2, height), 100);
    trees.push(tree);
    tree.draw();
    pop();
  }
}
