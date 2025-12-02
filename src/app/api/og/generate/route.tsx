import { ImageResponse } from "next/og";
import { baseURL, person } from "@/resources";

export const runtime = "nodejs";

export async function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "Portfolio";

  async function loadGoogleFont(font: string) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
      
      const fontUrl = `https://fonts.googleapis.com/css2?family=${font}`;
      const css = await (await fetch(fontUrl, { signal: controller.signal })).text();
      clearTimeout(timeoutId);
      
      const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);

      if (resource) {
        const fontController = new AbortController();
        const fontTimeoutId = setTimeout(() => fontController.abort(), 5000);
        const response = await fetch(resource[1], { signal: fontController.signal });
        clearTimeout(fontTimeoutId);
        
        if (response.status == 200) {
          return await response.arrayBuffer();
        }
      }

      throw new Error("failed to load font data");
    } catch (error) {
      // Return null if font loading fails - ImageResponse will use fallback
      console.error("Font loading error:", error);
      return null;
    }
  }

  // Load font with timeout handling
  const fontData = await loadGoogleFont("Geist:wght@400");

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "6rem",
        background: "#151515",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "4rem",
          fontStyle: "normal",
          color: "white",
        }}
      >
        <span
          style={{
            padding: "1rem",
            fontSize: "6rem",
            lineHeight: "8rem",
            letterSpacing: "-0.05em",
            whiteSpace: "wrap",
            textWrap: "balance",
            overflow: "hidden",
          }}
        >
          {title}
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5rem",
          }}
        >
          <img
            src={baseURL + person.avatar}
            style={{
              width: "12rem",
              height: "12rem",
              objectFit: "cover",
              borderRadius: "100%",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <span
              style={{
                fontSize: "4.5rem",
                lineHeight: "4.5rem",
                whiteSpace: "pre-wrap",
                textWrap: "balance",
              }}
            >
              {person.name}
            </span>
            <span
              style={{
                fontSize: "2.5rem",
                lineHeight: "2.5rem",
                whiteSpace: "pre-wrap",
                textWrap: "balance",
                opacity: "0.6",
              }}
            >
              {person.role}
            </span>
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1280,
      height: 720,
      fonts: fontData
        ? [
            {
              name: "Geist",
              data: fontData,
              style: "normal",
            },
          ]
        : [],
    },
  );
}
