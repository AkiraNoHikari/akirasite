<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  border-radius: 250px;
  border: none;
  background: #ee7752;
  padding: 1rem;
  font-weight: bolder;
  text-transform: uppercase;
  font-size: 2rem;
  cursor: pointer;
}
</style>