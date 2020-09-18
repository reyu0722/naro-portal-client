<template>
  <v-row>
    <v-col v-for="message in messages" :key="message.id" cols="12">
      <v-card class="mx-auto" outlined>
        <v-card-title>{{ message.username }}</v-card-title>
        <v-card-subtitle>@{{ message.userid }}</v-card-subtitle>
        <v-card-text>
          {{ message.content }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TimeLine',
  data() {
    return {
      messages: [],
    }
  },
  mounted() {
    axios.get('/api/message').then(res => {
      this.messages = res.data
    })
  },
}
</script>
