import type {
  FeTurbulenceAttributes,
  FeDisplacementMapAttributes,
  FeDiffuseLightingAttributes,
  FeDistantLightAttributes,
  FePointLightAttributes,
  FeSpotLightAttributes,
  LightTypes,
  FeBlendAttributes,
  FeColorMatrixAttributes,
  FeComponentTransferAttributes,
  FeComponentTransferFunctionAttributes,
  FeCompositeAttributes,
  FeConvolveMatrixAttributes,
  FeDropShadowAttributes,
  FeGaussianBlurAttributes,
  FeOffsetAttributes,
  FeFloodAttributes,
  FeImageAttributes,
  FeMergeAttributes,
  FeMergeNodeAttributes,
  FeMorphologyAttributes,
  FeSpecularLightingAttributes,
  FeTileAttributes,
} from "./svgFilterBuilderTypes";

export class SvgFilterBuilder {
  id: string;
  filter: SVGFilterElement;
  constructor(id: string, attributes: Record<string, string> = {}) {
    this.id = id;
    this.filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
    this.filter.setAttribute("id", id);
    this.filter.setAttribute("color-interpolation-filters", "sRGB");
    for (let key in attributes) {
      this.filter.setAttribute(key, attributes[key]);
    }
  }

  addElement(tag: keyof SVGElementTagNameMap, attrs: Record<string, string | number | boolean | FeComponentTransferFunctionAttributes>, parent = this.filter) {
    let elem = document.createElementNS("http://www.w3.org/2000/svg", tag);
    for (let key in attrs) {
        elem.setAttribute(key, attrs[key].toString());
    }
    parent.appendChild(elem);
    return elem;
  }
  
  addFilter(fn: (...args: any[]) => void) {
    fn.apply(this);
    return this;
  }

  appendTo(target: string | Element) {
    if (typeof target === "string") {
      target = document.querySelector(target) as Element;
    }
    if (target) {
      target.appendChild(this.filter);
    }
    return this;
  }

  feBlend(attrs: FeBlendAttributes) {
    this.addElement("feBlend", attrs);
    return this;
  }

  feColorMatrix(attrs: FeColorMatrixAttributes) {
    this.addElement("feColorMatrix", attrs);
    return this;
  }

  feComponentTransferFuncA(attrs: FeComponentTransferAttributes, funcAttrs: FeComponentTransferFunctionAttributes) {
    let elem = this.addElement("feComponentTransfer", attrs) as SVGFilterElement;
    this.addElement("feFuncA", funcAttrs, elem);
    return this;
  }

  feComponentTransferFuncB(attrs: FeComponentTransferAttributes, funcAttrs: FeComponentTransferFunctionAttributes) {
    let elem = this.addElement("feComponentTransfer", attrs) as SVGFilterElement;
    this.addElement("feFuncB", funcAttrs, elem);
    return this;
  }

  feComponentTransferFuncR(attrs: FeComponentTransferAttributes, funcAttrs: FeComponentTransferFunctionAttributes) {
    let elem = this.addElement("feComponentTransfer", attrs) as SVGFilterElement;
    this.addElement("feFuncR", funcAttrs, elem);
    return this;
  }

  feComponentTransferFuncG(attrs: FeComponentTransferAttributes, funcAttrs: FeComponentTransferFunctionAttributes) {
    let elem = this.addElement("feComponentTransfer", attrs) as SVGFilterElement;
    this.addElement("feFuncG", funcAttrs, elem);
    return this;
  }

  feComponentTransferWithAllFunctions(attrs: FeComponentTransferAttributes, funcAttrs: FeComponentTransferFunctionAttributes[]) {
    let elem = this.addElement("feComponentTransfer", attrs) as SVGFilterElement;
    funcAttrs.forEach((funcAttr) => {
      this.addElement(`feFunc${funcAttr.type}` as keyof SVGElementTagNameMap, funcAttr, elem);
  });
    return this;
  }

  feComposite(attrs: FeCompositeAttributes) {
    this.addElement("feComposite", attrs);
    return this;
  }

  feConvolveMatrix(attrs: FeConvolveMatrixAttributes) {
    this.addElement("feConvolveMatrix", attrs);
    return this;
  }

  feDiffuseLighting(attrs: FeDiffuseLightingAttributes) {
    this.addElement("feDiffuseLighting", attrs);
    return this;
  }

  feDiffuseLightingWithLight<K extends keyof LightTypes>(attrs: FeDiffuseLightingAttributes, type: K, lightAttrs: LightTypes[K]) {
    let elem = this.addElement("feDiffuseLighting", attrs) as SVGFilterElement;

    this.addElement(type, lightAttrs, elem);
    return this;
  }

  feDisplacementMap(attrs: FeDisplacementMapAttributes) {
    this.addElement("feDisplacementMap", attrs);
    return this;
  }

  feDistantLight(attrs: FeDistantLightAttributes) {
    this.addElement("feDistantLight", attrs);
    return this;
  }

  feDropShadow(attrs: FeDropShadowAttributes) {
    this.addElement("feDropShadow", attrs);
    return this;
  }

  feFlood(attrs: FeFloodAttributes) {
    this.addElement("feFlood", attrs);
    return this;
  }

  feGaussianBlur(attrs: FeGaussianBlurAttributes) {
    this.addElement("feGaussianBlur", attrs);
    return this;
  }

  feImage(attrs: FeImageAttributes) {
    this.addElement("feImage", attrs);
    return this;
  }

  feMerge(attrs: FeMergeAttributes) {
    this.addElement("feMerge", attrs);
    return this;
  }

  feMergeNode(attrs: FeMergeNodeAttributes) {
    this.addElement("feMergeNode", attrs);
    return this;
  }

  feMorphology(attrs: FeMorphologyAttributes) {
    this.addElement("feMorphology", attrs);
    return this;
  }

  feOffset(attrs: FeOffsetAttributes) {
    this.addElement("feOffset", attrs);
    return this;
  }

  fePointLight(attrs: FePointLightAttributes) {
    this.addElement("fePointLight", attrs);
    return this;
  }

  feSpecularLighting(attrs: FeSpecularLightingAttributes) {
    this.addElement("feSpecularLighting", attrs);
    return this;
  }

  feSpotLight(attrs: FeSpotLightAttributes) {
    this.addElement("feSpotLight", attrs);
    return this;
  }

  feTile(attrs: FeTileAttributes) {
    this.addElement("feTile", attrs);
    return this;
  }

  feTurbulence(attrs: FeTurbulenceAttributes) {
    this.addElement("feTurbulence", attrs);
    return this;
  }
}