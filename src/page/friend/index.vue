<!-- 好友资料详情 -->
<template>
  <div class="friend-page">
    <header class="page-header">
      <div class="back" @click="goBack">← 返回</div>
      <div class="title">资料</div>
      <div class="more">···</div>
    </header>
    <section class="friend-body">
      <div class="card">
        <div class="avatar-wrap">
          <img :src="avatarUrl" alt="" />
        </div>
        <div class="name">{{ friendName }}</div>
        <div class="status">{{ friendStatus }}</div>
      </div>
      <ul class="menu-ul">
        <li @click="sendMsg">
          <span>发消息</span>
          <span class="arrow">></span>
        </li>
        <li>
          <span>QQ电话</span>
          <span class="arrow">></span>
        </li>
        <li>
          <span>视频通话</span>
          <span class="arrow">></span>
        </li>
      </ul>
      <div class="info-block">
        <div class="info-title">个人资料</div>
        <div class="info-row"><span>昵称</span><span>{{ friendName }}</span></div>
        <div class="info-row"><span>个性签名</span><span>{{ friendSignature }}</span></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'friend',
  data() {
    return {
      friendSignature: '这个人很懒，什么都没写'
    }
  },
  computed: {
    friendName() {
      return this.$route.query.name || '好友'
    },
    friendAvatar() {
      return this.$route.query.src || 'qiuyue.png'
    },
    avatarUrl() {
      return '/static/img/' + this.friendAvatar
    },
    friendStatus() {
      return this.$route.query.status || '[Wifi在线]'
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    sendMsg() {
      this.$router.push({
        path: '/chat',
        query: { name: this.friendName, src: this.friendAvatar }
      })
    }
  }
}
</script>

<style scoped>
.friend-page {
  min-height: 100vh;
  background: #f5f5f5;
}
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  padding: 0 12px;
  background: #3ca8fe;
  color: #fff;
}
.page-header .back,
.page-header .more {
  font-size: 16px;
  cursor: pointer;
}
.page-header .title {
  font-size: 18px;
}
.friend-body {
  padding: 12px;
}
.card {
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  margin-bottom: 12px;
}
.avatar-wrap {
  width: 80px;
  height: 80px;
  margin: 0 auto 12px;
  border-radius: 50%;
  overflow: hidden;
}
.avatar-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card .name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
}
.card .status {
  font-size: 13px;
  color: #999;
}
.menu-ul {
  list-style: none;
  padding: 0;
  margin: 0 0 12px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
}
.menu-ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 12px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  font-size: 15px;
  color: #333;
}
.menu-ul li:last-child {
  border-bottom: none;
}
.menu-ul .arrow {
  color: #999;
  font-size: 14px;
}
.info-block {
  background: #fff;
  border-radius: 8px;
  padding: 12px;
}
.info-title {
  font-size: 14px;
  color: #999;
  margin-bottom: 8px;
}
.info-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 15px;
}
.info-row span:first-child {
  color: #999;
}
.info-row span:last-child {
  color: #333;
}
</style>
