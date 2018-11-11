export class ColorsApiResponse {
  mode: string;
  count: string;
  colors: Color[];
  seed: Color[];
  _links: ParentLinks;
  _embedded: Object;

  constructor(
    mode: string = '',
    count: string = '',
    colors: Color[] = [],
    seed: Color[] = [],
    links: ParentLinks = new ParentLinks(),
    embedded: Object = {}
  ) {
    this.mode = mode;
    this.count = count;
    this.colors = colors;
    this.seed = seed;
    this._links = links;
    this._embedded = embedded;
  }
}

class Color {
  hex: HexColor;
  rgb: RgbColor;
  hsl: HslColor;
  hsv: HsvColor;
  name: ColorName;
  cmyk: CmykColor;
  XYZ: XyzColor;
  image: Image;
  contrast: Contrast;
  _links: Links;
  _embedded: Object = {};

  constructor(
    hex: HexColor = new HexColor(),
    rgb: RgbColor = new RgbColor(),
    hsl: HslColor = new HslColor(),
    hsv: HsvColor = new HsvColor(),
    name: ColorName = new ColorName(),
    cmyk: CmykColor = new CmykColor(),
    XYZ: XyzColor = new XyzColor(),
    image: Image = new Image(),
    contrast: Contrast = new Contrast(),
    links: Links = new Links(),
    embedded: Object = {}
  ) {
    this.hex = hex;
    this.rgb = rgb;
    this.hsl = hsl;
    this.hsv = hsv;
    this.name = name;
    this.cmyk = cmyk;
    this.XYZ = XYZ;
    this.image = image;
    this.contrast = contrast;
    this._links = links;
    this._embedded = embedded;
  }
}

class HexColor {
  value: string;
  clean: string;

  constructor(
    value: string = '',
    clean: string = ''
  ) {
    this.value = value;
    this.clean = clean;
  }
}

class RgbColor {
  r: number;
  g: number;
  b: number;
  value: string;
  fraction: RgbColorFraction;

  constructor(
    r: number = 0,
    g: number = 0,
    b: number = 0,
    value: string = 'rgb(0, 0, 0)',
    fraction: RgbColorFraction = new RgbColorFraction()
  ) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.value = value;
    this.fraction = fraction;
  }
}

class RgbColorFraction {
  r: number;
  g: number;
  b: number;

  constructor(r: number = 0, g: number = 0, b: number = 0) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

class HslColor {
  h: number;
  s: number;
  l: number;
  value: string;
  fraction: HslColorFraction;

  constructor(
    h: number = 0,
    s: number = 0,
    l: number = 0,
    value: string = 'rgb(0, 0, 0)',
    fraction: HslColorFraction = new HslColorFraction()
  ) {
    this.h = h;
    this.s = s;
    this.l = l;
    this.value = value;
    this.fraction = fraction;
  }
}

class HslColorFraction {
  h: number;
  s: number;
  l: number;

  constructor(h: number = 0, s: number = 0, l: number = 0) {
    this.h = h;
    this.s = s;
    this.l = l;
  }
}

class HsvColor {
  h: number;
  s: number;
  v: number;
  value: string;
  fraction: HsvColorFraction;

  constructor(
    h: number = 0,
    s: number = 0,
    v: number = 0,
    value: string = 'rgb(0, 0, 0)',
    fraction: HsvColorFraction = new HsvColorFraction()
  ) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.value = value;
    this.fraction = fraction;
  }
}

class HsvColorFraction {
  h: number;
  s: number;
  v: number;

  constructor(h: number = 0, s: number = 0, v: number = 0) {
    this.h = h;
    this.s = s;
    this.v = v;
  }
}

class CmykColor {
  c: number;
  m: number;
  y: number;
  k: number;
  value: string;
  fraction: CmykColorFraction;

  constructor(
    c: number = 0,
    m: number = 0,
    y: number = 0,
    k: number = 0,
    value: string = 'cmyk(98, 57, 0, 84)',
    fraction: CmykColorFraction = new CmykColorFraction()
  ) {
    this.c = c;
    this.m = m;
    this.y = y;
    this.k = k;
    this.value = value;
    this.fraction = fraction;
  }
}

class CmykColorFraction {
  c: number;
  m: number;
  y: number;
  k: number;

  constructor(
    c: number = 0,
    m: number = 0,
    y: number = 0,
    k: number = 0
  ) {
    this.c = c;
    this.m = m;
    this.y = y;
    this.k = k;
  }
}

class XyzColor {
  x: number;
  y: number;
  z: number;
  value: string;
  fraction: XyzColorFraction;

  constructor(
    x: number = 0,
    y: number = 0,
    z: number = 0,
    value: string = 'cmyk(98, 57, 0, 84)',
    fraction: XyzColorFraction = new XyzColorFraction()
  ) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.value = value;
    this.fraction = fraction;
  }
}

class XyzColorFraction {
  x: number;
  y: number;
  z: number;

  constructor(
    x: number = 0,
    y: number = 0,
    z: number = 0
  ) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

class ColorName {
  value: string;
  closest_named_hex: string;
  exact_match_name: boolean;
  distance: number;

  constructor(
    value: string = '',
    closest_named_hex: string = '',
    exact_match_name: boolean = false,
    distance: number = 0
  ) {
    this.value = value;
    this.closest_named_hex = closest_named_hex;
    this.exact_match_name = exact_match_name;
    this.distance = distance;
  }
}

class Image {
  bare: string;
  named: string;

  constructor(
    bare: string = '',
    named: string = ''
  ) {
    this.bare = bare;
    this.named = named;
  }
}

class Contrast {
  value: string;

  constructor(
    value: string = ''
  ) {
    this.value = value;
  }
}

class Links {
  self: Self;

  constructor(
    self: Self = new Self()
  ) {
    this.self = self;
  }
}

class Self {
  href: string;

  constructor(
    href: string = ''
  ) {
    this.href = href;
  }
}

class ParentLinks {
  self: string;
  schemes: Scheme;

  constructor(
    self: string = '',
    schemes: Scheme = new Scheme()
  ) {
    this.self = self;
    this.schemes = schemes;
  }
}

class Scheme {
  monochrome: string;
  'monochrome-dark': string;
  'monochrome-light': string;
  analogic: string; complement: string;
  'analogic-complement': string;
  triad: string;
  quad: string;

  constructor(
    monochrome: string = '',
    monochrome_dark: string = '',
    monochrome_light: string = '',
    analogic: string = '',
    complement: string = '',
    analogic_complement: string = '',
    triad: string = '',
    quad: string = ''
  ) {
    this.monochrome = monochrome;
    this['monochrome-dark'] = monochrome_dark;
    this['monochrome-light'] = monochrome_light;
    this.analogic = analogic;
    this.complement = complement;
    this['analogic-complement'] = analogic_complement;
    this.triad = triad;
    this.quad = quad;
  }
}
