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
            fontSize: "1.35rem",
            color: "#a3a3a3",
            marginTop: "20px",
            lineHeight: 1.6,
          }}
        >
          File sharing infrastructure for AI agents.
        </p>
        <p
          style={{
            fontSize: "1rem",
            color: "#737373",
            marginTop: "12px",
            lineHeight: 1.7,
            maxWidth: "560px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Your agents need to exchange files — training data, reports,
          artifacts, tool outputs. AgentDrop gives them cryptographic identity
          and scoped, revocable access. No shared credentials. No buckets with
          open ACLs.
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

      {/* The Problem */}
      <section
        style={{
          maxWidth: "720px",
          width: "100%",
          marginBottom: "80px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#ffffff",
            marginBottom: "16px",
          }}
        >
          Agents aren&apos;t users. Stop treating them like one.
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#a3a3a3",
            lineHeight: 1.8,
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Most file sharing assumes a human in the loop — OAuth flows, browser
          uploads, shared drives. AI agents need something different: a way to
          prove identity, request access to specific files, and exchange data
          programmatically. AgentDrop is the missing infrastructure layer.
        </p>
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
            description="Each agent gets an Ed25519 identity. The private key never leaves the agent's machine."
          />
          <StepCard
            step="2"
            title="Upload files"
            description="Every request is signed. The server verifies identity cryptographically — no tokens to rotate."
          />
          <StepCard
            step="3"
            title="Grant access"
            description="Issue a scoped JWT: which file, which agent, how long. Revoke anytime."
          />
          <StepCard
            step="4"
            title="Agent downloads"
            description="The receiving agent presents the grant token. Access is verified against five conditions before any bytes move."
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
          description="Every agent gets a cryptographic keypair. No passwords, no API keys, no rotating secrets. Identity is a key pair — verifiable, portable, and unforgeable."
        />
        <FeatureCard
          title="Scoped grants"
          description="Fine-grained access via signed JWTs. Each grant specifies the file, the recipient agent, permissions, and a TTL. Audience-locked so tokens can't be reused by other agents."
        />
        <FeatureCard
          title="Signed requests"
          description="Every API call carries a signature over method, path, timestamp, nonce, and body hash. Replay attacks are blocked. Tampered requests are rejected."
        />
        <FeatureCard
          title="Full audit trail"
          description="Every action is logged: who did what, to which resource, when. Human operators get full visibility into what their agents are doing."
        />
        <FeatureCard
          title="Human oversight"
          description="Humans manage agent keys via OAuth. Register keys, revoke access, review audit logs. Agents operate autonomously within the boundaries you set."
        />
        <FeatureCard
          title="CLI + SDK + API"
          description="One curl command to install the CLI. TypeScript SDK for programmatic access. REST API for everything else. Works anywhere Node.js runs."
        />
      </section>

      {/* SDK Example */}
      <section
        style={{
          maxWidth: "900px",
          width: "100%",
          marginBottom: "80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Built for agent code
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#a3a3a3",
              lineHeight: 1.8,
              marginBottom: "16px",
            }}
          >
            The TypeScript SDK handles request signing, key management, and the
            multi-step upload flow. Your agent code stays clean.
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#a3a3a3",
              lineHeight: 1.8,
            }}
          >
            Works with any LLM framework — LangChain, CrewAI, AutoGen, or your
            own orchestrator. AgentDrop is a transport layer, not a framework.
          </p>
        </div>
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
          <CodeLine comment="import { AgentDropClient } from '@agentdrop/sdk'" />
          <CodeLine comment="import { generateKeyPair } from '@agentdrop/shared'" />
          <CodeLine />
          <CodeLine dim="const { publicKey, privateKey } = await generateKeyPair()" />
          <CodeLine dim="const client = new AgentDropClient({ publicKey, privateKey })" />
          <CodeLine />
          <CodeLine comment="// Upload a file" />
          <CodeLine dim="const file = await client.upload(buffer, 'report.pdf', 'application/pdf')" />
          <CodeLine />
          <CodeLine comment="// Grant access to another agent" />
          <CodeLine dim="const { token } = await client.createGrant(" />
          <CodeLine dim="  file.id, recipientKeyHash, ['download'], 3600" />
          <CodeLine dim=")" />
        </div>
      </section>

      {/* CLI Quick Start */}
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
          Or use the CLI
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

      {/* Use Cases */}
      <section
        style={{
          maxWidth: "720px",
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
          Built for
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <UseCaseItem
            title="Multi-agent pipelines"
            description="Agent A generates a report, grants access to Agent B for analysis, Agent B shares results with Agent C. Each hop is scoped and auditable."
          />
          <UseCaseItem
            title="Tool output handoff"
            description="Code interpreters, web scrapers, and data processors drop files into AgentDrop. Downstream agents pull exactly what they need."
          />
          <UseCaseItem
            title="Human-in-the-loop review"
            description="Agents upload artifacts. Humans review audit logs, revoke keys if something looks wrong, re-grant when ready."
          />
          <UseCaseItem
            title="Cross-org agent collaboration"
            description="Agents from different teams or organizations exchange files without sharing credentials or cloud storage access."
          />
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          maxWidth: "640px",
          width: "100%",
          marginBottom: "80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#171717",
            border: "1px solid #262626",
            borderRadius: "8px",
            padding: "40px 24px",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              color: "#ffffff",
              marginTop: 0,
              marginBottom: "20px",
            }}
          >
            Get started in 30 seconds
          </p>
          <div
            style={{
              backgroundColor: "#0a0a0a",
              borderRadius: "6px",
              padding: "16px 20px",
              display: "inline-block",
            }}
          >
            <span style={{ color: "#737373", userSelect: "none" }}>$ </span>
            <code style={{ color: "#4ade80", fontSize: "0.95rem" }}>
              curl -fsSL https://agentdrop.sh/install | sh
            </code>
          </div>
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

function UseCaseItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        borderLeft: "2px solid #262626",
        paddingLeft: "16px",
      }}
    >
      <h3
        style={{
          fontSize: "0.9rem",
          fontWeight: 600,
          color: "#ffffff",
          margin: "0 0 6px 0",
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
