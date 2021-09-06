<template>
    <section class="container">
      <div class="auth-wrapper">
          <div class="auth-inner">
              <img src="" class="rounded mx-auto d-block" id="imagem-logo" alt="">
              <h1>Login</h1>
              <form @submit.prevent="login" >
                <div class="form-group">
                  <input type="login" class="form-control" v-model="Nome"  required placeholder="Login"/>
                </div>
                <br />
                <div class="form-group">
                  <input type="senha" class="form-control" v-model="Senha" required placeholder="Senha"
                  />
                </div>
                <br />
                <div class="form-group d-flex justify-content-end">
                  <button type=login class="btn btn-primary w-25 shadow mb-5 rounded" @click="login">Entrar</button>
                </div>
                <div>
                  <h6 class="alert alert-primary" v-if="con">Login ou senha invalida</h6>
                </div>
              </form>
          </div>
      </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'login',
    data(){
      return{
        Nome:'',
        Senha:''
      }
    },
    methods: {
      async handleSubmit(){
        const response = await axios.post('api/Autenticacao/login', {
          Nome: this.Nome,
          Senha:this.Senha
        });

        localStorage.setItem('token', response.data.token);
      }
    }
}
</script>