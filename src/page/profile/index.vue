<!-- 修改个人资料 -->
<template>
  <div class="profile-page">
    <header class="page-header">
      <div class="back" @click="goBack">← 返回</div>
      <div class="title">个人资料</div>
      <div class="save" @click="save">保存</div>
    </header>
    <section class="profile-body">
      <div class="avatar-row">
        <span class="label">头像</span>
        <div class="avatar-wrap" @click="changeAvatar">
          <img :src="avatarUrl" alt="" />
        </div>
      </div>
      <div class="form-row">
        <span class="label">昵称</span>
        <input v-model="form.nickname" type="text" placeholder="请输入昵称" />
      </div>
      <div class="form-row">
        <span class="label">账号</span>
        <span class="readonly">{{ form.account }}</span>
      </div>
      <div class="form-row">
        <span class="label">个性签名</span>
        <input v-model="form.signature" type="text" placeholder="写点什么吧" />
      </div>
      <div class="form-row">
        <span class="label">性别</span>
        <div class="radio-wrap">
          <label><input type="radio" v-model="form.gender" value="男" /> 男</label>
          <label><input type="radio" v-model="form.gender" value="女" /> 女</label>
        </div>
      </div>
      <div class="link-row" @click="$router.push('/space')">
        <span>我的QQ空间</span>
        <span class="arrow">></span>
      </div>
    </section>
    <div class="toast" v-if="toast">{{ toastMsg }}</div>
  </div>
</template>

<script>
const STORAGE_KEY = 'qq_user_profile'
const defaultProfile = {
  nickname: '我的QQ',
  account: '123456789',
  signature: '这个人很懒，什么都没写',
  gender: '男',
  avatar: 'logo.jpg'
}

export default {
  name: 'profile',
  data() {
    return {
      form: { ...defaultProfile },
      toast: false,
      toastMsg: ''
    }
  },
  computed: {
    avatarUrl() {
      return '/static/img/' + (this.form.avatar || 'logo.jpg')
    }
  },
  mounted() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        this.form = { ...defaultProfile, ...parsed }
      }
    } catch (e) {}
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    changeAvatar() {
      this.showToast('演示版暂不支持更换头像')
    },
    save() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.form))
        this.showToast('保存成功')
      } catch (e) {
        this.showToast('保存失败')
      }
    },
    showToast(msg) {
      this.toastMsg = msg
      this.toast = true
      setTimeout(() => {
        this.toast = false
      }, 1500)
    }
  }
}
</script>

<style scoped>
.profile-page {
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
.page-header .save {
  font-size: 16px;
  cursor: pointer;
}
.page-header .title {
  font-size: 18px;
}
.profile-body {
  padding: 12px;
}
.avatar-row,
.form-row,
.link-row {
  display: flex;
  align-items: center;
  padding: 14px 12px;
  background: #fff;
  margin-bottom: 1px;
  border-radius: 4px;
}
.avatar-row .label,
.form-row .label,
.link-row span:first-child {
  width: 80px;
  flex-shrink: 0;
  font-size: 15px;
  color: #333;
}
.avatar-wrap {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
}
.avatar-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.form-row input {
  flex: 1;
  border: none;
  font-size: 15px;
  outline: none;
}
.form-row .readonly {
  flex: 1;
  color: #999;
  font-size: 15px;
}
.radio-wrap label {
  margin-right: 20px;
  font-size: 15px;
}
.link-row {
  margin-top: 12px;
  cursor: pointer;
}
.link-row .arrow {
  color: #999;
  width: auto;
}
[type="radio"] {
  margin-right: 6px;
}
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,0.7);
  color: #fff;
  padding: 12px 20px;
  border-radius: 4px;
  font-size: 14px;
  z-index: 9999;
}
</style>
