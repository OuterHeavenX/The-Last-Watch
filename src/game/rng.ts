export class RNG { constructor(public seed=1){} next(){this.seed=(this.seed*1664525+1013904223)>>>0;return this.seed/4294967296;} }
