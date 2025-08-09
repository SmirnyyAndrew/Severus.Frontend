import { FeatureFlags } from "shared/types/FeatureFlags";

let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
  if (newFeatureFlags) featureFlags = newFeatureFlags;
}

export function getFeatureFlags(key: keyof FeatureFlags) {
  return featureFlags?.[key] ?? false;
}
