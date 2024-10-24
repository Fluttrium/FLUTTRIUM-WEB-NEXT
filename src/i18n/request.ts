import {cookies} from 'next/headers';

// Определим тип для нашего конфигурационного объекта
interface RequestConfig {
    locale: string;
    messages: Record<string, string>; // Здесь мы предполагаем, что сообщения будут в формате { ключ: значение }
}

// Новый getRequestConfig
export default async function getRequestConfig(): Promise<RequestConfig> {
    const cookieStore = cookies();
    const locale = cookieStore.get('locale')?.value || 'en'; // Устанавливаем значение по умолчанию на 'en'

    const messages = (await import(`../../messages/${locale}.json`)).default;

    return {
        locale,
        messages
    };
}
