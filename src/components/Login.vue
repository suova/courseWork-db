<template lang="pug">
  div.login
    form(@submit="login")
      div.form-group
        label(for="nick") Email address
        input(type="nick" class="form-control" id="nick" aria-describedby="emailHelp" v-model="input.nick")
      div.form-group
        label(for="password") Password
        input(type="password" class="form-control" id="password" v-model="input.password")
        small( class="form-text text-muted") Забыли пароль как всегда? Нажмите
          a( href="#")  сюда
        small( class="form-text text-muted") Зарегистрироваться? Тогда
          a( href="#" @click ="signup")  сюда
      button(type="submit" class="btn btn-primary") Войти
</template>

<script>
import postData from "./../login";
import auth from "./../auth";
import data from "./../data";
import f from "../localStorageData";

export default {
  name: 'Login',
  data() {
      return {
          input: {
              nick: "",
              password: "" //this.input.password
          }
      }
  },
  methods: {
      login(e) {
          e.preventDefault();
          postData(`http://localhost:8181/user/${this.input.nick}/singIn`, {
              "password": this.input.password
          }).then((dat) => {
              console.log("AA",dat);
              data.nick = this.input.nick;
              data.role = dat.role;
              f.setUser();
              auth.setLogin();
              this.$router.push('/');

          }).catch((error) => {
              console.error('Error:', error);
          });

          fetch(`http://localhost:8181/sendCookie/${this.input.nick}`)
              .then((response) => {
                  return response.json();
              })
              .then((dat) => {
                  data.cookie = dat;
                  f.setCookie();
                  console.log("COOKIE",dat);

              }).catch((error) => {
              console.error('Error:', error);
          });
      },
      signup(e){
          e.preventDefault();
          this.$router.push('/signup');
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
