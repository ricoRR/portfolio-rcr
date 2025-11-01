import { joinURL, withoutLeadingSlash } from 'ufo';
import { useRuntimeConfig } from '#imports';

export function useAssetPath(path: string) {
  const {
    app: { baseURL = '/' },
  } = useRuntimeConfig();

  const normalizedPath = withoutLeadingSlash(path);
  return joinURL(baseURL || '/', normalizedPath);
}
