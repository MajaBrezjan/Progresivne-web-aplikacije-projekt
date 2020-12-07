import Index from './components/Index.vue'
import AddSubject from './components/AddSubject.vue'
import EditSubject from './components/EditSubject.vue'

export default [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-subject',
      name:'AddSubject',
      component: AddSubject
    },
    {
      path: '/edit-subject/:subject_slug',
      name:'EditSubject',
      component: EditSubject
    }
  ];