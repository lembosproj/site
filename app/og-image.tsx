import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
    return new ImageResponse(
        <div
            style={{
                display: "flex",
                fontSize: 40,
                color: "white",
                background: "linear-gradient(-137deg, #9d4edd 0%, #5a189a 100%)",
                width: "100%",
                height: "100%",
                padding: "50px 200px",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
                <svg width="120" height="120" viewBox="0 0 40 40" fill="white">
                    {/* Simple placeholder logo - replace with actual SVG path */}
                    <rect x="5" y="5" width="30" height="30" rx="5" />
                    <path d="M15 20 L25 20 M20 15 L20 25" stroke="#5a189a" strokeWidth="4" />
                </svg>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h1 style={{ margin: 0, fontSize: 70, fontWeight: "bold" }}>Lembos</h1>
                    <p style={{ margin: 0, fontSize: 30 }}>Ship Software with Confidence</p>
                </div>
            </div>
        </div>,
        {
            width: 1200,
            height: 630,
        },
    )
}
