<template>
  <h3 class="text-2xl mb-2">Trim crop (removes whitespace)</h3>
  <NuxtImg provider="sirv" src="/lacoste.jpg" width="500" quality="95" class="shadow-lg" crossorigin="anonymous"
    :modifiers="{
      crop: 'trim',
    }" />
</template>
