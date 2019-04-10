<template>
  <b-container class="mt-4 text-center">
    <b-row>
      <b-col>
        <password-page />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <settings />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PasswordPage from './components/PasswordResult.vue';
import Settings from './components/Settings.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'app',
  components: {
    PasswordPage,
    Settings
  },
  methods:
  {
    ...mapMutations(['generatePassword'])
  },
  beforeMount()
  {
    this.generatePassword();
  }
}
</script>