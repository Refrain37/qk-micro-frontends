<template>
  <div class="myprofile-container">
    <!-- myprofile-card start -->
    <div class="myprofile-card">
      <div class="header">
        <div class="contacts">
          <el-popover
            placement="right-start"
            title="Email"
            trigger="click"
            :content="userInfo.email"
          >
            <template #reference>
              <i class="el-icon-message icon"></i>
            </template>
          </el-popover>
          <el-popover
            placement="right-start"
            title="github"
            trigger="click"
            :content="userInfo.github"
          >
            <template #reference>
              <i class="el-icon-medal icon"></i>
            </template>
          </el-popover>
        </div>
      </div>
      <div class="body">
        <div class="avatar">
          <img :src="userInfo.avatar" alt="" />
        </div>
        <h1 class="username">{{ userInfo.username }}</h1>
        <div class="skills">
          <el-tag v-for="skill in userInfo.skills" :key="skill" effect="dark">
            {{ skill }}
          </el-tag>
        </div>
        <p class="introduction">{{ userInfo.introduction }}</p>
      </div>
    </div>
    <!-- myprofile-card end -->

    <!-- form start -->

    <!-- form end -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const userInfo = useGetUserInfo()
    return {
      userInfo
    }
  }
})

interface IUserInfo {
  username: string
  avatar: string
  email: string
  github: string
  introduction: string
  skills: string[]
}

function useGetUserInfo() {
  const userInfo: IUserInfo = reactive({
    username: '',
    avatar: '',
    email: '',
    github: '',
    introduction: '',
    skills: []
  })
  const store = useStore()
  const {
    username,
    avatar,
    email,
    github,
    introduction,
    skills
  } = store.state.user

  userInfo.username = username
  userInfo.avatar = avatar
  userInfo.email = email
  userInfo.github = github
  userInfo.introduction = introduction
  userInfo.skills = skills

  return userInfo
}
</script>

<style scoped lang="scss">
.myprofile-container {
  display: flex;
  flex-direction: row;
  /* myprofile-card start */
  .myprofile-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
    padding-bottom: 20px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 10px;
    transition: all 0.5s;
    &:hover {
      box-shadow: 0.1px 0.1px 5px #ccc;
    }
    .header {
      height: 150px;
      width: 100%;
      position: relative;
      background-image: linear-gradient(125deg, #12c2e9, #c471ed, #f64f59);
      background-size: 400%;
      animation: bganimation 15s infinite;
      @keyframes bganimation {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      .contacts {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 20px;
        right: 20px;
        .icon {
          margin-bottom: 10px;
          font-size: 18px;
          color: white;
          cursor: pointer;
          transition: transform 0.5s;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
    .body {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: -50px;
      padding-bottom: 20px;
      z-index: 1;
      .avatar {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        cursor: pointer;
        object-fit: cover;
        overflow: hidden;
        & > img {
          width: 100%;
          height: 100%;
          transition: transform 0.5s;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
      .username {
        margin-top: 20px;
      }
      .skills {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 20px;
        justify-content: space-around;
      }
      .introduction {
        margin-top: 20px;
        text-align: center;
      }
    }
  }
  /* myprofile-card end */
}
</style>
