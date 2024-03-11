"use client"

import "./globals.css";
import React from "react";
import { TokenProvider } from "@/lib/contexts/TokenContext";
import { PageRouter } from "@/components/PageRouter/PageRouter";
import Navbar from "@/components/Navbar/Navbar";
import WidthLimiter from "@/components/WidthLimiter/WidthLimiter";

process.env.API_URL = "https://ruapi.cedro.ifce.edu.br"

export default function RootLayout() {
  return (
    <TokenProvider>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <body>
          <Navbar />
          <WidthLimiter>
            <PageRouter />
          </WidthLimiter>
        </body>
      </html>
    </TokenProvider>
  );
}