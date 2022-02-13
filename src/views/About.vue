<template>
  <div class="q-pa-md">
    <p class="text-h3">Greetings {{ user?.displayName }}</p>
    <p class="text-body-1">This is a project just for fun, do not take this seriously. Do give this guy a call if you noticed anything wrong or have any suggestions for the site.</p>
  </div>
</template>

<script lang="ts" setup>
import { auth } from '@/firebase'

const user = auth.currentUser
</script>