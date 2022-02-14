<template>
  <div @click.prevent="signInWithGoogle" id="googleSignInButton" class="gSignInWrapper">
    <span class="icon"></span>
    <span class="buttonText">Sign In With Google</span>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'

const store = useStore()

const signInWithGoogle = () => {
  store.dispatch('loginWithGoogle')
}
</script>

<style>
.gSignInWrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}

#googleSignInButton {
  display: inline-block;
  background: white;
  color: #444;
  border-radius: 5px;
  box-shadow: 1px 1px 1px grey;
  white-space: nowrap;
}
#googleSignInButton:hover {
  cursor: pointer;
  background: #f1f1f1;
  transition: all .5s ease;
}

span.icon {
  background: transparent url('https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg') no-repeat center;
  display: inline-block;
  vertical-align: middle;
  width: 3rem;
  height: 3rem;
}
span.buttonText {
  display: inline-block;
  vertical-align: middle;
  padding-right: 1rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
</style>