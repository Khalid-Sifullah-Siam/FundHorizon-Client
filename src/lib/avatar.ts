export const DEFAULT_AVATAR_URL = "/images/default-avatar.svg";

const BROKEN_LEGACY_AVATAR_URL = "https://i.ibb.co/0Q8c0cX/default.png";

export function getAvatarUrl(photoURL?: string | null): string {
  if (!photoURL || photoURL === BROKEN_LEGACY_AVATAR_URL) {
    return DEFAULT_AVATAR_URL;
  }

  return photoURL;
}
