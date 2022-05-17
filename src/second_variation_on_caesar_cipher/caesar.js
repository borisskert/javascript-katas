/*
 * https://www.codewars.com/kata/55084d3898b323f0aa000546/train/javascript
 */

function encodeStr (s, shift) {
  return cleartextOf(s)
    .encryptBy(shift)
    .chunks()
}

function decode (array) {
  return chunksOf(array)
    .join()
    .decrypt()
}

const cleartextOf = (s) => {
  return {
    encryptBy: (shift) => {
      return prefixFrom(s, shift).encrypt()
    }
  }
}

const chunksOf = (array) => {
  return {
    join: () => {
      const ciphertext = array.join('')
      return ciphertextOf(ciphertext)
    }
  }
}

const prefixFrom = (cleartext, shift) => {
  const [first] = cleartext
  const [second] = caesar(shift).encrypt([first])

  const prefix = [first, second].join('').toLowerCase()

  return {
    encrypt: () => {
      const ciphertext = [...prefix, ...caesar(shift).encrypt(cleartext)].join('')
      return ciphertextOf(ciphertext)
    }
  }
}

const ciphertextOf = (ciphertext) => {
  return {
    chunks: () => {
      const AMOUNT_OF_CHUNKS = 5.0
      const chunkSize = Math.ceil(ciphertext.length / AMOUNT_OF_CHUNKS)

      function toChunks (s) {
        if (s.length < 1) {
          return []
        }

        const chunk = s.substring(0, chunkSize)
        const remaining = s.substring(chunkSize)

        return [chunk, ...toChunks(remaining)]
      }

      return toChunks(ciphertext)
    },
    decrypt: () => {
      const prefix = ciphertext.substring(0, 2)
      const payload = ciphertext.substring(2)

      const [first, second] = Array.from(prefix)
      const shift = second.charCodeAt(0) - first.charCodeAt(0)

      return caesar(shift).decrypt(payload)
    }
  }
}

const caesar = (shift) => {
  return {
    encrypt: (s) => {
      return Array.from(s)
        .map(move)
        .join('')
    },
    decrypt: (s) => {
      return caesar(-shift)
        .encrypt(s)
    }
  }

  function move (c) {
    if (c >= 'A' && c <= 'Z') {
      return moveOffset('A'.charCodeAt(0), c)
    }

    if (c >= 'a' && c <= 'z') {
      return moveOffset('a'.charCodeAt(0), c)
    }

    return c
  }

  function moveOffset (offset, c) {
    const charCode = (c.charCodeAt(0) - offset + shift) % 26 + offset
    return String.fromCharCode(charCode)
  }
}

module.exports = { encodeStr, decode }
