<template>
  <h3 class="text-2xl mb-2">Face detection crop</h3>
  <NuxtImg provider="sirv" src="look-big.jpg" height="500" class="shadow-lg" :modifiers="{
    crop: 'face',
  }" crossorigin="anonymous" />
</template>
