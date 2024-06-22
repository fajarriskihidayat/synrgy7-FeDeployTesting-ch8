function getCookieValue(cookieName: string): string | null {
  const cookieString = document.cookie;
  const cookies = cookieString.split(";").map((cookie) => cookie.trim());
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === cookieName) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

export default getCookieValue;
