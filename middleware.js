import { NextResponse } from 'next/server'

function withMiddleware1(middleware) {
  return async (request) => {
    console.log('middleware1 ' + request.url)
    return middleware(request)
  }
}

function withMiddleware2(middleware) {
  return async (request) => {
    console.log('middleware2 ' + request.url)
    return middleware(request)
  }
}

async function middleware(request) {
  console.log('middleware ' + request.url)
  return NextResponse.next()
}

export default withMiddleware2(withMiddleware1(middleware))

export const config = {
  matcher: '/api/:path*',
}