import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Register',
    to: '/register',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: 'Products',
    to: '/addproducts',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Products',
        to: '/AddProducts',
      },
      {
        component: CNavItem,
        name: 'Product Category',
        to: '/productcategory',
      },
      {
        component: CNavItem,
        name: 'View Products',
        to: '/AllProducts',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'News',
    to: '/news',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add News',
        to: '/addnews',
      },
      {
        component: CNavItem,
        name: 'All News',
        to: '/allnews',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Orders',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Total Orders',
        to: '/totalorders',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Career',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Career',
        to: '/addcareer',
      },
      {
        component: CNavItem,
        name: 'All Career',
        to: '/allcareer',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Achievements',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Achievements',
        to: '/addachievements',
      },
      {
        component: CNavItem,
        name: 'Total Achievements',
        to: '/allachievements',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Setting',
  },
  {
    component: CNavItem,
    name: 'My Profile',
    to: '/profile',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Total Registered Users',
    to: '/totalusers',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
]
export default _nav
