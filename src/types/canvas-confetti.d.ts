declare module "canvas-confetti" {
  interface Options {
    particleCount?: number;
    spread?: number;
    startVelocity?: number;
    scalar?: number;
    origin?: { x?: number; y?: number };
    colors?: string[];
  }

  function confetti(options?: Options): Promise<null> | null;
  export = confetti;
}
