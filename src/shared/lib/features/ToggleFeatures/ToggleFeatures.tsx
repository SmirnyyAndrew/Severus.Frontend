import { FeatureFlags } from "shared/types/FeatureFlags";
import { getFeatureFlags } from "../setGetFeatures";

interface ToggleFeaturesProps<T> {
  name: keyof FeatureFlags;
  on: T;
  off: T;
}

export function ToggleFeatures<T>(props: ToggleFeaturesProps<T>) {
  const { name, off, on } = props;

  if (getFeatureFlags(name)) return on;

  return off;
}
