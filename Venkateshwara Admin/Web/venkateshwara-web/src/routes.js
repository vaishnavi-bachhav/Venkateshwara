import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Register = React.lazy(() => import('./views/Register'))
const Login = React.lazy(() => import('./views/Login'))

//products
const AddProducts = React.lazy(() => import('./views/products/AddProducts'))
const AllProducts = React.lazy(() => import('./views/products/AllProducts'))
const ProductCategory = React.lazy(() => import('./views/products/ProductCategory'))

//profile
const Profile = React.lazy(() => import('./views/Profile'))
const TotalUsers = React.lazy(() => import('./views/TotalUsers'))


// news
const AddNews = React.lazy(() => import('./views/news/AddNews'))
const AllNews = React.lazy(() => import('./views/news/AllNews'))

//orders
const TotalOrders = React.lazy(() => import('./views/orders/TotalOrders'))

//career
const AddCareer = React.lazy(() => import('./views/career/AddCareer'))
const AllCareer = React.lazy(() => import('./views/career/AllCareer'))

//Achievements
const AddAchievements = React.lazy(() => import('./views/achievements/AddAchievements'))
const AllAchievements = React.lazy(() => import('./views/achievements/AllAchievements'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/Register', name: 'Colors', element: Register },
  { path: '/login', name: 'Colors', element: Login },
  { path: '/profile', name: 'Colors', element: Profile },

  { path: '/AddProducts', name: 'products', element: AddProducts },
  { path: '/AllProducts', name: 'products', element: AllProducts },
  { path: '/productcategory', name: 'products', element: ProductCategory },


  { path: '/addnews', name: 'News', element: AddNews },
  { path: '/allnews', name: 'News', element: AllNews },

  { path: '/totalorders', name: 'orders', element: TotalOrders },

  { path: '/addcareer', name: 'career', element: AddCareer },
  { path: '/allcareer', name: 'career', element: AllCareer },

  { path: '/addachievements', name: 'achievements', element: AddAchievements },
  { path: '/allachievements', name: 'achievements', element: AllAchievements },
  { path: '/totalusers', name: 'achievements', element: TotalUsers },
]

export default routes
