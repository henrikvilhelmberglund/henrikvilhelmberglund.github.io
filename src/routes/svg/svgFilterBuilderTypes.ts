type inType = "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
type in2Type = "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
type mode =
	| "normal"
	| "multiply"
	| "screen"
	| "overlay"
	| "darken"
	| "lighten"
	| "color-dodge"
	| "color-burn"
	| "hard-light"
	| "soft-light"
	| "difference"
	| "exclusion"
	| "hue"
	| "saturation"
	| "color"
	| "luminosity";

export type FeBlendAttributes = {
	in?: inType;
	in2?: in2Type;
	mode?: mode;
	result?: string;
};

export type FeColorMatrixAttributes = {
	in?: inType;
	values: string;
	result?: string;
};

export type FeComponentTransferFunctionAttributes = {
	type: string;
	tableValues?: string;
	exponent?: string;
	slope?: string;
};

export type FeComponentTransferAttributes = {
	in?: inType;
	result?: string;
	funcAttrs?: FeComponentTransferFunctionAttributes;
};

export type FeCompositeAttributes = {
	in?: inType;
	in2?: in2Type;
	operator: string;
	result?: string;
};

export type FeConvolveMatrixAttributes = {
	in?: inType;
	order?: number;
	kernelMatrix: string;
	bias?: number;
	divisor?: number;
	targetX?: number;
	targetY?: number;
	edgeMode?: "duplicate" | "wrap" | "none";
	preserveAlpha?: boolean;
	result?: string;
};

export type LightTypes = {
  feDistantLight: FeDistantLightAttributes;
  fePointLight: FePointLightAttributes;
  feSpotLight: FeSpotLightAttributes;
};

export type FeDiffuseLightingAttributes = {
	in?: inType;
	diffuseConstant?: number;
	surfaceScale?: number;
	"lighting-color"?: string;
	result?: string;
};

export type FeDisplacementMapAttributes = {
	in?: inType;
	in2?: inType;
	scale?: number;
	xChannelSelector?: "R" | "G" | "B" | "A";
	yChannelSelector?: "R" | "G" | "B" | "A";
	result?: string;
};

export type FeDistantLightAttributes = {
	azimuth?: number;
	elevation?: number;
};

export type FeDropShadowAttributes = {
	in?: inType;
	dx?: string | number;
	dy?: string | number;
	stdDeviation?: string | number;
	"flood-color"?: string;
	result?: string;
};

export type FeFloodAttributes = {
	"flood-color"?: string;
	"flood-opacity"?: number;
	result?: string;
};

export type FeFuncAAttributes = {
	type: "identity" | "table" | "discrete" | "linear" | "gamma";
	tableValues?: number[];
	slope?: number;
	intercept?: number;
	amplitude?: number;
	exponent?: number;
	offset?: number;
};

export type FeFuncBAttributes = FeFuncAAttributes;
export type FeFuncGAttributes = FeFuncAAttributes;
export type FeFuncRAttributes = FeFuncAAttributes;

export type FeGaussianBlurAttributes = {
	in?: inType;
	stdDeviation: string;
	result?: string;
};

export type FeImageAttributes = {
	"xlink:href"?: string;
	result?: string;
};


export type FeMergeAttributes = {
	result?: string;
};

export type FeMergeNodeAttributes = {
	in?: inType;
};

export type FeMorphologyAttributes = {
	in?: inType;
	operator?: "erode" | "dilate";
	radius?: string | number;
	result?: string;
};

export type FeOffsetAttributes = {
	in?: inType;
	dx?: string | number;
	dy?: string | number;
	result?: string;
};

export type FePointLightAttributes = {
	x?: number;
	y?: number;
	z?: number;
	result?: string;
};

export type FeSpecularLightingAttributes = {
	in?: inType;
	surfaceScale?: number;
	specularConstant?: number;
	specularExponent?: number;
	kernelUnitLength?: number;
	"lighting-color"?: string;
	result?: string;
};

export type FeSpotLightAttributes = {
	x?: number;
	y?: number;
	z?: number;
	pointsAtX?: number;
	pointsAtY?: number;
	pointsAtZ?: number;
	specularExponent?: number;
	limitingConeAngle?: number;
	color?: string;
	result?: string;
};

export type FeTileAttributes = {
	in?: inType;
	result?: string;
};

export type FeTurbulenceAttributes = {
	baseFrequency?: string;
	numOctaves?: number;
	seed?: number;
	stitchTiles?: "noStitch" | "stitch";
	type?: "fractalNoise" | "turbulence";
	result?: string;
};
