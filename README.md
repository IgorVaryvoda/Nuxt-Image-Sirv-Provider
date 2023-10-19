---
title: Sirv
description: Nuxt Image integration with Sirv media transformation and delivery platform.
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/image/blob/main/src/runtime/providers/sirv.ts
    size: xs
---
Integration between [Sirv](https://sirv.com/) and the image module.

To use the Sirv provider, you need to set your Sirv account URL-endpoint as the base url like below.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  image: {
    sirv: {
      baseURL: 'https://youralias.sirv.com/' //you can use a custom domain too, more info - https://sirv.com/help/articles/multiple-domains/ 
    }
  }
})
```

> Get your alias from your [Sirv account details](https://my.sirv.com/#/account/settings) 

## Sirv `fit` Parameters
to be added

## Sirv Modifiers

On top of the standard [Nuxt Image modifiers](/usage/nuxt-img#modifiers), a user can also leverage sirv-specific transformation parameters provided in the `modifier` prop.

### `format`
if not format is specified, Sirv will deliver your images in the optimal format by default.
Alternatively, you can specify a custom format for the image like so:

### `profiles`

Use [Sirv profiles](https://sirv.com/help/profiles) to combine multiple transformation options into a single parameter.
For example, combine this and that and blah blah and get this.

### `grayscale`

Turn your image to a grayscale version using the `grayscale` modifier.

```html
<NuxtImg
  provider="sirv"
  src="/default-image.jpg"
  height="300"
  :modifiers="{grayscale: true}"
/>
```


### `border`

Add a border to your images using the `border` modifier. You can also set its width and color.

```html
<NuxtImg
  provider="sirv"
  src="/default-image.jpg"
  width="300"
  :modifiers="{border: ''}"
/>
```


### `rotate`

Use the `rotate` modifier to rotate your image. Possible values are - 

```html
<NuxtImg
  provider="sirv"
  src="/default-image.jpg"
  :modifiers="{rotate: 90}"
/>
```



## Watermarks and Text Overlay
Using Sirv's Nuxt Image integration, you can overlay images or text over other images for watermarking or creating a dynamic banner using custom text!

### `watermark`

Overlay an image on top of another image (base image) using the `overlayImage` modifier. You can use this to create dynamic banners, watermarking, etc.

```html
<NuxtImg
  provider="sirv"
  src="/default-image.jpg"
  :modifiers=""
  />
```
Read more about watermarks [here](https://sirv.com/help/articles/dynamic-imaging/watermark/).
### Overlay Text

You can overlay text on an image and apply various transformations to it as per your needs.

```html
<NuxtImg
  provider="sirv"
  src="/default-image.jpg"
  :modifiers=""
/>
```

Read more about Sirv's overlay transformation parameters [here]()

## Image Enhancement Modifiers

### `contrast`
Enhance contrast of an image using the `effectContrast` modifier.

```html
<NuxtImg
  provider="sirv"
  src="/default-image.jpg"
  height="300"
  :modifiers="{effectContrast: true}"
/>
```

### `Sharpen`
Sharpen the input image using the `effectSharpen` modifier.

```html
<NuxtImg
  provider="sirv"
  src="/default-image.jpg"
  height="300"
  :modifiers="{effectSharpen: 10}"
