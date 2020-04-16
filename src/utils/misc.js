/* eslint-disable import/prefer-default-export */

export function convertFromPixelsToRem(size) {
  return `${(size / 16).toFixed(4)}rem`;
}
