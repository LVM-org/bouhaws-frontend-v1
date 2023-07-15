// import { Logic } from 'bouhaws-frontend-logic'
  import { useRoute, useRouter } from 'vue-router';
// import { Context  } from 'nuxt/types' 
import { NuxtAppOptions } from '@nuxt/types/app'
// import { Context } from '@nuxt/types'

// export  const test = async (nuxtApp: NuxtAppOptions ) => {
//   // Access route information
//   const Context = nuxtApp.context
//   console.log("Context", "Context")
//   console.log("Context", Context)

//   // Your other initialization logic here 
//   await nuxtApp.mount('#app')
// }

export const test =  () => {
    const router = useRouter();
    const route = useRoute(); 

    console.log("tesbrerdsadasdadejs ")
    console.log("wewewewewew ")
    console.log("tesbrerdsadasdadejs ")
    console.log("wewewewewew ")
    console.log("router", useRouter())




    // console.log("route", route) 

    // setup logic route and routers
    // Logic.Common.SetRouter(router)
    // Logic.Common.SetRoute(route)

    // Setup backend api url
    // Logic.Common.SetApiUrl(process.env.VUE_APP_API_URL || '')
 
    // const AuthUser = localStorage.getItem('auth_user')
    //   ? JSON.parse(localStorage.getItem('auth_user') || '{}')
    //   : undefined

    // if (AuthUser == undefined) {
    //   if (!window.location.href.includes('/auth/reset-password')) {
    //     Logic.Common.GoToRoute('/auth/login')
    //   }
    // } else {
    //   // fetch auth user in background
    //   Logic.Auth.GetAuthUser()
    // }
}