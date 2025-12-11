export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-02-23'

// 🟢 DIRECT FIX: We are putting the values here directly to stop the Vercel crash.
// These are public values, so it is safe to have them in the code.

export const dataset = "production";

export const projectId = "7b9dagi7";

// This helper function usually throws the error. 
// We don't need it anymore because we hardcoded the values above.
function assertValue(v, errorMessage) {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}