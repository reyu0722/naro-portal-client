<template>
  <v-row>
    <v-textarea counter label="Text" :rules="rules" :value="value"></v-textarea>
  </v-row>
</template>

<script>
export default {
  name: 'MessageSend',
  data: () => ({
    rules: [v => v.length <= 25 || 'Max 25 characters'],
    value: '',
  }),
}
</script>
