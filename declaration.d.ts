declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.svg" {
  const svg: any;
  export default svg;
}
