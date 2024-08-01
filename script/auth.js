async function createCredentials(
  challenge,
  rpName,
  rpId,
  userId,
  userName,
  userDisplayName
) {
  try {
    let credentials = await navigator.credentials.create({
      publicKey: {
        challenge: challenge,
        rp: { name: rpName, id: rpId },
        user: {
          id: userId,
          name: userName,
          displayName: userDisplayName,
        },
        pubKeyCredParams: [
          { type: "public-key", alg: -7 },
          { type: "public-key", alg: -257 },
        ],
      },
    });

    const credentialId = bufferToBase64(credentials.rawId);

    const data = {
      rawId: credentialId,
      response: {
        attestationObject: bufferToBase64(
          credentials.response.attestationObject
        ),
        clientDataJSON: bufferToBase64(credentials.response.clientDataJSON),
        id: credentials.id,
        type: credentials.type,
      },
    };

    return JSON.stringify({ credential: data });
  } catch (error) {
    console.error(error);

    return "";
  }
}

const bufferToBase64 = (buffer) =>
  btoa(String.fromCharCode(...new Uint8Array(buffer)));
