import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    const url = request.nextUrl
    const userAgent = request.headers.get('user-agent') || ''

    console.log('User Agent:', userAgent); // Выводим User-Agent в консоль

    // Проверка на мобильное или планшетное устройство
    const isMobileOrTablet = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile|Tablet/i.test(userAgent)

    console.log('Is Mobile or Tablet:', isMobileOrTablet); // Выводим результат проверки

    if (isMobileOrTablet) {
        // Если устройство мобильное или планшетное, редиректим на /maintenance
        url.pathname = '/maintenance'
        console.log('Redirecting to:', url.pathname); // Выводим путь редиректа
        return NextResponse.redirect(url)
    }

    // Если не мобильное или планшетное, продолжаем
    return NextResponse.next()
}

// Применение middleware для всех страниц, кроме /maintenance
export const config = {
    matcher: '/((?!maintenance).*)',
}
