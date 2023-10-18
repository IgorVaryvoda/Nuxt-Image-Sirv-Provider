<template>
  <div class="p-6 min-h-screen flex flex-col justify-center items-center">
    <h2 class="text-3xl mb-6">Sirv Nuxt Image provider</h2>
    <div class="mb-8">
      <h3 class="text-2xl mb-2">JPG to PNG conversion</h3>
      <NuxtImg provider="sirv" src="/harris-large.jpg" width="500" format="png" class="shadow-lg"
        crossorigin="anonymous" />
    </div>

    <div class="mb-8">
      <h3 class="text-2xl mb-2">Color modifiers</h3>
      <NuxtImg provider="sirv" src="/harris-large.jpg" width="500" format="png" class="shadow-lg" crossorigin="anonymous"
        :modifiers="{
          sharpen: 1,
          saturation: 50,
          contrast: 50,
          brightness: 15,
        }" />
    </div>

    <div class="mb-8">
      <h3 class="text-2xl mb-2">Trim crop (removes whitespace)</h3>
      <NuxtImg provider="sirv" src="/lacoste.jpg" width="500" quality="95" class="shadow-lg" crossorigin="anonymous"
        :modifiers="{
          crop: 'trim',
        }" />
    </div>

    <div class="mb-8">
      <h3 class="text-2xl mb-2">500 width, cover fit</h3>
      <NuxtImg provider="sirv" src="look-big.jpg" width="500" fit="cover" class="shadow-lg" crossorigin="anonymous" />
    </div>
    <div class="mb-8">
      <h3 class="text-2xl mb-2">Face detection crop</h3>
      <NuxtImg provider="sirv" src="look-big.jpg" height="500" class="shadow-lg" :modifiers="{
        crop: 'face',
      }" crossorigin="anonymous" />
    </div>

    <div class="mb-8">
      <h3 class="text-2xl mb-2">(fit=fill)</h3>
      <NuxtImg provider="sirv" src="look-big.jpg" width="500" height="200" fit="fill" class="shadow-lg"
        crossorigin="anonymous" />
    </div>

    <div class="mb-8">
      <h3 class="text-2xl mb-2">PDF file</h3>
      <NuxtImg provider="sirv" src="QW.pdf" width="500" class="shadow-lg" crossorigin="anonymous" :modifiers="{
        pdfPage: 1,
      }" />
    </div>

    <div class="mb-8">
      <h3 class="text-2xl mb-2">Text overlay</h3>
      <NuxtImg provider="sirv" src="look-big.jpg" height="500" class="shadow-lg" crossorigin="anonymous" :modifiers="{
        text: 'Hello there',
        textAlign: 'center',
        textPositionGravity: 'south',
        textBackgroundColor: '#ffff',
        textSize: 60,
        textFontFamily: 'Arial',
        textColor: 'white',
      }" />
    </div>

    <div class="mb-8">
      <h3 class="text-2xl mb-2">Watermark overlay</h3>
      <NuxtImg provider="sirv" src="t-shirt-man.jpg" height="500" class="shadow-lg" crossorigin="anonymous" :modifiers="{
        watermark: '/watermark-v1.png',
        watermarkPosition: 'center',
        watermarkWidth: '30%',
      }" />
    </div>

  </div>
</template>

