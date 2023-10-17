<template>
  <div>
    <h2>Testing Sirv Nuxt Image provider</h2>
    <NuxtImg provider="sirv" src="/image.png" width="500" format="png"/>
    <NuxtImg provider="sirv" src="/image.jpeg" width="500" quality="95"/>
    <NuxtImg provider="sirv" src="tesla2.jpg" width="1000" />
  </div>
</template>
