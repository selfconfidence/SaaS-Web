/*
 * @Author: itcast 
 * @Description: xxx业务模块 
 * @Date: 2018-04-13 16:13:27 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-09-03 11:12:47
 */

import Layout from '@/module-dashboard/pages/layout'
const _import = require('@/router/import_' + process.env.NODE_ENV)

export default [
  {
    root: true,
    path: '/saas-client',
    component: Layout,
    redirect: 'noredirect',
    name: 'saas-client',
    meta: {
      title: '企业总览',
      icon: 'component'
    },
    children: [
      {
        path: 'index',
        component: _import('saas-client/pages/index'), //固定写法
        name: 'saas-clients-index',
        meta: {title: 'Saas企业列表', icon: 'component', noCache: true}
      },
      {
        path: 'datile/:id',
        component: _import('saas-client/pages/datile'), //固定写法
        name: 'saas-clients-datile',
        meta: {title: 'Saas企业详情', icon: 'component', noCache: true}
      }
    ]
  }
]
