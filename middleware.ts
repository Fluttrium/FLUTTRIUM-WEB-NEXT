import { NextRequest, NextResponse, userAgent } from 'next/server'

export function middleware(request: NextRequest) {
    const url = request.nextUrl
    const { device } = userAgent(request)

    // Проверяем, является ли устройство мобильным
    if (device.type === 'mobile') {
        // Если мобильное устройство, перенаправляем на страницу maintenance
        url.pathname = '/maintenance'
        return NextResponse.redirect(url)
    }

    // Если не мобильное устройство, продолжаем обычный рендеринг
    return NextResponse.next()
}

// Конфигурация middleware для применения ко всем страницам, кроме /maintenance
export const config = {
    matcher: '/((?!maintenance).*)',
}
