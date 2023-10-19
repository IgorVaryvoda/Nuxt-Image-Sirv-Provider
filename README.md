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

## List of supported transformations
Sirv's Nuxt Image integration uses intuitive names for each transformation. If you use a property that does not match any of the following supported options, it will be added in the URL as it is.

| Supported Parameter Name | Translates to Parameter | Description                                                                       |
|--------------------------|-------------------------|-----------------------------------------------------------------------------------|
| width                    | w                       | Width of image.                                                                   |
| height                   | h                       | Height of image.                                                                  |
| s                        | s                       | Resize the image by its biggest side                                              |
| quality                  | q                       | JPEG image quality (percentage).                                                  |
| fit                      | scale.option            | Image scaling options.                                                            |
| profile                  | profile                 | Apply a  Sirv [profile](https://sirv.com/help/articles/dynamic-imaging/profiles/) |
| format                   | format                  | Image format served (about WebP, about optimal).                                  |
| webpFallback             | webp-fallback           | Image format for browsers without WebP support.                                   |
| subsampling              | subsampling             | Chroma subsampling to reduce JPEG file size.                                      |
| gifCompression           | gif.lossy               | Apply lossy compression, to reduce GIF file size.                                 |
| crop                     | crop.type               | Automatically crop to edge of image contents; point of interest; or face.         |
| cropAr                   | crop.aspectratio        | Aspect ratio of the crop                                                          |
| cw                       | cw                      | Crop the image to a specific width.                                               | 
| ch                       | ch                      | Crop the image to a specific height.                                              |
| cx                       | cx                      | Position to start image crop (from top).                                          |
| cy                       | cy                      | Position to start image crop (from left).                                         |
| cropPaddingX             | crop.pad.x              | Add padding to left/right of crop area                                            |
| cropPaddingY             | crop.pad.y              | Add padding to top/bottom of crop area.                                           |
| canvasHeight             | canvas.height           | Create a canvas around the image (height).                                        |
| canvasWidth              | canvas.width            | Create a canvas around the image (width).                                         |
| canvasAr                 | canvas.aspectratio      | Aspect ratio of the canvas from 1-99 e.g. 16:9                                    |
| canvasPosition           | canvas.position         | Position of the canvas behind the image.                                          |
| canvasBorderWidth        | canvas.border.width     | Adds additional width left and right of the canvas.                               |
| canvasBorderHeight       | canvas.border.height    | Adds additional height above and below the canvas.                                |
| canvasBorderColor        | canvas.border.color     | Color of the canvas border e.g. E0AA80 or red.                                    |
| canvasBorderOpacity      | canvas.border.opacity   | Opacity of the canvas border.                                                     |
| watermark                | watermark               | Filepath of the image to be overlayed.                                            |
| watermarkPosition        | watermark.position      | Position of the watermark on the image.                                           |
| watermarkWidth           | watermark.scale.width   | Width of watermark.                                                               |
| watermarkHeight          | watermark.scale.height  | Height of watermark.                                                              |
| text                     | text                    | Display text on your image.                                                       |
| textBase64               | text.text64             | Alternative to text parameter, with Base64 encoding                               |
| textSize                 | text.size               | Width of text area in relation to image.                                          |
| textAlign                | text.align              | Align the multiline text.                                                         |
| textPosition             | text.position           | Location of the text on the image.                                                |
| textPositionX            | text.position.x         | Location of the text (from left).                                                 |
| textPositionY            | text.position.y         | Location of the text (from top).                                                  |
| textPositionGravity      | text.position.gravity   | Master location of the text on the image.                                         |
| textFontSize             | text.font.size          | Fix the size of the text in px.                                                   |
| textFontStyle            | text.font.style         | Style of the text.                                                                |
| textFontFamily           | text.font.family        | Choose a font e.g. "Open Sans".                                                   |
| textFontWeight           | text.font.weight        | Choose font weight (light, normal, semi-bold, bold, extra-bold).                  |
| textColor                | text.color              | Text color e.g. E0AA80 or E0AA8020.                                               |
| textOpacity              | text.opacity            | Text opacity.                                                                     |
| textOutlineWidth         | text.outline.width      | Add an outline around the text.                                                   |
| textoutlineColor         | text.outline.color      | Color of the text outline.                                                        |
| textOutlineOpacity       | text.outline.opacity    | Opacity of the text outline.                                                      |
| textOutlineBlur          | text.outline.blur       | Blur the edge of the text outline.                                                |
| textBackgroundColor      | text.background.color   | Background color e.g. E0AA80 or E0AA8020.                                         |
| textBackgroundOpacity    | text.background.opacity | Background opacity.                                                               |
| sharpen                  | sharpen                 | Sharpen the image.                                                                |
| blur                     | blur                    | Blur the image.                                                                   |
| grayscale                | grayscale               | Make the image black & white.                                                     |
| colorize                 | colorize                | Overlay a color on the image.                                                     |
| colorizeColor            | colorize.color          | The color of the colorize option.                                                 |
| colorizeOpacity          | colorize.opacity        | Opacity of the color overlay.                                                     |
| colortone                | colortone               | Change the color tone of the image.                                               | 
| colortoneColor           | colortone.color         | Apply a color tone to an image.                                                   |
| colortoneLevel           | colortone.level         | Set the level of blending with the original image.                                |
| colortoneMode            | colortone.mode          | Apply the color tone to the entire image or shadows/highlights only.              |
| vignette                 | vigette.value           | Adjust the depth of the vignette.                                                 |
| vignetteColor            | vigette.color           | Add a vignette (dark edges) around the image.                                     |
| lightness                | lightness               | Change the lightness of the image.                                                |
| colorlevelBlack          | colorlevel.black        | Adjust black level of image.                                                      |
| colorlevelWhite          | colorlevel.white        | Adjust white level of image.                                                      |
| histogram                | histogram               | Display a histogram of RGB levels.                                                |
| hue                      | hue                     | Change the hue of the image.                                                      |
| saturation               | saturation              | Change the saturation of the image.                                               |
| highlights               | highlights              | Change the highlights of the image.                                               | 
| shadows                  | shadows                 | Change the shadows of the image.                                                  |
| brightness               | brightness              | Change the brightness of the image.                                               |
| exposure                 | exposure                | Change the exposure of the image.                                                 | 
| contrast                 | contrast                | Change the contrast of the image.                                                 |
| rotate                   | rotate                  | Number of degrees to rotate the image.                                            |
| flip                     | flip                    | Flip image vertically (mirror).                                                   |
| flop                     | flop                    | Flip image horizontally (mirror).                                                 |
| opacity                  | opacity                 | Opacity of PNG images.                                                            |
| frameStyle               | frame.style             | Add a frame around the image.                                                     |
| frameColor               | frame.color             | Frame color e.g. E0AA80 or E0AA8020.                                              |
| frameWidth               | frame.width             | Frame width.                                                                      |
| frameRimColor            | frame.rim.color         | Frame rim color e.g. E0AA80 or E0AA8020.                                          |
| frameRimWidth            | frame.rim.width         | Frame rim width.                                                                  |
| pdfPage                  | page                    | Page number of PDF when converted to image.                                       |


> Learn more about [Sirv's Image transformations](https://sirv.com/help/article/dynamic-imaging) from the official documentation.
This is a demo of how to use [Nuxt 3 Image](https://image.nuxtjs.org) with [Sirv](https://sirv.com) as the image provider.
