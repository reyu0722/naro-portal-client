<template>
  <v-container>
    <message-send />
    <time-line />
  </v-container>
</template>

<script>
// @ is an alias to /src
import TimeLine from '../components/TimeLine'
import MessageSend from '../components/MessageSend'
export default {
  name: 'Home',
  components: {
    TimeLine,
    MessageSend,
  },
}
</script>
