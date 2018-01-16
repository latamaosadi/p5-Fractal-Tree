/**
 * Tree object called Branch.
 *
 * @class Branch
 * @author Robert Latamaosadi <robert.latamaosadi@gmail.com>
 */

class Branch {
  /**
   * Creates an instance of Branch.
   * @param {p5.Vector} beginPoint
   * @param {number} len
   * @param {number} [angle=0]
   * @param {number} [gen=0]
   * @param {number} [weight=4]
   * @memberof Branch
   */
  constructor(beginPoint, len, angle = 0, gen = 0, weight = 4) {
    let newPoint = createVector(0, -len);
    newPoint.rotate(angle);
    let endPoint = p5.Vector.add(beginPoint, newPoint);
    this.len = len;
    this.begin = beginPoint;
    this.end = endPoint;
    this.angle = angle;
    this.gen = gen;
    this.branches = [];
    this.weight = weight;

    if (this.gen < 10) {
      let splitAmount = random(2, 7);
      if (splitAmount % 2 === 1) {
        splitAmount -= 1;
      }
      this.split(splitAmount);
    }
  }

  /**
   * Split branch based on the amount given.
   *
   * @param {number} amount
   * @memberof Branch
   */
  split(amount) {
    for (let index = 1; index <= amount; index++) {
      if (this.gen > 4 && random() > 0.7) {
        return;
      }
      const branchAngle = index <= amount / 2 ? index : amount - index + 1;
      this.createBranch(pow(-1, index) * (PI / 4) / branchAngle);
    }
  }

  /**
   * Create a new Branch object based on the angle.
   *
   * @param {number} angle
   * @memberof Branch
   */
  createBranch(angle) {
    push();
    let newBranch = new Branch(this.end, this.len * random(0.4, 0.9), this.angle - angle, this.gen + 1, this.weight - 0.4);
    this.branches.push(newBranch);
    newBranch.draw();
    pop();
  }

  /**
   * Draw the branch based on it's begin and end point.
   *
   * @memberof Branch
   */
  draw() {
    translate(this.begin.x, this.begin.y);
    strokeWeight(this.weight);
    line(0, 0, this.end.x - this.begin.x, this.end.y - this.begin.y);
  }
}