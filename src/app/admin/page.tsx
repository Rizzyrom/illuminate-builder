"use client";

import dynamic from "next/dynamic";

// Dynamically import the admin
const AdminPage = dynamic(
  () => import("tinacms/dist/admin").then((m) => m.default),
  { ssr: false }
);

export default function Admin() {
  return <AdminPage />;
}