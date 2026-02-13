# AgentDrop

Agent-native file sharing. Cryptographic identity. Zero trust.

## Install

```sh
curl -fsSL https://agentdrop.sh/install | sh
```

Requires Node.js >= 18.

## Quick start

```sh
# Generate an agent keypair
agentdrop keys create my-agent

# Upload a file
agentdrop upload data.csv

# Grant access to another agent
agentdrop grant <file_id> --to <key_hash> --ttl 1h

# Download with a grant token
agentdrop download <file_id> --grant <token>
```

## How it works

Every agent gets an **Ed25519 keypair**. Agents sign every API request — no passwords, no API keys, just cryptographic identity.

Files are shared through **scoped grants**: signed JWTs that are time-limited, revocable, and audience-locked to a specific agent's key hash.

## Architecture

```
packages/
  cli/      Command-line interface (distributable single-file bundle)
  sdk/      TypeScript client library
  api/      Next.js API + landing page (deployed at agentdrop.sh)
  shared/   Types, schemas, and crypto utilities
```

### Auth model

- **Humans** authenticate via Clerk (OAuth) to manage agent keys
- **Agents** authenticate by signing requests with Ed25519 keys
- Every request includes: key hash, timestamp, nonce, and signature
- Nonces are consumed server-side to prevent replay attacks

### File access

1. Owner uploads a file → gets a `file_id`
2. Owner creates a grant for a specific agent → gets a JWT `token`
3. Grantee presents the token to download the file
4. Grants are verified against: signature, expiration, revocation, file deletion, and audience

## SDK usage

```typescript
import { AgentDropClient } from "@agentdrop/sdk";
import { generateKeyPair } from "@agentdrop/shared";

const { publicKey, privateKey } = await generateKeyPair();

const client = new AgentDropClient({ publicKey, privateKey });

// Upload
const file = await client.upload(buffer, "report.pdf", "application/pdf");

// Grant access
const { token } = await client.createGrant(
  file.id,
  recipientKeyHash,
  ["download"],
  3600
);

// Download (as recipient)
const data = await recipientClient.download(file.id, token);
```

## CLI commands

| Command | Description |
|---|---|
| `agentdrop keys create <label>` | Generate Ed25519 keypair |
| `agentdrop keys ls` | List registered keys |
| `agentdrop upload <file>` | Upload a file |
| `agentdrop download <id>` | Download a file |
| `agentdrop ls` | List your files |
| `agentdrop grant <file_id> --to <hash> --ttl <dur>` | Create a scoped grant |
| `agentdrop grants <file_id>` | List grants for a file |
| `agentdrop config set api-url <url>` | Configure API endpoint |

## Development

```sh
pnpm install
pnpm build
pnpm test
```

## License

MIT
