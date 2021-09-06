<template>
  <div id="app">
    <Nav/>

    <div>      
        <router-view/>
  </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue"
export default {
  name: 'App',
  components:{
    Nav,
  }
}
</script>

<style>
@import url("http://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800");

* {
  box-sizing: border-box;
}

body {
  background: white;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: "Fira Sans", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
label,
span {
  font-weight: 500;
  text-align: center;
  font-family: "Fira Sans" sans-serif;
  font-size: 30px;
}

h6{
  font-weight: 500;
  text-align: center;
  font-family: "Fira Sans" sans-serif;
  font-size: 15px;
}

.navbar-light{
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

#imagem-logo{
  width: 200px;
  
}

body,
html,
#app,
#root,
aunt-wrapper {
  width: 100%;
  height: 100%;
}

#app {
  text-align: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
}

.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.auth-inner {
  width: 450px;
  margin: auto;
  background: rgb(219, 219, 219);
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  transition: all 0.3s;
}

.auth-wrapper .form-control:focus {
  border-color: #167bff;
  box-shadow: none;
}

.auth-wrapper h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

.custom-control-label {
  font-weight: 400;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;
}

.forgot-password {
  color: #167bff;
}
</style>
