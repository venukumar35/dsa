class encrypt {
  constructor(str) {
    this.str = str;
  }
  async encry() {
    let encode = new TextEncoder();
    let data = encode.encode(this.str);

    const iv = window.crypto.getRandomValues(new Uint8Array(12));

    //import key
    const importKey = await window.crypto.subtle.importKey(
      "raw",
      key,
      { name: "AES-GCM" },
      false,
      ["encrypt"]
    );

    // Encrypt the data
    const encrypted = await window.crypto.subtle.encrypt(
      { name: "AES-GCM", iv: iv },
      importKey,
      data
    );

    // Concatenate the IV and the encrypted data
    const result = new Uint8Array(iv.length + encrypted.length);
    result.set(iv);
    result.set(new Uint8Array(encrypted), iv.length);

    // Convert the result to a hexadecimal string
    return Array.from(result)
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }
}
const ObjectForencrypt = new encrypt("avenu");
console.log(ObjectForencrypt.encry());
