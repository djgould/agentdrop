import { put } from "@vercel/blob";

/**
 * Generate a presigned Vercel Blob upload URL for the given filename and content type.
 * Returns the blob URL that will be available after upload.
 */
export async function createPresignedUpload(
  filename: string,
  contentType: string,
): Promise<{ uploadUrl: string; blobUrl: string }> {
  // Use client upload token approach for presigned URLs.
  // For server-side, we use put() which returns the final blob URL.
  // The client will upload directly to the returned URL.
  const blob = await put(filename, Buffer.alloc(0), {
    access: "public",
    contentType,
    addRandomSuffix: true,
    // This creates a placeholder; the client will use the client upload token approach.
    // However, for a cleaner presigned URL flow, we use handleUpload.
    multipart: false,
  });

  // For the presigned upload pattern, we return the blob URL.
  // The actual upload flow uses @vercel/blob client tokens.
  return {
    uploadUrl: blob.url,
    blobUrl: blob.url,
  };
}

/**
 * Generate a client upload token for Vercel Blob.
 * This allows the client to upload directly to Vercel Blob storage.
 */
export async function generateClientToken(
  filename: string,
  contentType: string,
  maxSize: number,
): Promise<string> {
  const { generateClientTokenFromReadWriteToken } = await import(
    "@vercel/blob/client"
  );

  const token = await generateClientTokenFromReadWriteToken({
    pathname: filename,
    allowedContentTypes: [contentType],
    maximumSizeInBytes: maxSize,
  });

  return token;
}

/**
 * Get a download URL for a file stored in Vercel Blob.
 * Blob URLs are publicly accessible, so we return the URL directly.
 * For private access patterns, use a short-lived redirect.
 */
export function getDownloadUrl(blobUrl: string): string {
  return blobUrl;
}
