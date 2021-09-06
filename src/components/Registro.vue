<template>
    <section class="container">
      <div class="auth-wrapper">
        <div >
      <form  @submit.prevent="handleSubmit" @reset="reset" >
      <h3 class="d-flex justify-content-center" style="font-size: 50px">Gestão de Usuários</h3>
      <div class="input-group">
        <div class="form-group col-md-6">
          <lable class="d-flex justify-content-start">Nome Completo</lable>
          <input type="text" class="form-control" v-model="Nome" required placeholder="Informe o nome completo do usuário"/>
        </div>
        <div class="form-group col-md-6">
          <lable class="d-flex justify-content-start">Email</lable>
          <input type="email" class="form-control" v-model="Email" required placeholder="Email">
        </div>
      </div>
      <div class="input-group">
        <div class="form-group col-md-6">
          <lable class="d-flex justify-content-start">Senha</lable>
          <input type="password" class="form-control" v-model="Senha" required placeholder="Informe a senha do usuário">
        </div>
      </div>
      <br>
      <div class=" d-flex justify-content-end">
        <button type="submit"  class="fas fa-check btn btn-light" style="font-size: 50px" ></button>
        <button type="reset" class="fas fa-times btn btn-light" style="font-size: 50px" ></button>
      </div>
    </form>
    </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'registro',
    data(){
        return{
            Nome:'',
            Email:'',
            Senha:''
        }
    },
    methods:{
        async handleSubmit(){
          await axios.post('api/Autenticacao/register',{
                Nome: this.Nome,
                Email: this.Email,
                Senha: this.Senha
            });
            this.$route.push('/login')
        }
    }
}
</script>