//TODO: Implement hexToRgb
export function hexToRgb(hex: string): {r: number, g: number, b: number} {
  // 'f00'
  if (hex.length === 3) {
    let [hr, hg, hb] = hex.split('');
    return hexToRgb(`${hr}${hr}${hg}${hg}${hb}${hb}`); // 'ff0000'
  }
  let [r, g, b] = [0, 2, 4]
    .map(offset => hex.substring(offset, offset + 2))
    .map(hexColor => parseInt(hexColor, 16));
  return { r, g, b };
}

//TODO: Implement rgbToHex
export function rgbToHex(r: number, g: number, b: number): string {
  return [r, g, b]
    .map(decColor => Math.max(0, Math.min(255, decColor)).toString(16))
    .map(hexColor => hexColor.length === 1 ? `0${hexColor}` : hexColor)
    .join('')
}