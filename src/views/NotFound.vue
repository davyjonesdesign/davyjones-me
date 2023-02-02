<template>
  <div class="NotFound">
    <h1>404</h1>
    <h3>This page could not be found.</h3>
    <p>The link you clicked may be broken or may have been removed.</p>
    <router-link class="link link-btn splash-btn" to="/">
      <div class="nav-link_text">Go Home</div>
    </router-link>
  </div>
</template>
<style>
.NotFound {
  margin: 0 0 0 80px;
  padding: 40px;
}

@media (max-width: 960px) {
  .NotFound {
    margin: 0px;
  }
}

</style>
