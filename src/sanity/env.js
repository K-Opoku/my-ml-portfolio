export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-02-23'

export const dataset = "production";

export const projectId = "7b9dagi7";

// 🟢 THIS IS THE MISSING LINE
export const useCdn = false

function assertValue(v, errorMessage) {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}