<!--
  聊天界面 - 仿 QQ 聊天页
-->
<template>
  <div class="chat-page">
    <header class="chat-header">
      <div class="back" @click="goBack">← 返回</div>
      <div class="title clickable" @click="goToFriend">{{ chatName || '聊天' }}</div>
      <div class="more">···</div>
    </header>
    <section class="chat-body" ref="chatBody">
      <div class="msg-list">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          :class="['msg-item', msg.self ? 'self' : 'other']"
        >
          <div class="avatar" v-if="!msg.self">
            <img :src="`/static/img/${chatAvatar}`" alt="" />
          </div>
          <div class="bubble">{{ msg.text }}</div>
          <div class="avatar self-avatar" v-if="msg.self">
            <img src="/static/img/renyou.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <footer class="chat-footer">
      <input
        v-model="inputText"
        type="text"
        placeholder="请输入消息..."
        @keyup.13="send"
      />
      <button class="send-btn" @click="send">发送</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'chat',
  data() {
    return {
      inputText: '',
      messages: [
        { text: '在吗？', self: false },
        { text: '在的，什么事？', self: true },
        { text: '想请教一下 Vue 的问题', self: false },
        { text: '好的，你说', self: true }
      ]
    }
  },
  computed: {
    chatName() {
      return this.$route.query.name || '好友'
    },
    chatAvatar() {
      return this.$route.query.src || 'qiuyue.png'
    }
  },
  mounted() {
    this.$nextTick(() => this.scrollToBottom())
  },
  updated() {
    this.$nextTick(() => this.scrollToBottom())
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    goToFriend() {
      this.$router.push({
        path: '/friend',
        query: { name: this.chatName, src: this.chatAvatar, status: '[Wifi在线]' }
      })
    },
    send() {
      const text = this.inputText.trim()
      if (!text) return
      this.messages.push({ text, self: true })
      this.inputText = ''
      setTimeout(() => {
        this.messages.push({ text: '收到：' + text, self: false })
      }, 500)
    },
    scrollToBottom() {
      const el = this.$refs.chatBody
      if (el) el.scrollTop = el.scrollHeight
    }
  }
}
</script>

<style scoped>
.chat-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  background: #ededed;
}
.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  padding: 0 12px;
  background: #3ca8fe;
  color: #fff;
  flex-shrink: 0;
}
.chat-header .back {
  width: 40px;
  text-align: left;
  cursor: pointer;
  font-size: 20px;
}
.chat-header .back img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.chat-header .title {
  flex: 1;
  text-align: center;
  font-size: 18px;
}
.chat-header .title.clickable {
  cursor: pointer;
}
.chat-header .more {
  width: 40px;
  text-align: right;
  font-size: 18px;
  cursor: pointer;
}
.chat-body {
  flex: 1;
  overflow-y: auto;
  padding: 12px;
  -webkit-overflow-scrolling: touch;
}
.msg-item {
  display: flex;
  margin-bottom: 14px;
  align-items: flex-start;
}
.msg-item.self {
  flex-direction: row-reverse;
}
.msg-item .avatar {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin: 0 8px;
}
.msg-item .avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.msg-item .bubble {
  max-width: 70%;
  padding: 10px 14px;
  border-radius: 4px;
  font-size: 16px;
  line-height: 1.5;
  word-break: break-word;
}
.msg-item.other .bubble {
  background: #fff;
  color: #333;
  border-top-left-radius: 0;
}
.msg-item.self .bubble {
  background: #95ec69;
  color: #333;
  border-top-right-radius: 0;
}
.chat-footer {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: #f5f5f5;
  border-top: 1px solid #ddd;
  flex-shrink: 0;
}
.chat-footer input {
  flex: 1;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 15px;
  margin-right: 10px;
}
.chat-footer .send-btn {
  padding: 0 16px;
  height: 36px;
  background: #3ca8fe;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
}
.chat-footer .send-btn:active {
  opacity: 0.9;
}
</style>
