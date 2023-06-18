import '../index.css';
const color = {
  white: '#ffffff',
  gray: '#e1e1e1',
  black: '#000000',

  yellow: '#FEE500',
  green: '#506850',
  opacity: 'rgba(0,0,0,0.25)',
};
const size = {
  8: 'font-size: 8px',
  12: 'font-size: 12px',
  14: 'font-size: 14px',
  20: 'font-size: 20px',
  50: 'font-size: 50px',
  100: 'font-size: 100px',
};
const weight = {
  bold: 'font-weight: 600',
  regular: 'font-weight: 400',
};
const fontFamily = {
  logo: 'KOTRAHOPE',
  defaultFont: 'omyu_pretty',
};
const radius = {
  rounder: 'border-radius: 12px',
  round: 'border-radius: 4px',
};
const shadow = {
  tree: `drop-shadow(0px 4px 4px ${color.opacity}`,
};

const common = { color, size, weight, fontFamily, radius, shadow };
export default common;
