// src/types/fixes.d.ts

// Patch for Carbon Web Components missing DOM types
interface PointerLockOptions {
  unadjustedMovement?: boolean;
}

interface GetHTMLOptions {
  sanitize?: boolean;
  sanitizeFn?: (input: string) => string;
}
