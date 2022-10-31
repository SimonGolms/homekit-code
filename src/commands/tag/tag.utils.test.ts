import { composeTag } from './tag.utils';

describe('composeTag', () => {
  test('get Setup Uri for switch', async () => {
    expect.assertions(1);
    const tag = composeTag('84131633');

    expect(tag).toBe(`<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg viewBox="0 0 150 50" xmlns="http://www.w3.org/2000/svg">
  <title>HomeKit Tag</title>
  <defs>
    <symbol id="0" viewBox="0 0 13 20"><path d="M2.12 8.04C2.12 7.04 2.17333 6.10667 2.28 5.24C2.4 4.37333 2.60667 3.62 2.9 2.98C3.20667 2.32667 3.61333 1.81333 4.12 1.44C4.64 1.06667 5.29333 0.879999 6.08 0.879999C6.86667 0.879999 7.51333 1.06667 8.02 1.44C8.54 1.81333 8.94667 2.32667 9.24 2.98C9.54667 3.62 9.76 4.37333 9.88 5.24C10 6.10667 10.06 7.04 10.06 8.04C10.06 9.04 10 9.97333 9.88 10.84C9.77333 11.7067 9.56667 12.4667 9.26 13.12C8.96667 13.7733 8.56 14.2867 8.04 14.66C7.53333 15.0333 6.88 15.22 6.08 15.22C5.28 15.22 4.62 15.0333 4.1 14.66C3.59333 14.2867 3.19333 13.7733 2.9 13.12C2.60667 12.4667 2.4 11.7067 2.28 10.84C2.17333 9.97333 2.12 9.04 2.12 8.04ZM3.86 8.04C3.86 8.76 3.88667 9.44667 3.94 10.1C3.99333 10.74 4.09333 11.3067 4.24 11.8C4.4 12.28 4.62667 12.6667 4.92 12.96C5.21333 13.24 5.6 13.38 6.08 13.38C6.56 13.38 6.94667 13.24 7.24 12.96C7.53333 12.6667 7.75333 12.28 7.9 11.8C8.06 11.3067 8.16667 10.74 8.22 10.1C8.27333 9.44667 8.3 8.76 8.3 8.04C8.3 7.32 8.27333 6.63333 8.22 5.98C8.18 5.32667 8.08 4.76 7.92 4.28C7.77333 3.78667 7.55333 3.4 7.26 3.12C6.96667 2.82667 6.57333 2.68 6.08 2.68C5.57333 2.68 5.16667 2.82667 4.86 3.12C4.56667 3.4 4.34667 3.78667 4.2 4.28C4.05333 4.76 3.96 5.32667 3.92 5.98C3.88 6.63333 3.86 7.32 3.86 8.04Z"/>      </symbol>
    <symbol id="1" viewBox="0 0 13 20"><path d="M2.64 3.86V2.02L6.22 0.879999H7.1V13.28H9.56V15H2.82V13.3H5.32V3.02L2.64 3.86Z"/></symbol>
    <symbol id="2" viewBox="0 0 13 20"><path d="M2.28 4.3C2.29333 4.02 2.35333 3.68667 2.46 3.3C2.58 2.91333 2.78 2.55333 3.06 2.22C3.34 1.87333 3.72 1.58 4.2 1.34C4.68 1.1 5.28 0.986666 6 0.999999C6.76 1.01333 7.37333 1.15333 7.84 1.42C8.30667 1.67333 8.66 2.00667 8.9 2.42C9.15333 2.82 9.31333 3.27333 9.38 3.78C9.46 4.27333 9.5 4.76667 9.5 5.26C9.48667 5.83333 9.38 6.37333 9.18 6.88C8.99333 7.38667 8.74667 7.87333 8.44 8.34C8.14667 8.80667 7.82 9.25333 7.46 9.68C7.1 10.1067 6.75333 10.52 6.42 10.92C6.08667 11.3067 5.78 11.6933 5.5 12.08C5.23333 12.4533 5.04667 12.82 4.94 13.18H9.72V15H2.46V13.56C2.71333 13.0133 3.02 12.48 3.38 11.96C3.74 11.44 4.11333 10.94 4.5 10.46C4.88667 9.96667 5.27333 9.49333 5.66 9.04C6.04667 8.58667 6.39333 8.15333 6.7 7.74C7.02 7.31333 7.28 6.90667 7.48 6.52C7.68 6.13333 7.78667 5.76 7.8 5.4C7.81333 5 7.8 4.63333 7.76 4.3C7.72 3.96667 7.62667 3.68 7.48 3.44C7.34667 3.2 7.16 3.01333 6.92 2.88C6.68 2.73333 6.37333 2.66 6 2.66C5.57333 2.66 5.22667 2.72 4.96 2.84C4.69333 2.94667 4.48 3.08667 4.32 3.26C4.17333 3.42 4.06667 3.6 4 3.8C3.94667 3.98667 3.92 4.15333 3.92 4.3H2.28Z"/></symbol>
    <symbol id="3" viewBox="0 0 13 20"><path d="M2.68 1.52C2.92 1.41333 3.19333 1.32 3.5 1.24C3.76667 1.17333 4.08667 1.10667 4.46 1.04C4.83333 0.973333 5.26 0.94 5.74 0.94C6.20667 0.94 6.67333 1 7.14 1.12C7.62 1.24 8.04667 1.44 8.42 1.72C8.80667 2 9.12 2.36667 9.36 2.82C9.6 3.27333 9.72 3.84 9.72 4.52C9.72 5.05333 9.64667 5.52 9.5 5.92C9.36667 6.30667 9.18 6.64 8.94 6.92C8.7 7.2 8.42 7.43333 8.1 7.62C7.78 7.79333 7.44 7.93333 7.08 8.04C7.42667 8.12 7.76667 8.24 8.1 8.4C8.43333 8.56 8.72667 8.76667 8.98 9.02C9.24667 9.27333 9.46 9.58667 9.62 9.96C9.78 10.32 9.86 10.74 9.86 11.22C9.86 11.7267 9.76 12.22 9.56 12.7C9.36 13.1667 9.07333 13.5867 8.7 13.96C8.32667 14.3333 7.87333 14.6333 7.34 14.86C6.80667 15.0733 6.20667 15.18 5.54 15.18C4.99333 15.18 4.52667 15.14 4.14 15.06C3.75333 14.9933 3.42667 14.9067 3.16 14.8C2.85333 14.6933 2.6 14.5667 2.4 14.42V12.5C2.66667 12.66 2.96667 12.8 3.3 12.92C3.58 13.0267 3.90667 13.1267 4.28 13.22C4.65333 13.3 5.05333 13.34 5.48 13.34C6.36 13.34 7.01333 13.1467 7.44 12.76C7.88 12.36 8.1 11.8 8.1 11.08C8.1 10.7333 8.02667 10.4333 7.88 10.18C7.73333 9.91333 7.53333 9.7 7.28 9.54C7.04 9.36667 6.74667 9.24 6.4 9.16C6.06667 9.06667 5.70667 9.02 5.32 9.02H3.36V7.22H5.32C6.12 7.22 6.76 7.01333 7.24 6.6C7.73333 6.18667 7.98 5.62 7.98 4.9C7.98 4.23333 7.78667 3.70667 7.4 3.32C7.02667 2.92 6.42 2.72 5.58 2.72C5.12667 2.72 4.72 2.76 4.36 2.84C4.01333 2.92 3.71333 3.01333 3.46 3.12C3.16667 3.24 2.90667 3.36667 2.68 3.5V1.52Z"/></symbol>
    <symbol id="4" viewBox="0 0 13 20"><path d="M8.8 1.12V8.76L8.82 9.6L9.56 9.58H10.32V11.36H9.62H8.78L8.8 12.64V14.98H7.14V12.64V11.38L6.24 11.36H1.94V9.88L6.98 1.12H8.8ZM7.14 4.46L7.2 3.84L3.82 9.58H6.24L7.16 9.6L7.14 8.78V4.46Z"/></symbol>
    <symbol id="5" viewBox="0 0 13 20"><path d="M9.06 1.12V2.82H4.78L4.52 6.14L5.74 6.02C6.23333 6.02 6.70667 6.11333 7.16 6.3C7.61333 6.47333 8.01333 6.74 8.36 7.1C8.72 7.44667 9.01333 7.88 9.24 8.4C9.46667 8.92 9.6 9.52 9.64 10.2C9.66667 10.68 9.59333 11.2133 9.42 11.8C9.26 12.3867 8.92667 12.9333 8.42 13.44C7.92667 13.9467 7.22667 14.3733 6.32 14.72C5.41333 15.0533 4.23333 15.2133 2.78 15.2H2.26L2.36 13.48C2.38667 13.48 2.48667 13.48 2.66 13.48C2.83333 13.4667 2.97333 13.4533 3.08 13.44C3.56 13.4133 4.06667 13.3533 4.6 13.26C5.14667 13.1533 5.65333 12.9933 6.12 12.78C6.6 12.5533 6.99333 12.2533 7.3 11.88C7.62 11.5067 7.78667 11.04 7.8 10.48C7.81333 9.70667 7.60667 9.09333 7.18 8.64C6.76667 8.17333 6.14667 7.92667 5.32 7.9C5.10667 7.9 4.88667 7.92 4.66 7.96C4.43333 8 4.21333 8.06 4 8.14C3.8 8.20667 3.61333 8.28667 3.44 8.38C3.28 8.47333 3.16 8.56 3.08 8.64C3.08 8.65333 3.04667 8.65333 2.98 8.64C2.92667 8.61333 2.86667 8.58667 2.8 8.56C2.72 8.53333 2.63333 8.50667 2.54 8.48L3.14 1.12H9.06Z"/></symbol>
    <symbol id="6" viewBox="0 0 13 20"><path d="M7.14 0.94C7.52667 0.94 7.85333 0.96 8.12 0.999999C8.4 1.04 8.62667 1.08 8.8 1.12C9 1.17333 9.16 1.22667 9.28 1.28V3.14C9.12 3.04667 8.93333 2.96 8.72 2.88C8.53333 2.81333 8.30667 2.75333 8.04 2.7C7.77333 2.63333 7.46667 2.6 7.12 2.6C6.61333 2.6 6.17333 2.72667 5.8 2.98C5.42667 3.23333 5.11333 3.58 4.86 4.02C4.60667 4.46 4.40667 4.98667 4.26 5.6C4.12667 6.2 4.04 6.84667 4 7.54C4.24 7.08667 4.56 6.7 4.96 6.38C5.36 6.04667 5.86 5.88 6.46 5.88C7.00667 5.88 7.49333 5.99333 7.92 6.22C8.36 6.43333 8.72667 6.74 9.02 7.14C9.32667 7.54 9.56 8.02 9.72 8.58C9.88 9.12667 9.96 9.72667 9.96 10.38C9.96 11.1267 9.85333 11.8 9.64 12.4C9.44 12.9867 9.16667 13.4867 8.82 13.9C8.47333 14.3133 8.06667 14.6267 7.6 14.84C7.13333 15.0533 6.63333 15.16 6.1 15.16C5.43333 15.16 4.85333 14.9867 4.36 14.64C3.88 14.2933 3.48 13.82 3.16 13.22C2.84 12.6067 2.6 11.8867 2.44 11.06C2.29333 10.2333 2.22 9.34667 2.22 8.4C2.22 7.38667 2.32 6.42667 2.52 5.52C2.72 4.61333 3.02 3.82 3.42 3.14C3.83333 2.46 4.34667 1.92667 4.96 1.54C5.58667 1.14 6.31333 0.94 7.14 0.94ZM4.18 10.88C4.3 11.7467 4.53333 12.38 4.88 12.78C5.24 13.18 5.68667 13.38 6.22 13.38C6.47333 13.38 6.72 13.3267 6.96 13.22C7.2 13.1 7.41333 12.92 7.6 12.68C7.8 12.44 7.95333 12.1333 8.06 11.76C8.18 11.3867 8.24 10.9333 8.24 10.4C8.24 9.58667 8.06667 8.92667 7.72 8.42C7.38667 7.91333 6.86 7.66 6.14 7.66C5.78 7.66 5.46667 7.75333 5.2 7.94C4.93333 8.11333 4.72 8.34667 4.56 8.64C4.4 8.93333 4.28667 9.28 4.22 9.68C4.15333 10.0667 4.14 10.4667 4.18 10.88Z"/></symbol>
    <symbol id="7" viewBox="0 0 13 20"><path d="M2.94 1.1H10.08V2.78L5.12 15H3.38L8.26 2.92H2.94V1.1Z"/></symbol>
    <symbol id="8" viewBox="0 0 13 20"><path d="M1.42 11.16C1.42 10.3467 1.68 9.58 2.2 8.86C2.72 8.12667 3.47333 7.48 4.46 6.92C3.83333 6.50667 3.37333 6.12 3.08 5.76C2.8 5.38667 2.61333 4.94 2.52 4.42C2.45333 4.04667 2.46 3.65333 2.54 3.24C2.62 2.81333 2.79333 2.42 3.06 2.06C3.34 1.7 3.72 1.4 4.2 1.16C4.68 0.919999 5.28 0.799999 6 0.799999C6.73333 0.799999 7.33333 0.913333 7.8 1.14C8.28 1.36667 8.65333 1.66 8.92 2.02C9.18667 2.36667 9.36 2.75333 9.44 3.18C9.52 3.60667 9.52667 4.02667 9.46 4.44C9.39333 4.93333 9.22667 5.36 8.96 5.72C8.70667 6.08 8.26 6.46 7.62 6.86C8.08667 7.04667 8.50667 7.28667 8.88 7.58C9.26667 7.87333 9.58667 8.20667 9.84 8.58C10.1067 8.95333 10.3067 9.34667 10.44 9.76C10.5867 10.1733 10.66 10.5867 10.66 11C10.66 11.7067 10.52 12.32 10.24 12.84C9.96 13.36 9.6 13.7933 9.16 14.14C8.72 14.4733 8.22 14.7267 7.66 14.9C7.11333 15.06 6.56667 15.14 6.02 15.14C5.40667 15.14 4.82 15.06 4.26 14.9C3.71333 14.74 3.22667 14.5 2.8 14.18C2.38667 13.8467 2.05333 13.4333 1.8 12.94C1.54667 12.4333 1.42 11.84 1.42 11.16ZM3.28 10.96C3.28 11.36 3.35333 11.7133 3.5 12.02C3.64667 12.3267 3.84667 12.5867 4.1 12.8C4.35333 13.0133 4.64667 13.1733 4.98 13.28C5.32667 13.3867 5.69333 13.44 6.08 13.44C6.45333 13.44 6.80667 13.3867 7.14 13.28C7.47333 13.16 7.76667 12.9933 8.02 12.78C8.27333 12.5533 8.47333 12.2867 8.62 11.98C8.76667 11.66 8.84 11.3 8.84 10.9C8.84 10.42 8.74667 10.02 8.56 9.7C8.38667 9.38 8.16 9.10667 7.88 8.88C7.61333 8.64 7.31333 8.44 6.98 8.28C6.64667 8.12 6.32 7.96667 6 7.82C5.76 7.96667 5.48 8.12667 5.16 8.3C4.85333 8.46 4.56 8.66 4.28 8.9C4 9.14 3.76 9.42667 3.56 9.76C3.37333 10.08 3.28 10.48 3.28 10.96ZM4.2 4.02C4.2 4.32667 4.25333 4.59333 4.36 4.82C4.48 5.03333 4.62667 5.22667 4.8 5.4C4.98667 5.56 5.18667 5.70667 5.4 5.84C5.61333 5.97333 5.82 6.10667 6.02 6.24C6.19333 6.10667 6.38 5.97333 6.58 5.84C6.79333 5.70667 6.99333 5.56 7.18 5.4C7.36667 5.24 7.52 5.05333 7.64 4.84C7.77333 4.62667 7.84 4.36667 7.84 4.06C7.84 3.56667 7.68 3.16667 7.36 2.86C7.05333 2.55333 6.6 2.4 6 2.4C5.4 2.4 4.94667 2.54667 4.64 2.84C4.34667 3.13333 4.2 3.52667 4.2 4.02Z"/></symbol>
    <symbol id="9" viewBox="0 0 13 20"><path d="M5.04 15.16C4.65333 15.16 4.31333 15.1333 4.02 15.08C3.74 15.0267 3.50667 14.9667 3.32 14.9C3.09333 14.82 2.9 14.7267 2.74 14.62V12.64C2.94 12.7867 3.16 12.9133 3.4 13.02C3.61333 13.1133 3.86 13.2 4.14 13.28C4.42 13.3467 4.73333 13.38 5.08 13.38C5.6 13.38 6.04667 13.2533 6.42 13C6.80667 12.7467 7.12667 12.3933 7.38 11.94C7.63333 11.4867 7.82667 10.9467 7.96 10.32C8.09333 9.68 8.16667 8.98667 8.18 8.24C7.94 8.78667 7.60667 9.25333 7.18 9.64C6.76667 10.0267 6.23333 10.22 5.58 10.22C5.06 10.22 4.59333 10.1133 4.18 9.9C3.76667 9.67333 3.41333 9.36 3.12 8.96C2.84 8.56 2.62 8.08667 2.46 7.54C2.3 6.98 2.22 6.37333 2.22 5.72C2.22 4.97333 2.32 4.30667 2.52 3.72C2.72 3.12 2.99333 2.62 3.34 2.22C3.7 1.80667 4.11333 1.49333 4.58 1.28C5.04667 1.05333 5.54667 0.94 6.08 0.94C6.74667 0.94 7.32 1.11333 7.8 1.46C8.29333 1.80667 8.7 2.28667 9.02 2.9C9.34 3.5 9.57333 4.21333 9.72 5.04C9.88 5.86667 9.96 6.75333 9.96 7.7C9.96 8.72667 9.86 9.69333 9.66 10.6C9.46 11.4933 9.15333 12.28 8.74 12.96C8.34 13.64 7.82667 14.18 7.2 14.58C6.58667 14.9667 5.86667 15.16 5.04 15.16ZM5.96 8.44C6.33333 8.44 6.65333 8.34 6.92 8.14C7.2 7.94 7.42667 7.68667 7.6 7.38C7.77333 7.06 7.89333 6.72 7.96 6.36C8.04 5.98667 8.06667 5.64 8.04 5.32C7.86667 4.4 7.59333 3.74 7.22 3.34C6.86 2.92667 6.41333 2.72 5.88 2.72C5.61333 2.72 5.35333 2.78 5.1 2.9C4.86 3.00667 4.64 3.18 4.44 3.42C4.25333 3.66 4.1 3.96667 3.98 4.34C3.86 4.71333 3.8 5.16667 3.8 5.7C3.8 6.51333 3.97333 7.17333 4.32 7.68C4.68 8.18667 5.22667 8.44 5.96 8.44Z"/></symbol>
    <symbol id="dash" viewBox="0 0 13 20"><path d="M2 8.92V7.12H10.18V8.92H2Z"/></symbol>
  </defs>
  <rect fill="#000000" height="50" width="150"/>
  <rect fill="#ffffff" height="48" width="148" x="1" y="1"/>
  <use href="#8" height="20" width="13" x="14.06" y="17"/>
  <use href="#4" height="20" width="13" x="26.26" y="17"/>
  <use href="#1" height="20" width="13" x="38.44" y="17"/>
  <use href="#dash" height="20" width="13" x="50.62" y="17"/>
  <use href="#3" height="20" width="13" x="62.82" y="17"/>
  <use href="#1" height="20" width="13" x="75" y="17"/>
  <use href="#dash" height="20" width="13" x="88" y="17"/>
  <use href="#6" height="20" width="13" x="99.38" y="17"/>
  <use href="#3" height="20" width="13" x="111.56" y="17"/>
  <use href="#3" height="20" width="13" x="123.75" y="17"/>
</svg>`);
  });
});