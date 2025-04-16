export default function getResponseFromAPI(success = true) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve('API response');
    } else {
      reject(new Error('No response'));
    }
  });
}
