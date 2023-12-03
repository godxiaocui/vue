<template>
  <div class="login">
    <van-nav-bar title="会员登录" left-arrow @click-left="$router.go(-1)" />
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input class="inp" maxlength="11" placeholder="请输入手机号码" type="text" v-model="mobile">
        </div>
        <div class="form-item">
          <input class="inp"  maxlength="5" placeholder="请输入图形验证码" type="text" v-model="picCode">
          <img v-if="picUrl" :src="picUrl" alt="" @click="getPicCode" >
        </div>
        <div class="form-item">
          <input class="inp" placeholder="请输入短信验证码" type="text" v-model="msgCode">
          <button @click="getCode">
            {{ second === totalSecond ? '获取验证码' : second + '秒后获取验证码' }}</button>
        </div>
      </div>

      <div class="login-btn" @click="login">登录</div>
    </div>
  </div>
</template>

<script>
import { getPicCode, getMsgCode,codeLogin } from '@/api/login'
import { Toast } from 'vant'
export default {
  data() {
    return {
      //图形验证码的code和key。根据图形验证码的key去找对应的饭图形验证码数字做比对
      picCode: '', // 用户输入的code
      picKey: '', // 图形验证码的key
      picUrl: '',
      totalSecond: 60, // 总秒数
      second: 60, //当前秒数
      timer: null, // 定时器id
      mobile: '',//图形验证码
      msgCode: '',
    }
  },
  name: 'LoginPage',
  async created() {
    this.getPicCode()
  },
  destroyed() {
    //清除定时器
    clearInterval(this.timer)
  },
  methods: {
    //获取图形验证码
    async getPicCode() {
      const res = await getPicCode()
      this.picUrl = res.data.base64
      this.picKey = res.data.key
      // Toast('TEST')
      console.log(res)
    },
    // 获取短信验证码
    async getCode() {
      if (!this.vailFn()) {
        return;
      }
      if (!this.timer && this.second === this.totalSecond) {
        //发请求
        const res = await getMsgCode(this.picCode, this.picKey, this.mobile)
        console.log(res)
        //定时器怎么做
        this.timer = setInterval(() => {
          this.second--
          if (this.second <= 0) {
            clearInterval(this.timer)
            this.timer = null
            this.second = 60
          }
        }, 1000)
      }
    },
    // 校验手机号
    vailFn() {
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.$toast('请输入正确的手机号')
        return false
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        this.$toast('请输入正确的图形验证码')
        return false
      }
      return true
    },
    // 登陆
    async login() {
      if (!this.vailFn()) {
        return;
      }
      if (!/^\d{6}$/.test(this.msgCode)) {
        this.$toast('请输入正确的手机验证码')
        return
      }
      const res=await codeLogin(this.mobile,this.msgCode);
      this.$store.commit('user/setUserInfo',res.data)
      console.log(res)
      this.$router.push('/')
    this.$toast('登录成功')
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 49px 29px;

  .title {
    margin-bottom: 20px;

    h3 {
      font-size: 26px;
      font-weight: normal;
    }

    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }

  .form-item {
    border-bottom: 1px solid #f3f1f2;
    padding: 8px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;

    .inp {
      display: block;
      border: none;
      outline: none;
      height: 32px;
      font-size: 14px;
      flex: 1;
    }

    img {
      width: 94px;
      height: 31px;
    }

    button {
      height: 31px;
      border: none;
      font-size: 13px;
      color: #cea26a;
      background-color: transparent;
      padding-right: 9px;
    }
  }

  .login-btn {
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg, #ecb53c, #ff9211);
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>