import { type NextRequest, NextResponse } from "next/server";

// Отключаем статическую генерацию для этого API роута
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    // Получаем IP-адрес пользователя
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "127.0.0.1";

    // Используем бесплатный сервис для определения страны по IP
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();

    if (data.status === "success") {
      const countryCode = data.countryCode;

      // Определяем язык по коду страны
      let language = "ru"; // по умолчанию

      switch (countryCode) {
        case "DE":
        case "AT":
        case "CH":
          language = "de";
          break;
        case "US":
        case "GB":
        case "CA":
        case "AU":
        case "NZ":
          language = "en";
          break;
        case "CZ":
          language = "cz";
          break;
        case "RU":
        case "BY":
        case "KZ":
        case "KG":
        case "TJ":
        case "UZ":
        case "TM":
        case "MD":
        case "AM":
        case "GE":
        case "AZ":
          language = "ru";
          break;
        default:
          language = "en"; // для остальных стран используем английский
      }

      return NextResponse.json({
        language,
        country: data.country,
        countryCode: data.countryCode,
        city: data.city,
        region: data.regionName,
      });
    }

    return NextResponse.json({
      language: "ru",
      error: "Could not detect country",
    });
  } catch (error) {
    console.error("Error detecting language:", error);
    return NextResponse.json({
      language: "ru",
      error: "Internal server error",
    });
  }
}
