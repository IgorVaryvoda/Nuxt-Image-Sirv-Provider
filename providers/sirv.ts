import { joinURL } from 'ufo'
import type { ProviderGetImage } from '~/types'
import { createOperationsGenerator } from '#image'

export const operationsGenerator = createOperationsGenerator({
    keyMap: {
        width: 'w',
        height: 'h',
        format: 'format',
        quality: 'q',
        crop: 'cw',
    },
    valueMap: {
        // fit: {
        //     fill: 'scale',
        //     inside: 'max',
        //     outside: 'min',
        //     cover: 'cover',
        //     contain: 'fill',
        //     clamp: 'clamp',
        //     clip: 'clip',
        //     facearea: 'facearea',
        //     fillMax: 'fillmax'
        // },
        format: {
            gif: 'gif',
            jpg: 'jpg',
            mp4: 'mp4',
            png: 'png',
            webp: 'webp'
        }
    },
    joinWith: '&',
    formatter: (key: any, value: any) => `${key}=${value}`
})

export const getImage: ProviderGetImage = (src, { modifiers = {}, baseURL = '/' } = {}) => {
    const operations = operationsGenerator(modifiers)
    return {
        url: joinURL(baseURL, src + (operations ? ('?' + operations) : ''))
    }
}