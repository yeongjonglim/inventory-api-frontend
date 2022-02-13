<template>
  <div class="q-pa-none" v-if="store.state.user">
    <q-toolbar class="bg-purple text-white shadow-2">
      <q-btn flat label="Guan LS Auto Service" />
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="tab" shrink stretch>
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/about" label="About" />
        <q-tab @click="store.dispatch('logout')" name="logout" label="Logout" />
      </q-tabs>
    </q-toolbar>
  </div>
  <router-view/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onBeforeMount } from "vue"
import { useStore } from "vuex"

const store = useStore()

onBeforeMount(() => {
  store.dispatch('fetchUser')
})

const tab = ref('Home')
</script>

