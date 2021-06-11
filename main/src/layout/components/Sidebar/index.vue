<template>
  <div class="sidebar-container">
    <!-- userInfo start -->
    <div class="user-info">
      <img class="avatar" :src="avatar" />
      <p class="name transition" v-if="!isCollapse">{{ username }}</p>
      <!-- dropdown start -->
      <el-dropdown>
        <span class="dropdown">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="navigate(Path.myprofile)"
              >My Profile</el-dropdown-item
            >
            <el-dropdown-item>Settings</el-dropdown-item>
            <el-dropdown-item divided>
              <span @click="handleLogout">Log out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!-- dropdown end -->
    </div>
    <!-- userInfo end -->

    <!-- menu start -->
    <div :class="['menu', { collapsed: isCollapse }]">
      <el-menu
        :style="{ backgroundColor: 'transparent', borderRight: 'none' }"
        mode="vertical"
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        :text-color="'#fffffff'"
        :active-text-color="'#fffffff'"
      >
        <sidebar-item
          v-for="(item, index) in routes"
          :key="index"
          :item="item"
        ></sidebar-item>
      </el-menu>
    </div>

    <!-- menu end -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import SidebarItem from '../Sidebar/SidebarItem.vue'
import { IRoute } from '../../../micro/routes'
import { getRoutes } from '../../../utils/getRoutes'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

enum Path {
  myprofile = '/myprofile'
}

export default defineComponent({
  components: {
    SidebarItem
  },
  setup() {
    const routes: IRoute[] = reactive(getRoutes()) // getRoutes
    const store = useStore()
    const isCollapse = computed(() => !store.getters.isOpened)
    const navigate = useNavigate()

    const { username, avatar } = useGetInfo()
    const handleLogout = useHandleLogout()
    return {
      routes,
      isCollapse,
      username,
      avatar,
      handleLogout,
      navigate,
      Path
    }
  }
})

function useGetInfo() {
  const store = useStore()
  const username = computed(() => store.getters.username)
  const avatar = computed(() => store.getters.avatar)
  return {
    username,
    avatar
  }
}

function useNavigate() {
  const router = useRouter()
  const navigate = (path: string) => {
    router.push(path)
  }

  return navigate
}

function useHandleLogout() {
  const store = useStore()
  const router = useRouter()
  const handle = async () => {
    await store.dispatch('user/logout')
    router.replace('/login') // redirect
  }

  return handle
}
</script>

<style scoped lang="scss">
@import '../../../styles/variables.scss';

.sidebar-container {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: $bgColor;

  /* user-info card start*/
  .user-info {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 20px 0;
    border-bottom: 1px solid rgba($color: #fff, $alpha: 0.4);
    color: #ffffff;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      transition: all 0.8s;
    }
    .avatar:hover {
      transform: rotate(360deg);
    }
    .name {
      font-size: 18px;
    }
    .dropdown {
      color: #ffffff;
      cursor: pointer;
    }
  }
  /* user-info card end */
  /* menu start */
  .menu {
    width: 100%;
    margin-top: 20px;
  }
  /* menu end */
}
</style>
