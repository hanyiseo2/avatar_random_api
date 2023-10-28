import xml from "xml";
import _ from "lodash";

export type SVGElement = {
  [tag: string]: {
    _attr: {
      [property: string]: string;
      fill: string;
    };
  };
};

export class SVG {
  private elements: SVGElement[];
  private svg: {
    _attr: {
      width: number;
      height: number;
      viewBox: string;
      fill: string;
      xmlns: string;
    };
  };

  constructor(width: number, height: number) {
    // <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    this.svg = {
      _attr: {
        width,
        height,
        viewBox: `0 0 ${width} ${height}`,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
    };
    this.elements = [];
  }

  public addElement(elem: SVGElement[], fill?: string): SVG {
    const elemCopy = _.cloneDeep(elem);
    if (fill) {
      elemCopy[Object.keys(elemCopy)[0]]._attr.fill = fill;
    }
    this.elements.push(elemCopy[0]);
    return this;
  }

  public toXml(): string {
    return xml({ svg: [{ _attr: this.svg._attr }, ...this.elements] });
  }

  static createPathElement(d: string, fill: string): SVGElement {
    return {
      path: {
        _attr: { d, fill },
      },
    };
  }

  static createRectElement(
    width: string,
    height: string,
    fill: string
  ): SVGElement {
    return {
      rect: {
        _attr: { width, height, fill },
      },
    };
  }
}
