/**
 * Build-time identity of the card. The normal build is `roborock-vacuum-map-card`. The
 * sandbox test build (`npm run build:sandbox`) uses its own element name, so it can run
 * next to an installed release without either replacing the other, and it blocks every
 * command that could move the robot or change its settings (see sandbox.ts).
 */
export const CARD_ELEMENT: string = __CARD_ELEMENT__;
export const CARD_TYPE = `custom:${CARD_ELEMENT}`;
export const SANDBOX: boolean = __SANDBOX__;
