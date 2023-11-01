<template>
  <h3 class="text-2xl mb-2">Watermark overlay</h3>
  <NuxtImg provider="sirv" src="t-shirt-man.jpg" height="500" class="shadow-lg" crossorigin="anonymous" :modifiers="{
    watermark: '/watermark-v1.png',
    watermarkPosition: 'center',
    watermarkWidth: '30%',
        }" />
</template>
