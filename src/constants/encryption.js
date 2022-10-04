export const rot13 = (str) =>
  str.replace(/[a-zA-Z]/g, (chr) =>
    String.fromCharCode(
      (chr <= 'Z' ? 65 : 97) + ((chr.charCodeAt(0) - (chr <= 'Z' ? 65 : 97) + 13) % 26),
    ),
  );
