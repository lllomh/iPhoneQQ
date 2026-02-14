<!-- 动态界面 -->
<template>
  <div class="moments-page">
    <header class="moments-header">
      <div class="my-entry" @click="$router.push('/profile')">
        <img src="/static/img/logo.jpg" alt="" class="my-avatar" />
        <span class="my-name">我的动态</span>
        <span class="arrow">></span>
      </div>
    </header>
    <section class="moments-list" ref="list">
      <div class="moment-item" v-for="(item, index) in moments" :key="index">
        <div class="user-row">
          <img :src="`/static/img/${item.avatar}`" alt="" class="user-avatar" />
          <div class="user-info">
            <div class="user-name">{{ item.name }}</div>
            <div class="time">{{ item.time }}</div>
          </div>
        </div>
        <div class="content">{{ item.content }}</div>
        <div class="photos" v-if="item.photos && item.photos.length">
          <div class="photo" v-for="(p, i) in item.photos" :key="i">
            <img :src="`/static/img/${p}`" alt="" />
          </div>
        </div>
        <div class="actions">
          <span class="like" :class="{ liked: item.liked }" @click="toggleLike(item)">
            {{ item.liked ? '已赞' : '赞' }} {{ item.likeCount > 0 ? item.likeCount : '' }}
          </span>
          <span class="comment">评论</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'moments',
  data() {
    return {
      moments: [
        {
          name: '秋月',
          avatar: 'qiuyue.png',
          time: '昨天 18:30',
          content: '今天天气不错，出去走走～',
          photos: [],
          liked: false,
          likeCount: 0
        },
        {
          name: '胡燕杰',
          avatar: 'hu.jpg',
          time: '昨天 12:00',
          content: '分享一张照片',
          photos: ['qiuyue.png'],
          liked: false,
          likeCount: 2
        },
        {
          name: '秋丹',
          avatar: 'qiuyue.png',
          time: '前天 20:00',
          content: '晚安，明天继续加油！',
          photos: [],
          liked: true,
          likeCount: 1
        },
        {
          name: '群助手',
          avatar: 'qunzhu.png',
          time: '星期一',
          content: 'javascript技术交流群：欢迎讨论前端问题',
          photos: [],
          liked: false,
          likeCount: 5
        }
      ]
    }
  },
  methods: {
    toggleLike(item) {
      item.liked = !item.liked
      item.likeCount += item.liked ? 1 : -1
    }
  }
}
</script>

<style scoped>
.moments-page {
  min-height: 100vh;
  background: #f0f0f0;
  padding-bottom: 60px;
}
.moments-header {
  background: #3ca8fe;
  padding: 16px 12px 24px;
}
.my-entry {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 10px 12px;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
}
.my-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
}
.my-name {
  flex: 1;
  font-size: 16px;
}
.my-entry .arrow {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}
.moments-list {
  padding: 12px;
}
.moment-item {
  background: #fff;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
}
.user-row {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}
.user-name {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
.time {
  font-size: 12px;
  color: #999;
  margin-top: 2px;
}
.content {
  font-size: 15px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 8px;
}
.photos {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 8px;
}
.photo {
  width: 80px;
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
}
.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.actions {
  font-size: 13px;
  color: #3ca8fe;
}
.actions .like,
.actions .comment {
  margin-right: 16px;
  cursor: pointer;
}
.actions .like.liked {
  color: #f74c31;
}
</style>
