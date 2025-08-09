import { FeatureFlags } from "shared/types/FeatureFlags";
import { getFeatureFlags } from "./setGetFeatures";

interface ToggleFeaturesProps<T> {
  name: keyof FeatureFlags;
  on: () => T;
  off: () => T;
}

export function toggleFeatures<T>(props: ToggleFeaturesProps<T>): T {
  const { name, off, on } = props;
  if (getFeatureFlags(name)) return on();

  return off();
}
