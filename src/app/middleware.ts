import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const userAgent = request.headers.get('user-agent') || ''

    // Проверка на мобильное устройство
    const isMobile = /Android|iPhone|iPad|iPod/i.test(userAgent)

    if (isMobile) {
        // Редирект на страницу с сообщением о проведении работ для мобильных
        return NextResponse.redirect(new URL('/maintenance', request.url))
    }
}

// Определите маршруты, к которым применяется middleware
export const config = {
    matcher: '/((?!maintenance).*)', // middleware применяется ко всем маршрутам, кроме /maintenance
}
