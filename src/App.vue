<template>
  <div class="q-pa-none" v-if="store.state.user">
    <q-toolbar class="bg-blue-10 text-white shadow-2">
      <q-btn @click="$router.push('/')" flat label="Guan LS Auto Service" />
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="tab">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/about" label="About" />
        <q-tab class="bg-negative" @click="store.dispatch('logout')" name="logout" label="Logout" />
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

