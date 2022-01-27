const URL = 'https://f6gc1xbvv2.execute-api.us-east-1.amazonaws.com/prod/email';

export async function sendEmail ({ email }) {
  let response;
  try {
    const payload = {
      email: 'ia@espol.edu.ec',
      subject: 'Request information about AI@ESPOL',
      message: `A person with email ${email} requested information about IA@ESPOL.`
    }
    response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
  } catch (error) {
    throw error;
  }
  if (response.status >= 400 && response.status < 600) {
    const error = await response.json();
    throw error;
  }
  const result = await response.json();
  return result;
}