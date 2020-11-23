import React from 'react'

const SceneRouter = [
  {
    path: '/scene/flex',
    name: 'Flex',
    icon: <i className="iconfont">&#xe6a2;</i>,
    title: '布局',
    component: React.lazy(() => import('pages/flex'))
  },
  {
    path: '/scene/menu',
    name: 'Menu',
    icon: <i className="iconfont">&#xe652;</i>,
    title: '菜单',
    component: React.lazy(() => import('pages/menu'))
  },
  {
    path: '/scene/form',
    name: 'Form',
    icon: <i className="iconfont">&#xe7cc;</i>,
    title: '表单',
    component: React.lazy(() => import('pages/form'))
  },
  {
    path: '/scene/event',
    name: 'Event',
    icon: <i className="iconfont">&#xe63e;</i>,
    title: '事件',
    component: React.lazy(() => import('pages/event'))
  },
  {
    path: '/scene/search',
    name: 'Search',
    icon: <i className="iconfont">&#xe625;</i>,
    title: '查询',
    component: React.lazy(() => import('pages/search'))
  },
  {
    path: '/scene/image',
    name: 'Image',
    icon: <i className="iconfont">&#xe61e;</i>,
    title: '图片',
    component: React.lazy(() => import('pages/image'))
  },
  {
    path: '/scene/upload',
    name: 'Upload',
    icon: <i className="iconfont">&#xe612;</i>,
    title: '上传',
    component: React.lazy(() => import('pages/upload'))
  },
  {
    path: '/scene/download',
    name: 'Download',
    icon: <i className="iconfont">&#xe60a;</i>,
    title: '下载',
    component: React.lazy(() => import('pages/download'))
  },
  {
    path: '/scene/address',
    name: 'Address',
    icon: <i className="iconfont">&#xe698;</i>,
    title: '地址',
    component: React.lazy(() => import('pages/address'))
  },
  {
    path: '/scene/map',
    name: 'Map',
    icon: <i className="iconfont">&#xe712;</i>,
    title: '地图',
    component: React.lazy(() => import('pages/map'))
  },
  {
    path: '/scene/article',
    name: 'Article',
    icon: <i className="iconfont">&#xe62e;</i>,
    title: '文章',
    component: React.lazy(() => import('pages/article'))
  },
]

export default SceneRouter