<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">PRS</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#education">Formação Acadêmica</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">Serviços</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#experiences">Experiência</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
    <footer id="contact" class="footer mt-auto p-3">
      <div class="container">
        <div class="row justify-content-md-center text-center">
          <div class="col-md-auto">
            <h1 class="mb-3">Entre em Contato</h1>
            <h5>
              <i class="far fa-envelope"></i>&nbsp;
              <a
                class="text-dark text-decoration-none"
                href="mailto:paulo.prsdesouza@gmail.com?Subject=Olá"
                target="_top"
              >paulo.prsdesouza@gmail.com</a>
            </h5>
            <h5>
              <i class="fab fa-whatsapp"></i>&nbsp;+55 (79) 9 9973-3237
            </h5>
            <h4 class="mb-3 mt-5">Ou através das redes sociais</h4>

            <div class="row justify-content-md-center">
              <div class="col">
                <a
                  href="https://www.linkedin.com/in/pauloprsdesouza/"
                  target="_blank"
                  class="text-dark"
                >
                  <i class="fab fa-linkedin fa-3x"></i>
                </a>
              </div>
              <div class="col">
                <a href="https://github.com/pauloprsdesouza" target="_blank" class="text-dark">
                  <i class="fab fa-github-square fa-3x"></i>
                </a>
              </div>
              <div class="col">
                <a href="https://twitter.com/paulo_prsouza" target="_blank" class="text-dark">
                  <i class="fab fa-twitter-square fa-3x"></i>
                </a>
              </div>
              <div class="col">
                <a href="https://instagram.com/paulo.rsouza" target="_blank" class="text-dark">
                  <i class="fab fa-instagram fa-3x"></i>
                </a>
              </div>
              <div class="col">
                <a href="https://wa.me/557999733237" target="_blank" class="text-dark">
                  <i class="fab fa-whatsapp-square fa-3x"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-auto"></div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
