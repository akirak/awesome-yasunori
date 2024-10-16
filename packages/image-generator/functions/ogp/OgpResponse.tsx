import { ImageResponse } from "@cloudflare/pages-plugin-vercel-og/api";
import type { Response } from "@cloudflare/workers-types";
import React from "react";

interface Props {
  id: number;
  title: string;
  content: string;
  senpan: string;
  date: string;
  at: string;
}

export function OgpResponse({
  id,
  title,
  content,
  senpan,
  date,
  at,
}: Props): Response {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: "#2e2e2e",
        border: "2px solid #424242",
      }}
    >
      <div
        style={{
          display: "flex",
          maxWidth: 1200,
          padding: 48,
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#c9c9c9",
            fontSize: 48,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            color: "#828282",
            fontSize: 36,
          }}
        >
          #{id}
        </div>
      </div>
      <div
        style={{
          flex: 2,
          backgroundColor: "#242424",
          color: "#c9c9c9",
          fontSize: 36,
          maxWidth: 1200,
          overflow: "hidden",
          paddingLeft: 48,
          paddingRight: 48,
          paddingTop: 32,
          paddingBottom: 32,
        }}
      >
        {content}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            color: "#d1d5db",
            display: "flex",
            alignItems: "center",
            paddingLeft: 48,
            paddingRight: 48,
            paddingTop: 24,
            paddingBottom: 24,
          }}
        >
          <img
            alt={senpan}
            src={`https://avatars.githubusercontent.com/${senpan}`}
            width={84}
            height={84}
            style={{ borderRadius: 8, marginRight: 24 }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "stretch",
            }}
          >
            <div style={{ display: "flex", color: "#c9c9c9", fontSize: 42 }}>
              {senpan}
            </div>
            <div style={{ display: "flex", fontSize: 32, color: "#828282" }}>
              {date} at {at}
            </div>
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
