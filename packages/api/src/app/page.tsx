export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        color: "#e5e5e5",
        fontFamily:
          'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 24px",
      }}
    >
      {/* Hero */}
      <header
        style={{
          textAlign: "center",
          paddingTop: "120px",
          paddingBottom: "64px",
          maxWidth: "720px",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: 700,
            color: "#ffffff",
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          AgentDrop
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#a3a3a3",
            marginTop: "16px",
            lineHeight: 1.6,
          }}
        >
          Agent-native file sharing. Cryptographic identity. Zero trust.
        </p>
      </header>

      {/* Install Command */}
      <section
        style={{
          width: "100%",
          maxWidth: "640px",
          marginBottom: "80px",
        }}
      >
        <div
          style={{
            backgroundColor: "#171717",
            border: "1px solid #262626",
            borderRadius: "8px",
            padding: "20px 24px",
            position: "relative",
          }}
        >
          <span style={{ color: "#737373", userSelect: "none" }}>$ </span>
          <code style={{ color: "#4ade80", fontSize: "1rem" }}>
            curl -fsSL https://agentdrop.sh/install | sh
          </code>
        </div>
      </section>

      {/* Features Grid */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
          maxWidth: "900px",
          width: "100%",
          marginBottom: "80px",
        }}
      >
        <FeatureCard
          title="Ed25519 identity"
          description="Every agent gets a cryptographic keypair. No passwords, no API keys — just math."
        />
        <FeatureCard
          title="Scoped grants"
          description="Share files with signed JWTs. Time-limited, revocable, audience-locked."
        />
        <FeatureCard
          title="CLI + SDK + API"
          description="One command to install. TypeScript SDK for agents. REST API for everything."
        />
      </section>

      {/* Quick Start */}
      <section
        style={{
          maxWidth: "640px",
          width: "100%",
          marginBottom: "80px",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#ffffff",
            marginBottom: "24px",
          }}
        >
          Quick start
        </h2>
        <div
          style={{
            backgroundColor: "#171717",
            border: "1px solid #262626",
            borderRadius: "8px",
            padding: "20px 24px",
            lineHeight: 1.8,
            fontSize: "0.9rem",
          }}
        >
          <CodeLine comment="# Generate an agent keypair" />
          <CodeLine command="agentdrop keys create my-agent" />
          <CodeLine />
          <CodeLine comment="# Upload a file" />
          <CodeLine command="agentdrop upload data.csv" />
          <CodeLine />
          <CodeLine comment="# Grant access to another agent" />
          <CodeLine command="agentdrop grant <file_id> --to <key_hash> --ttl 1h" />
          <CodeLine />
          <CodeLine comment="# Download with a grant token" />
          <CodeLine command="agentdrop download <file_id> --grant <token>" />
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #262626",
          paddingTop: "32px",
          paddingBottom: "48px",
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          justifyContent: "center",
          gap: "32px",
          fontSize: "0.875rem",
          color: "#737373",
        }}
      >
        <a
          href="https://github.com/djgould/agentdrop"
          style={{ color: "#a3a3a3", textDecoration: "none" }}
        >
          GitHub
        </a>
        <a
          href="https://github.com/djgould/agentdrop#readme"
          style={{ color: "#a3a3a3", textDecoration: "none" }}
        >
          Docs
        </a>
      </footer>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        backgroundColor: "#171717",
        border: "1px solid #262626",
        borderRadius: "8px",
        padding: "24px",
      }}
    >
      <h3
        style={{
          fontSize: "1rem",
          fontWeight: 600,
          color: "#ffffff",
          marginTop: 0,
          marginBottom: "8px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "0.875rem",
          color: "#a3a3a3",
          margin: 0,
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </div>
  );
}

function CodeLine({
  command,
  comment,
}: {
  command?: string;
  comment?: string;
} = {}) {
  if (!command && !comment) {
    return <br />;
  }
  return (
    <div>
      {comment && <span style={{ color: "#737373" }}>{comment}</span>}
      {command && (
        <>
          <span style={{ color: "#737373", userSelect: "none" }}>$ </span>
          <span style={{ color: "#e5e5e5" }}>{command}</span>
        </>
      )}
    </div>
  );
}
