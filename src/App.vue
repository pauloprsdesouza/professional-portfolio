<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      </div>
    </nav>
    <router-view/>
    <footer class="footer mt-auto p-3">
      <div class="container">
        <div class="row justify-content-md-center text-center">
          <div class="col-md-auto">
            <h1 class="mb-3">Entre em Contato</h1>
            <h5>
              <i class="far fa-envelope"></i>&nbsp;paulo.prsdesouza@gmail.com
            </h5>
            <h5>
              <i class="fab fa-whatsapp"></i>&nbsp;+55(79)9 9973-3237
            </h5>
            <h4 class="mb-3 mt-5">Ou através das redes sociais</h4>

            <div class="row justify-content-md-center">
              <div class="col-md-auto">
                <i class="fab fa-linkedin fa-3x"></i>
              </div>
              <div class="col-md-auto">
                <i class="fab fa-github-square fa-3x"></i>
              </div>
              <div class="col-md-auto">
                <i class="fab fa-twitter-square fa-3x"></i>
              </div>
              <div class="col-md-auto">
                <i class="fab fa-instagram fa-3x"></i>
              </div>
              <div class="col-md-auto">
                <i class="fab fa-whatsapp-square fa-3x"></i>
              </div>
            </div>
          </div>
          <div class="col-md-auto"></div>
        </div>
      </div>
    </footer>
  </div>
</template>
