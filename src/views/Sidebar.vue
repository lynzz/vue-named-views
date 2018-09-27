<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/user/user-list">用户列表</router-link> |
    <router-link to="/user/user-details">用户详情</router-link>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
    }
  }
}
</script>
