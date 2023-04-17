const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (alphabet.indexOf(char) === -1) {
        result += char;
        continue;
      }

      const messageIndex = alphabet.indexOf(char);
      const keyChar = key[keyIndex % key.length];
      const keyIndexInAlphabet = alphabet.indexOf(keyChar);
      const newIndex = (messageIndex + keyIndexInAlphabet) % alphabet.length;
      const newChar = alphabet[newIndex];

      result += newChar;
      keyIndex++;
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (alphabet.indexOf(char) === -1) {
        result += char;
        continue;
      }

      const messageIndex = alphabet.indexOf(char);
      const keyChar = key[keyIndex % key.length];
      const keyIndexInAlphabet = alphabet.indexOf(keyChar);
      const newIndex = (messageIndex + alphabet.length - keyIndexInAlphabet) % alphabet.length;
      const newChar = alphabet[newIndex];

      result += newChar;
      keyIndex++;
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

console.log(directMachine.encrypt('attack at dawn!', 'alphonse')); //=> 'AEIHQX SX DLLU!'

console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')); //=> 'ATTACK AT DAWN!'

console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse')); //=> '!ULLD XS XQHIEA'

console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')); //=> '!NWAD TA KCATTA'


module.exports = {
  VigenereCipheringMachine
};
