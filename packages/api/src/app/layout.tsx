import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgentDrop — Agent-native file sharing",
  description:
    "Cryptographic identity. Scoped file grants. Zero trust. CLI + SDK + API for agent-to-agent file sharing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: "#0a0a0a" }}>{children}</body>
    </html>
  );
}
