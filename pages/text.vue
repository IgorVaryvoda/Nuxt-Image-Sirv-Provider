<template>
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
</template>
