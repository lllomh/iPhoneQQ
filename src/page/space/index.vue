<!-- QQ空间模块 - 我的空间 -->
<template>
  <div class="space-page">
    <header class="space-header">
      <div class="back" @click="goBack">← 返回</div>
      <div class="title">QQ空间</div>
      <div class="more">···</div>
    </header>
    <div class="space-cover">
      <div class="user-info">
        <img :src="avatarUrl" alt="" class="avatar" />
        <div class="name">{{ profile.nickname }}</div>
        <div class="signature">{{ profile.signature }}</div>
      </div>
    </div>
    <ul class="space-tabs">
      <li :class="{ active: tab === 'say' }" @click="tab = 'say'">说说</li>
      <li :class="{ active: tab === 'photo' }" @click="tab = 'photo'">相册</li>
      <li :class="{ active: tab === 'visit' }" @click="tab = 'visit'">访客</li>
    </ul>
    <section class="space-content">
      <div v-show="tab === 'say'" class="say-list">
        <div class="say-item" v-for="(item, i) in sayList" :key="i">
          <div class="say-content">{{ item.content }}</div>
          <div class="say-time">{{ item.time }}</div>
          <div class="say-actions">
            <span>赞 {{ item.likeCount }}</span>
            <span>评论 {{ item.commentCount }}</span>
          </div>
        </div>
        <div class="empty-tip" v-if="!sayList.length">暂无说说，去写一条吧～</div>
      </div>
      <div v-show="tab === 'photo'" class="photo-list">
        <div class="album-item" v-for="(album, i) in albums" :key="i">
          <div class="album-cover">
            <img :src="`/static/img/${album.cover}`" alt="" />
            <span class="album-count">{{ album.count }}张</span>
          </div>
          <div class="album-name">{{ album.name }}</div>
        </div>
        <div class="empty-tip" v-if="!albums.length">暂无相册</div>
      </div>
      <div v-show="tab === 'visit'" class="visit-list">
        <div class="empty-tip">暂无访客记录</div>
      </div>
    </section>
  </div>
</template>

<script>
const STORAGE_KEY = 'qq_user_profile'
const defaultAvatar = 'logo.jpg'

export default {
  name: 'space',
  data() {
    return {
      tab: 'say',
      profile: {
        nickname: '我的QQ',
        signature: '这个人很懒，什么都没写',
        avatar: defaultAvatar
      },
      sayList: [
        { content: '今天也是元气满满的一天！', time: '昨天 10:00', likeCount: 3, commentCount: 1 },
        { content: '学习 Vue 的第三天～', time: '前天 18:00', likeCount: 5, commentCount: 2 }
      ],
      albums: [
        { name: '默认相册', cover: 'qiuyue.png', count: 12 },
        { name: '旅行', cover: 'hu.jpg', count: 8 }
      ]
    }
  },
  computed: {
    avatarUrl() {
      return '/static/img/' + (this.profile.avatar || defaultAvatar)
    }
  },
  mounted() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        this.profile = { ...this.profile, ...parsed }
      }
    } catch (e) {}
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.space-page {
  min-height: 100vh;
  background: #f0f0f0;
  padding-bottom: 20px;
}
.space-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  padding: 0 12px;
  background: #3ca8fe;
  color: #fff;
}
.space-header .back,
.space-header .more {
  font-size: 16px;
  cursor: pointer;
}
.space-header .title {
  font-size: 18px;
}
.space-cover {
  height: 140px;
  background: linear-gradient(180deg, #3ca8fe 0%, #7ec8ff 100%);
  padding: 20px 12px;
}
.user-info {
  text-align: center;
  color: #fff;
}
.user-info .avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.8);
  object-fit: cover;
}
.user-info .name {
  font-size: 18px;
  margin-top: 8px;
  font-weight: bold;
}
.user-info .signature {
  font-size: 13px;
  opacity: 0.9;
  margin-top: 4px;
}
.space-tabs {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.space-tabs li {
  flex: 1;
  text-align: center;
  padding: 12px;
  font-size: 15px;
  color: #666;
  cursor: pointer;
}
.space-tabs li.active {
  color: #3ca8fe;
  font-weight: bold;
  border-bottom: 2px solid #3ca8fe;
}
.space-content {
  padding: 12px;
  background: #fff;
  margin: 12px;
  border-radius: 8px;
  min-height: 200px;
}
.say-item {
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}
.say-item:last-child {
  border-bottom: none;
}
.say-content {
  font-size: 15px;
  color: #333;
  line-height: 1.5;
}
.say-time {
  font-size: 12px;
  color: #999;
  margin-top: 6px;
}
.say-actions {
  font-size: 13px;
  color: #3ca8fe;
  margin-top: 8px;
}
.say-actions span {
  margin-right: 16px;
}
.album-item {
  display: inline-block;
  width: 31%;
  margin: 0 1% 12px 0;
  text-align: center;
}
.album-cover {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: #eee;
}
.album-cover img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.album-count {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 12px;
  color: #fff;
  text-shadow: 0 0 2px #000;
}
.album-name {
  font-size: 13px;
  color: #333;
  margin-top: 4px;
}
.empty-tip {
  text-align: center;
  color: #999;
  padding: 40px 0;
  font-size: 14px;
}
.visit-list .empty-tip {
  padding: 60px 0;
}
</style>