/>
```

## List of supported transforms
Sirv's Nuxt Image integration uses intuitive names for each transformation. If you use a property that does not match any of the following supported options, it will be added in the URL as it is.

| Supported Parameter Name | Translates to Parameter | Description                                               |
|--------------------------|-------------------------|-----------------------------------------------------------|
| width                    | w                       | width of the image                                        |
| height                   | h                       | height of the image                                       |
| s                        | s                       | resize the image by its biggest side                      |
| quality                  | q                       | quality of the image                                      |
| fit                      | scale.option            | fit                                                       |
| profile                  | profile                 | apply a predefined profile                                |
| format                   | format                  | change image format                                       |
| webpFallback             | webp-fallback           | WebP fallback for unsupported browsers                    |
| subsampling              | subsampling             | What subsampling to use                                   |
| gifCompression           | gif.lossy               | Enable GIF compression                                    |
| crop                     | crop.type               | Type of crop, available values (trim, poi, facedetection) |
| cropAr                   | crop.aspectratio        | Crop aspect ratio                                         |
| cw                       | cw                      | crop width                                                |
| ch                       | ch                      | Crop height                                               |
| cx                       | cx                      | Crop x                                                    |
| cy                       | cy                      | Crop Y                                                    |
| cropPaddingX             | crop.pad.x              | Crop padding                                              |
| cropPaddingY             | crop.pad.y              |                                                           |
| canvasHeight             | canvas.height           |                                                           |
| canvasWidth              | canvas.width            |                                                           |
| canvasAr                 | canvas.aspectratio      |                                                           |
| canvasPosition           | canvas.position         |                                                           |
| canvasBorderWidth        | canvas.border.width     |                                                           |
| canvasBorderHeight       | canvas.border.height    |                                                           |
| canvasBorderColor        | canvas.border.color     |                                                           |
| canvasBorderOpacity      | canvas.border.opacity   |                                                           |
| watermark                | watermark               |                                                           |
| watermarkPosition        | watermark.position      |                                                           |
| watermarkWidth           | watermark.scale.width   |                                                           |
| watermarkHeight          | watermark.scale.height  |                                                           |
| text                     | text                    |                                                           |
| textBase64               | text.text64             |                                                           |
| textSize                 | text.size               |                                                           |
| textAlign                | text.align              |                                                           |
| textPosition             | text.position           |                                                           |
| textPositionX            | text.position.x         |                                                           |
| textPositionY            | text.position.y         |                                                           |
| textPositionGravity      | text.position.gravity   |                                                           |
| textFontSize             | text.font.size          |                                                           |
| textFontStyle            | text.font.style         |                                                           |
| textFontFamily           | text.font.family        |                                                           |
| textFontWeight           | text.font.weight        |                                                           |
| textColor                | text.color              |                                                           |
| textOpacity              | text.opacity            |                                                           |
| textOutlineWidth         | text.outline.width      |                                                           |
| textoutlineColor         | text.outline.color      |                                                           |
| textOutlineOpacity       | text.outline.opacity    |                                                           |
| textOutlineBlur          | text.outline.blur       |                                                           |
| textBackgroundColor      | text.background.color   |                                                           |
| textBackgroundOpacity    | text.background.opacity |                                                           |
| sharpen                  | sharpen                 |                                                           |
| blur                     | blur                    |                                                           |
| grayscale                | grayscale               |                                                           |
| colorize                 | colorize                |                                                           |
| colorizeColor            | colorize.color          |                                                           |
| colorizeOpacity          | colorize.opacity        |                                                           |
| colortone                | colortone               |                                                           |
| colortoneColor           | colortone.color         |                                                           |
| colortoneLevel           | colortone.level         |                                                           |
| colortoneMode            | colortone.mode          |                                                           |
| vignette                 | vigette.value           |                                                           |
| vignetteColor            | vigette.color           |                                                           |
| lightness                | lightness               |                                                           |
| colorlevelBlack          | colorlevel.black        |                                                           |
| colorlevelWhite          | colorlevel.white        |                                                           |
| histogram                | histogram               |                                                           |
| hue                      | hue                     |                                                           |
| saturation               | saturation              |                                                           |
| highlights               | highlights              |                                                           |
| shadows                  | shadows                 |                                                           |
| brightness               | brightness              |                                                           |
| exposure                 | exposure                |                                                           |
| contrast                 | contrast                |                                                           |
| rotate                   | rotate                  |                                                           |
| flip                     | flip                    |                                                           |
| flop                     | flop                    |                                                           |
| opacity                  | opacity                 |                                                           |
| frameStyle               | frame.style             |                                                           |
| frameColor               | frame.color             |                                                           |
| frameWidth               | frame.width             |                                                           |
| frameRimColor            | frame.rim.color         |                                                           |
| frameRimWidth            | frame.rim.width         |                                                           |
| pdfPage                  | page                    |                                                           |

> Learn more about [Sirv's Image transformations](https://sirv.com/help/article/dynamic-imaging) from the official documentation.
This is a demo of how to use [Nuxt 3 Image](https://image.nuxtjs.org) with [Sirv](https://sirv.com) as the image provider.
