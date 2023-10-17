import { joinURL } from 'ufo'
import {ProviderGetImage} from "@nuxt/image";
import { createOperationsGenerator } from '#image'
export const operationsGenerator = createOperationsGenerator({
    keyMap: {
        width: 'w',
        height: 'h',
        format: 'format',
        quality: 'q',
        profile: 'profile',
        fit: 'scale.option',
        crop: 'crop.type',
        cropar: 'crop.aspectratio',
        cw: 'cw',
        ch: 'ch',
        watermark: 'watermark',
        sharpen: 'sharpen',
        blur: 'blur',
        grayscale: 'grayscale',
        colorize: 'colorize',
        colortone: 'colortone',
        lightness: 'lightness',
        hue: 'hue',
        saturation: 'saturation',
        highlights: 'highlights',
        shadows: 'shadows',
        brightness: 'brightness',
        exposure: 'exposure',
        contrast: 'contrast',
        rotate: 'rotate',
        pdfpage: 'page',
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
            gif: 'gif',
            jpeg: 'jpg',
            jpg: 'jpg',
            png: 'png',
            webp: 'webp',
            eps: 'eps',
            psd: 'psd',
            svg: 'svg',
            tif: 'tif',
            ai: 'ai',
            heic: 'heic',
            original: 'original',
        }
    },
    joinWith: '&',
    formatter: (key: any, value: any) => `${key}=${value}`
})

export const getImage: ProviderGetImage = (src, { modifiers = {}, baseURL = '/' } = {}) => {
    let additionalOperations = '';

    if (modifiers.text) {
        let textIndex = 0;
        for (const textObj of modifiers.text) {
            for (const [key, value] of Object.entries(textObj)) {
                additionalOperations += `&text.${textIndex}.${key}=${value}`;
            }
            textIndex++;
        }
    }

    const operations = operationsGenerator(modifiers);
    return {
        url: joinURL(baseURL, src + (operations ? ('?' + operations) : '')) + additionalOperations
    };
}