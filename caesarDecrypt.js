var encryptButton = document.getElementById('encrypt');
encryptButton.onclick = encrypt;

var decryptButton = document.getElementById('decrypt');
decryptButton.onclick = decrypt;

var shiftInput = document.getElementById('shiftNum');

var plainInput = document.getElementById('plainText');
var encryptedInput = document.getElementById('encryptedText');

Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};

function encrypt() {
    var shift = parseInt(shiftInput.value);

    var plainText = plainInput.value;
    var encryptedText = encryptedInput.value;

    if (shift == 0) {
        shift = parseInt(25 * Math.random()) + 1;
    }
    else {
        shift = 26 - shift.mod(26);
    }

    var string = shiftBy(plainText, shift);
    encryptedInput.value = string;
}

function decrypt() {
    var shift = parseInt(shiftInput.value);

    var plainText = plainInput.value;
    var encryptedText = encryptedInput.value;

    if (shift == 0) {
    }
    else {
        shift = shift.mod(26);
    }

    var string = shiftBy(encryptedText, shift);
    plainInput.value = string;
}

var codeA = 'A'.charCodeAt(0);
var codeZ = 'Z'.charCodeAt(0);

function shiftBy(string, shift) {
    var out = '';
    for (var i = 0; i < string.length; i++) {
        var code = string.charCodeAt(i);
        if (codeA <= code && code <= codeZ) {
            code = (code + shift - codeA).mod(26) + codeA;
            out += String.fromCharCode(code);
        }
        else {
            out += ' ';
        }
    }
    return out;
}
