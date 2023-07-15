
import { Logic } from 'bouhaws-frontend-logic'
  
export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log('middleware/auth.global')

  const router: any = useRouter()
  const route: any = useRoute()

  console.log("route", route)  
  console.log("router", router)  

  Logic.Common.SetRouter(router)
  Logic.Common.SetRoute(route)
  Logic.Common.SetApiUrl(process.env.VUE_APP_API_URL || '')

  // console.log('to', to)
  // console.log('from', from)

  const toRouter: any = to
  const fromRouter: any = from
  
  Logic.Common.preFetchRouteData(toRouter, fromRouter)
})