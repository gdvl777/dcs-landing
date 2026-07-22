const TRACKING_KEYS = ["utm_", "gclid", "fbclid", "ttclid", "msclkid"];
const TRACKING_STORAGE_KEY = "dcs_tracking_params";

function isTrackingKey(key) {
  return TRACKING_KEYS.some((trackingKey) =>
    trackingKey.endsWith("_") ? key.startsWith(trackingKey) : key === trackingKey
  );
}

function readStoredTrackingParams() {
  if (typeof window === "undefined") return {};

  try {
    const stored = window.sessionStorage.getItem(TRACKING_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function writeStoredTrackingParams(params) {
  if (typeof window === "undefined" || !Object.keys(params).length) return;

  try {
    window.sessionStorage.setItem(TRACKING_STORAGE_KEY, JSON.stringify(params));
  } catch {
    // Tracking should never block the checkout or page interactions.
  }
}

export function getTrackingParamsFromUrl(url) {
  const params = {};

  try {
    const parsedUrl = new URL(url);

    parsedUrl.searchParams.forEach((value, key) => {
      if (value && isTrackingKey(key)) {
        params[key] = value;
      }
    });
  } catch {
    return params;
  }

  return params;
}

export function persistTrackingParams() {
  if (typeof window === "undefined") return {};

  const currentParams = getTrackingParamsFromUrl(window.location.href);
  const nextParams = {
    ...readStoredTrackingParams(),
    ...currentParams,
  };

  if (Object.keys(currentParams).length) {
    writeStoredTrackingParams(nextParams);
  }

  return nextParams;
}

export function getTrackingParams() {
  if (typeof window === "undefined") return {};

  return persistTrackingParams();
}

export function appendTrackingParams(url) {
  if (!url || typeof window === "undefined") return url;

  try {
    const target = new URL(url);

    Object.entries(getTrackingParams()).forEach(([key, value]) => {
      target.searchParams.set(key, value);
    });

    return target.toString();
  } catch {
    return url;
  }
}

export function getTrackingEventContext() {
  if (typeof window === "undefined") return {};

  return {
    page_path: `${window.location.pathname}${window.location.search}`,
    page_location: window.location.href,
    page_title: document.title,
    ...getTrackingParams(),
  };
}
