<template>
  <header>
    <NuxtLink class="home" to="/">アキラ</NuxtLink>
    <nav>
      <ul>
        <li>
          <a
            class="ds"
            target="_blank"
            href="https://youtube.com/channel/UCnCPN9xi7y8arkpymcTXzNw"
          >
            <img class="external" src="~/assets/youtube.svg" />
          </a>
          <a class="ds" target="_blank" href="https://twitch.tv/akiranohikari">
            <img class="external" src="~/assets/twitch.svg" />
          </a>
          <a
            class="ds"
            target="_blank"
            href="https://twitter.com/AkiraNoHikariii"
          >
            <img class="external" src="~/assets/twitter.svg" />
          </a>
          <a class="ds" target="_blank" href="https://github.com/AkiraNoHikari">
            <img class="external" src="~/assets/github.svg" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: black;
  display: flex;
  font-size: 1.25rem;
  justify-content: space-between;
  padding: 3vmin;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: rgba(21, 27, 31, 0);
  z-index: 999;
}

.external {
  width: 25px;
  height: 100%;
  margin: 0.5rem;
  vertical-align: middle;
  filter: invert();
}

.home {
  padding: 0;
  font-size: 2rem;
  vertical-align: middle;
  font-weight: bold !important;
}

ul {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 56px;
  border-radius: 100%;
}

nav {
  display: flex;
  flex-direction: row;
}

a:not(.ds) {
  padding: 0.5rem;
  vertical-align: middle;
  font-weight: 200;
}

a:hover:not(.home) {
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.651);
}

.route {
  text-transform: capitalize;
}
</style>

export default {
  name: "Header",
};