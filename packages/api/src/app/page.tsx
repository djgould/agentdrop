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
          paddingBottom: "40px",
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
            marginTop: "20px",
            lineHeight: 1.6,
          }}
        >
          File sharing for AI agents. Ed25519 identity, scoped grants, full
          audit trail.
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
          }}
        >
          <span style={{ color: "#737373", userSelect: "none" }}>$ </span>
          <code style={{ color: "#4ade80", fontSize: "1rem" }}>
            curl -fsSL https://agentdrop.sh/install | sh
          </code>
        </div>
      </section>

      {/* How It Works */}
      <section
        style={{
          maxWidth: "900px",
          width: "100%",
          marginBottom: "80px",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#ffffff",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          How it works
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          <StepCard
            step="1"
            title="Generate a keypair"
            description="Each agent gets an Ed25519 identity. Private key stays local."
          />
          <StepCard
            step="2"
            title="Upload files"
            description="Requests are signed with the agent's key. No tokens to rotate."
          />
          <StepCard
            step="3"
            title="Grant access"
            description="Issue a scoped JWT: which file, which agent, how long."
          />
          <StepCard
            step="4"
            title="Download"
            description="Recipient presents the grant token. Five checks before bytes move."
          />
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
          description="Agents authenticate with cryptographic keypairs. No passwords, no API keys."
        />
        <FeatureCard
          title="Scoped grants"
          description="JWTs specify file, recipient, permissions, and TTL. Audience-locked and revocable."
        />
        <FeatureCard
          title="Signed requests"
          description="Every call is signed over method, path, timestamp, nonce, and body hash."
        />
        <FeatureCard
          title="Audit trail"
          description="Every action logged with actor, resource, and timestamp."
        />
        <FeatureCard
          title="Human oversight"
          description="Register keys, revoke access, and review logs via OAuth."
        />
        <FeatureCard
          title="CLI + SDK + API"
          description="Single-file CLI, TypeScript SDK, and REST API. Node.js 18+."
        />
      </section>

      {/* SDK Example */}
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
            textAlign: "center",
          }}
        >
          SDK
        </h2>
        <div
          style={{
            backgroundColor: "#171717",
            border: "1px solid #262626",
            borderRadius: "8px",
            padding: "20px 24px",
            lineHeight: 1.8,
            fontSize: "0.8rem",
            overflow: "auto",
          }}
        >
          <CodeLine dim="import { AgentDropClient } from '@agentdrop/sdk'" />
          <CodeLine dim="import { generateKeyPair } from '@agentdrop/shared'" />
          <CodeLine />
          <CodeLine dim="const { publicKey, privateKey } = await generateKeyPair()" />
          <CodeLine dim="const client = new AgentDropClient({ publicKey, privateKey })" />
          <CodeLine />
          <CodeLine comment="// Upload" />
          <CodeLine dim="const file = await client.upload(buf, 'report.pdf', 'application/pdf')" />
          <CodeLine />
          <CodeLine comment="// Grant access to another agent for 1 hour" />
          <CodeLine dim="const { token } = await client.createGrant(" />
          <CodeLine dim="  file.id, recipientKeyHash, ['download'], 3600" />
          <CodeLine dim=")" />
        </div>
      </section>

      {/* CLI Example */}
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
            textAlign: "center",
          }}
        >
          CLI
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <ChatBubble agent="A" text="I have a report to share. Let me upload it." />
          <TerminalBlock>
            <CodeLine command="agentdrop keys create agent-a" />
            <CodeLine command="agentdrop upload report.pdf" />
            <CodeLine dim="  → file_id: f-8a3b..." />
          </TerminalBlock>

          <ChatBubble agent="B" text="I need that report. Here's my key hash." />
          <TerminalBlock>
            <CodeLine command="agentdrop keys create agent-b" />
            <CodeLine command="agentdrop keys export agent-b" />
            <CodeLine dim="  → key_hash: kh-7f2e..." />
          </TerminalBlock>

          <ChatBubble agent="A" text="Granted. Token is scoped to you, expires in 1 hour." />
          <TerminalBlock>
            <CodeLine command="agentdrop grant f-8a3b --to kh-7f2e --ttl 1h" />
            <CodeLine dim="  → token: eyJhbG..." />
          </TerminalBlock>

          <ChatBubble agent="B" text="Got it. Downloading now." />
          <TerminalBlock>
            <CodeLine command="agentdrop download f-8a3b --grant eyJhbG..." />
            <CodeLine dim="  → saved report.pdf (2.4 MB)" />
          </TerminalBlock>
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

function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1px solid #4ade80",
          color: "#4ade80",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.875rem",
          fontWeight: 600,
          marginBottom: "12px",
        }}
      >
        {step}
      </div>
      <h3
        style={{
          fontSize: "0.9rem",
          fontWeight: 600,
          color: "#ffffff",
          margin: "0 0 8px 0",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "0.8rem",
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

function ChatBubble({ agent, text }: { agent: string; text: string }) {
  const isA = agent === "A";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        alignSelf: isA ? "flex-start" : "flex-end",
        maxWidth: "80%",
        flexDirection: isA ? "row" : "row-reverse",
      }}
    >
      <div
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          backgroundColor: isA ? "#1e3a2f" : "#1e293b",
          color: isA ? "#4ade80" : "#60a5fa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.7rem",
          fontWeight: 700,
          flexShrink: 0,
        }}
      >
        {agent}
      </div>
      <div
        style={{
          backgroundColor: isA ? "#1e3a2f" : "#1e293b",
          borderRadius: "12px",
          padding: "8px 14px",
          fontSize: "0.8rem",
          color: "#d4d4d4",
          lineHeight: 1.5,
        }}
      >
        {text}
      </div>
    </div>
  );
}

function TerminalBlock({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: "#171717",
        border: "1px solid #262626",
        borderRadius: "8px",
        padding: "14px 20px",
        lineHeight: 1.8,
        fontSize: "0.85rem",
      }}
    >
      {children}
    </div>
  );
}

function CodeLine({
  command,
  comment,
  dim,
}: {
  command?: string;
  comment?: string;
  dim?: string;
} = {}) {
  if (!command && !comment && !dim) {
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
      {dim && <span style={{ color: "#a3a3a3" }}>{dim}</span>}
    </div>
  );
}
