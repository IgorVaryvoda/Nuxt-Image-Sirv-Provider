<template>
  <h3 class="text-2xl mb-2">Color modifiers</h3>
  <NuxtImg provider="sirv" src="/harris-large.jpg" width="500" format="png" class="shadow-lg" crossorigin="anonymous"
    :modifiers="{
      sharpen: 1,
      saturation: 50,
      contrast: 50,
      brightness: 15,
    }" />
</template>
