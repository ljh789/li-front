<template>
  <div class="block">
    <div ref="messages" class="messages">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="['message', message.sender === 'user' ? 'user' : 'bot']"
      >
        {{ message.text }}
      </div>
    </div>
    <form class="input-form" @submit.prevent="sendMessage">
      <input
        v-model="newMessage"
        placeholder="输入消息..."
        required
        type="text"
      />
      <button type="submit">发送</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: ''
    }
  },
  mounted() {
    this.initEventSource()
  },
  beforeDestroy() {
    this.closeEventSource()
  },
  methods: {
    sendMessage() {
      this.messages.push({ sender: 'user', text: this.newMessage })
      this.newMessage = ''
      this.scrollToBottom()
      // 模拟机器人回复
      setTimeout(() => {
        this.messages.push({ sender: 'bot', text: '这是机器人的回复' })
        this.scrollToBottom()
      }, 1000)
    },
    scrollToBottom() {
      this.$nextTick(() => {
        this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight
      })
    },
    initEventSource() {
      const eventSource = new EventSource('http://192.168.225.95:9999/sse/chat')
      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data)
        console.log(data)
        this.messages.push({ sender: 'bot', text: data.chat })
        this.scrollToBottom()
      }
      eventSource.onerror = (error) => {
        console.error('EventSource failed:', error)
        this.closeEventSource()
      }
      this.eventSource = eventSource
    },
    closeEventSource() {
      if (this.eventSource) {
        this.eventSource.close()
        this.eventSource = null
      }
    }
  }
}
</script>

<style scoped>
.block {
  width: 800px;
  margin: 0 auto;
  min-height: 550px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
}

.message {
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  width: auto;
  max-width: 70%;
  display: inline-block;
}

.user {
  background: #007bff;
  color: #fff;
  align-self: flex-end;
}

.bot {
  background: #f1f1f1;
  color: #000;
  align-self: flex-start;
}

.input-form {
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
}

form {
  display: flex;
  padding: 10px;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
}

button {
  padding: 10px;
  border: none;
  background: #007bff;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.block::-webkit-scrollbar {
  display: none;
}
</style>
