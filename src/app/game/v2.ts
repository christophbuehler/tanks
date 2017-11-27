export class V2 {
    constructor(
        public x: number,
        public y: number
    ) { }

    add(v2: V2): V2 {
        return new V2(this.x + v2.x, this.y + v2.y);
    }

    subtract(v2: V2): V2 {
        return new V2(this.x - v2.x, this.y - v2.y);
    }

    dist(v2: V2): number {
      const x = Math.abs(this.x - v2.x);
      const y = Math.abs(this.y - v2.y);
      return Math.sqrt(x * x + y * y);
    }

    pointTo(v2: V2, radius: number): V2 {
      const phi = Math.atan2(v2.y - this.y, v2.x - this.x);
      return new V2(Math.cos(phi) * radius, Math.sin(phi) * radius);
    }
}
