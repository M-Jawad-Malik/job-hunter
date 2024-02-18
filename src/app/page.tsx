"use client"
import Login from "./components/Login";
import Dashboard from "./dashboard/page";
import Register from "./components/Register";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Login />
      {/* <Dashboard /> */}
    </main>
  );
}
