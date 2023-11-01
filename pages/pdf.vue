<template>
  <h3 class="text-2xl mb-2">PDF file</h3>
  <NuxtImg provider="sirv" src="QW.pdf" width="500" class="shadow-lg" crossorigin="anonymous" :modifiers="{
    pdfPage: 1,
  }" />
</template>
