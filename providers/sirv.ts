import { joinURL } from 'ufo'
import { ProviderGetImage } from "@nuxt/image";
import { createOperationsGenerator } from '#image'
const deleteHash = (value: string) => value.startsWith('#') ? value.replace('#', '') : value
export const operationsGenerator = createOperationsGenerator({
  keyMap: {
    width: 'w',
    height: 'h',
    s: 's',
    quality: 'q',
    fit: 'scale.option',
    profile: 'profile',
    format: 'format',
    webpFallback: 'webp-fallback',
    subsampling: 'subsampling',
    gifCompression: 'gif.lossy',
    crop: 'crop.type',
    cropAr: 'crop.aspectratio',
    cw: 'cw',
    ch: 'ch',
    cx: 'cx',
    cy: 'cy',
    cropPaddingX: 'crop.pad.x',
    cropPaddingY: 'crop.pad.y',
    canvasHeight: 'canvas.height',
    canvasWidth: 'canvas.width',
    canvasAr: 'canvas.aspectratio',
    canvasPosition: 'canvas.position',
    canvasBorderWidth: 'canvas.border.width',
    canvasBorderHeight: 'canvas.border.height',
    canvasBorderColor: 'canvas.border.color',
    canvasBorderOpacity: 'canvas.border.opacity',
    watermark: 'watermark',
    watermarkPosition: 'watermark.position',
    watermarkWidth: 'watermark.scale.width',
    watermarkHeight: 'watermark.scale.height',
    text: 'text',
    textBase64: 'text.text64',
    textSize: 'text.size',
    textAlign: 'text.align',
    textPosition: 'text.position',
    textPositionX: 'text.position.x',
    textPositionY: 'text.position.y',
    textPositionGravity: 'text.position.gravity',
    textFontSize: 'text.font.size',
    textFontStyle: 'text.font.style',
    textFontFamily: 'text.font.family',
    textFontWeight: 'text.font.weight',
    textColor: 'text.color',
    textOpacity: 'text.opacity',
    textOutlineWidth: 'text.outline.width',
    textoutlineColor: 'text.outline.color',
    textOutlineOpacity: 'text.outline.opacity',
    textOutlineBlur: 'text.outline.blur',
    textBackgroundColor: 'text.background.color',
    textbackgroundOpacity: 'text.background.opacity',
    sharpen: 'sharpen',
    blur: 'blur',
    grayscale: 'grayscale',
    colorize: 'colorize',
    colorizeColor: 'colorize.color',
    colorizeOpacity: 'colorize.opacity',
    colortone: 'colortone',
    colortoneColor: 'colortone.color',
    colortoneLevel: 'colortone.level',
    colortoneMode: 'colortone.mode',
    vignette: 'vigette.value',
    vignetteColor: 'vigette.color',
    lightness: 'lightness',
    colorlevelBlack: 'colorlevel.black',
    colorlevelWhite: 'colorlevel.white',
    histogram: 'histogram',
    hue: 'hue',
    saturation: 'saturation',
    highlights: 'highlights',
    shadows: 'shadows',
    brightness: 'brightness',
    exposure: 'exposure',
    contrast: 'contrast',
    rotate: 'rotate',
    flip: 'flip',
    flop: 'flop',
    opacity: 'opacity',
    frameStyle: 'frame.style',
    frameColor: 'frame.color',
    frameWidth: 'frame.width',
    frameRimColor: 'frame.rim.color',
    frameRimWidth: 'frame.rim.width',
    pdfPage: 'page',
  },
  valueMap: {
    fit: {
      fill: 'ignore',
      inside: 'noup',
      outside: 'min',
      cover: 'fill',
      contain: 'ignore',
      fillMax: 'fillmax'
    },
    crop: {
      face: 'face',
      poi: 'poi',
      trim: 'trim',
    },
    format: {
      jpeg: 'jpg',
      original: 'original',
    },
    canvasBorderColor(value: string) {
      return deleteHash(value)
    },
    frameColor(value: string) {
      return deleteHash(value)
    },
    frameRimColor(value: string) {
      return deleteHash(value)
    },
    colorizeColor(value: string) {
      return deleteHash(value)
    }
  },
  joinWith: '&',
  formatter: (key: any, value: any) => `${key}=${value}`
})

export const getImage: ProviderGetImage = (src, { modifiers = {}, baseURL = '/' } = {}) => {
  const operations = operationsGenerator(modifiers);
  return {
    url: joinURL(baseURL, src + (operations ? ('?' + operations) : ''))
  };
}
