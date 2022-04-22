<template>
  <div>
    <Header />
    <Section>
      <Hero />
    </Section>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Encode+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  box-sizing: border-box;
  font-family: "Encode Sans", sans-serif;
  margin: 0;
  padding: 0;
  color: #fff;
  user-select: none;
}

body {
  font-size: 1rem;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 350% 350%;
  background-attachment: fixed;
  animation: gradient 20s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 20% 50%;
  }
  50% {
    background-position: 80% 50%;
  }
  100% {
    background-position: 20% 50%;
  }
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}
</style>


<script>
export default {
  name: "IndexPage",
};
</script>
