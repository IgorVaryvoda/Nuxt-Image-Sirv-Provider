<template>
  <div>
    <h2>Testing Sirv Nuxt Image provider</h2>
    <NuxtImg provider="sirv" src="/harris-large.jpg" width="500" format="png" placeholder/>
    <NuxtImg provider="sirv" src="/lacoste.jpg" width="500" quality="95" placeholder/>
    <NuxtImg provider="sirv" src="look-big.jpg" width="1000" fit="fill" placeholder/>
    <NuxtImg provider="sirv" src="look-big.jpg" fit="fill" placeholder/>
  </div>
</template>