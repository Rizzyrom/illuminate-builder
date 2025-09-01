"use client";

import dynamic from "next/dynamic";

// Dynamically import TinaCMS admin
const TinaCMS = dynamic(() => import("tinacms"), {
  ssr: false,
});

export default function AdminPage() {
  return <TinaCMS />;
}