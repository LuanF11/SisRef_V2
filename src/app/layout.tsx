"use client"

import "./globals.css";
import React from "react";
import { TokenProvider } from "@/lib/contexts/TokenContext";
import { PageRouter } from "@/components/PageRouter/PageRouter";
import Navbar from "@/components/Navbar/Navbar";

process.env.API_URL = "http://192.168.0.104:3721"

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
          <Navbar/>
          <PageRouter />
        </body>
      </html>
    </TokenProvider>
  );
}