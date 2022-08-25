<template>
  <h1>會員管理</h1>
  <div class="container">
    <div class="usersbox">
      <n-divider />
      <div>
        <n-space vertical>
          <n-table striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>使用者</th>
                <th>刪除</th>
              </tr>
            </thead>
            <tbody>
              <template v-for='(user) in sliceUsers'>
                <tr v-if='sliceUsers.length > 0' :key='user._id'>
                  <td>{{user._id}}</td>
                  <td>{{ user.account }}</td>
                  <td>
                    <n-button type="error" @click="del(user._id)">刪除</n-button>
                  </td>
                </tr>
              </template>
            </tbody>
          </n-table>
        </n-space>
      </div>
      <n-pagination v-model:page="currentPage" :page-count="Math.ceil(users.length / pageSize)" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'

const users = reactive([])

const currentPage = ref(1)
const pageSize = 5
const sliceUsers = computed(()=> {
  return users.slice((currentPage.value * pageSize) - pageSize, (currentPage.value * pageSize))
})

// 刪除會員
const del = async (_id) => {
  const idx = sliceUsers.value.findIndex(item => item._id === _id)
  try {
    await apiAuth.delete('/users/' + _id)
    Swal.fire({
        icon: 'success',
        title: '成功',
        text: '刪除成功'
      })
    sliceUsers.value.splice(idx, 1)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    users.push(...data.result)
    console.log(users)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '無法取得會員資料'
    })
  }
}
init()
</script>

<style scoped>
  .container {
    margin: auto;
    width: 90%;
    margin-left: 178px;
  }
  .usersbox {
    margin: auto;
    width: 80%;
  }

  .n-pagination {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 1.5rem;
  }
</style>