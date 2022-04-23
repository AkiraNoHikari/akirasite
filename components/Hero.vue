<template>
  <div class="hero">
    <div class="left">
      <img src="~/assets/Miku.webp" alt="Vampire Hatsune Miku posing" />
    </div>
    <div class="right">
      <h1>Akira</h1>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr;
}

img {
  width: 40vw;
  position: fixed;
  bottom: 0;
  left: 0;
}

h1 {
  text-transform: uppercase;
  font-size: 5rem;
}

@media (max-width: 1200px) {
  .hero {
    grid-template-columns: none;
    grid-template-rows: 1fr auto;
  }

  .left {
    order: 2;
  }

  .right {
    order: 1;
  }
}
</style>

export default {
  name: "Hero",
};