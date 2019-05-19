<template>
  <div class="banner banner-gray border-top">
    <div id="experiences" class="container">
      <h1 class="text-center mb-4">Experiência Profissional</h1>
      <div class="row">
        <div class="col-md-6 mb-4" data-aos="fade-up">
          <div class="card">
            <div class="card-header">
              <div class="float-left font-weight-bold">
                <i class="fas fa-user-tie fa-2x align-middle"></i> Pesquisador Acadêmico
              </div>
              <span class="float-right text-primary">2017 - Agora</span>
            </div>
            <div class="card-body text-left text-muted">
              <h6 class="mb-3">
                <i class="far fa-building"></i> &nbsp;
                <a
                  href="http://wiki.dcc.ufba.br/PGComp/Doutorado"
                  target="_blank"
                >Universidade Federal da Bahia - UFBA</a>
              </h6>
              <p class="card-text text-justify">
                <i class="fas fa-tags"></i> &nbsp;
                <span v-if="ufba.typeView == 'S'">{{ufba.textSmall}}</span>
                <span v-if="ufba.typeView != 'S'">{{ufba.textFull}}</span>
                <button
                  class="btn btn-link"
                  v-if="ufba.typeView == 'S'"
                  v-on:click="ufba.typeView = 'F'"
                >mais</button>
                <button
                  class="btn btn-link"
                  v-if="ufba.typeView != 'S'"
                  v-on:click="ufba.typeView = 'S'"
                >menos</button>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4" data-aos="fade-up">
          <div class="card">
            <div class="card-header">
              <div class="float-left font-weight-bold">
                <i class="fas fa-user-tie fa-2x align-middle"></i> Desenvolvedor Sênior
              </div>
              <span class="float-right text-success">2016 - 2017</span>
            </div>
            <div class="card-body text-left text-muted">
              <h6 class="mb-3">
                <i class="far fa-building"></i> &nbsp;
                <a href="https://stefanini.com/pt-br/" target="_blank">Stefanini</a>
              </h6>
              <p class="card-text text-justify">
                <i class="fas fa-tags"></i> &nbsp;
                <span v-if="stefanini.typeView == 'S'">{{stefanini.textSmall}}</span>
                <span v-if="stefanini.typeView != 'S'">{{stefanini.textFull}}</span>
                <button
                  class="btn btn-link"
                  v-if="stefanini.typeView == 'S'"
                  v-on:click="stefanini.typeView = 'F'"
                >mais</button>
                <button
                  class="btn btn-link"
                  v-if="stefanini.typeView != 'S'"
                  v-on:click="stefanini.typeView = 'S'"
                >menos</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-4" data-aos="fade-up">
          <div class="card">
            <div class="card-header">
              <div class="float-left font-weight-bold">
                <i class="fas fa-user-tie fa-2x align-middle"></i> Desenvolvedor Junior
              </div>
              <span class="float-right text-success">2013 - 2016</span>
            </div>
            <div class="card-body text-left text-muted">
              <h6 class="mb-3">
                <i class="far fa-building"></i> &nbsp;
                <a href="https://www.indracompany.com/" target="_blank">Indra</a>
              </h6>
              <p class="card-text text-justify">
                <i class="fas fa-tags"></i> &nbsp;
                <span v-if="indra.typeView == 'S'">{{indra.textSmall}}</span>
                <span v-if="indra.typeView != 'S'">{{indra.textFull}}</span>
                <button
                  class="btn btn-link"
                  v-if="indra.typeView == 'S'"
                  v-on:click="indra.typeView = 'F'"
                >mais</button>
                <button
                  class="btn btn-link"
                  v-if="indra.typeView != 'S'"
                  v-on:click="indra.typeView = 'S'"
                >menos</button>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4" data-aos="fade-up">
          <div class="card">
            <div class="card-header">
              <div class="float-left font-weight-bold">
                <i class="fas fa-user-tie fa-2x align-middle"></i> Estagiário
              </div>
              <span class="float-right text-success">2012 - 2013</span>
            </div>
            <div class="card-body text-left text-muted">
              <h6 class="mb-3">
                <i class="far fa-building"></i> &nbsp;
                <a
                  href="https://www.linkedin.com/company/code-2/about/"
                  target="_blank"
                >CODE2</a>
              </h6>
              <p class="card-text text-justify">
                <i class="fas fa-tags"></i> &nbsp;
                <span v-if="code2.typeView == 'S'">{{code2.textSmall}}</span>
                <span v-if="code2.typeView != 'S'">{{code2.textFull}}</span>
                <button
                  class="btn btn-link"
                  v-if="code2.typeView == 'S'"
                  v-on:click="code2.typeView = 'F'"
                >mais</button>
                <button
                  class="btn btn-link"
                  v-if="code2.typeView != 'S'"
                  v-on:click="code2.typeView = 'S'"
                >menos</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ufba: {
        typeView: "S",
        textSmall:
          "Desenvolvimento de pesquisas na área de Sistemas de Recomendação, Recuperação da Informação, Web Semântica e Social Media ...",
        textFull:
          "Desenvolvimento de pesquisas na área de Sistemas de Recomendação, Recuperação da Informação, Web Semântica e Social Media, bem como de atividades acadêmicas e publicação de artigos em conceituadas revistas e conferências. "
      },
      stefanini: {
        typeView: "S",
        textSmall:
          "Função exercida: análise, engenharia e desenvolvimento de sistemas para plataformas Web e Mbile. Bem como, modelagem e análise de Banco de dados. Utilizando as tecnologias ...",
        textFull:
          "Função exercida: análise, engenharia e desenvolvimento de sistemas para plataformas Web e Mbile. Bem como, modelagem e análise de Banco de dados. Utilizando as tecnologias como: C#, WebForms, DotNet, MVC, Entity Framework; Angular, Javascript, CSS3, HTML5, Jquery, Java; SQL Server, Swift, Android, IonicFramework, TypeScript. Trabalho exercido à Polícia Civil, lotado  no Departamento de Tecnologia da Informação (DTI) da Secretaria de Segurança Pública do Estado de Sergipe."
      },
      indra: {
        typeView: "S",
        textSmall:
          "Função exercida: análise, engenharia e desenvolvimento de sistemas para plataformas Web e Mbile. Bem como, modelagem e análise de Banco de dados. Utilizando as tecnologias ...",
        textFull:
          "Função exercida: análise, engenharia e desenvolvimento de sistemas para plataformas Web e Mbile. Bem como, modelagem e análise de Banco de dados. Utilizando as tecnologias como: C#, WebForms, DotNet, MVC, Entity Framework; Angular, Javascript, CSS3, HTML5, Jquery, Java; SQL Server, Swift, Android, IonicFramework, TypeScript. Trabalho exercido à Polícia Civil, lotado  no Departamento de Tecnologia da Informação (DTI) da Secretaria de Segurança Pública do Estado de Sergipe."
      },
      code2: {
        typeView: "S",
        textSmall:
          "Função exercida: análise, engenharia e desenvolvimento de sistemas para plataformas Web. Bem como, modelagem e análise de Banco de dados. Utilizando as tecnologias ...",
        textFull:
          "Função exercida: análise, engenharia e desenvolvimento de sistemas para plataformas Web. Bem como, modelagem e análise de Banco de dados. Utilizando as tecnologias como: C#, WebForms, DotNet, MVC, Entity Framework; Javascript, CSS3, HTML5, Jquery; SQL Server."
      }
    };
  }
};
</script>

