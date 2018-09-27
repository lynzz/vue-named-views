const config = [
  {
    label: '用户管理',
    groupName: 'user',
    children: [
      {
        name: 'user-list',
        label: '用户列表',
        meta: {
          sidebar: true
        }
      },
      {
        name: 'user-details',
        label: '用户详情',
        meta: {
          sidebar: true
        }
      }
    ]
  }
]

export default config
