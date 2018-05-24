request      = require("superagent")
let CryptoJS = require("crypto-js");

//
//  #     #
//  ##    # ###### ##### ######   ##    ####  ######
//  # #   # #        #   #       #  #  #      #
//  #  #  # #####    #   #####  #    #  ####  #####
//  #   # # #        #   #      ######      # #
//  #    ## #        #   #      #    # #    # #
//  #     # ######   #   ###### #    #  ####  ######

let option = {
    "bi-log": {
        url: "/weapi/feedback/weblog"
    },
    "bi-batch-log": {
        url: "/api/feedback/weblog"
    },
    "plus-mv-count": {
        url: "/api/song/mv/play"
    },
    "plus-song-count": {
        url: "/api/song/play"
    },
    "plus-dj-count": {
        type: "GET",
        url: "/api/dj/program/listen"
    },
    "plus-playlist-count": {
        type: "GET",
        url: "/api/playlist/update/playcount"
    }
}

let Uf6Z = {}
Uf6Z.emj = {
    "色": "00e0b",
    "流感": "509f6",
    "这边": "259df",
    "弱": "8642d",
    "嘴唇": "bc356",
    "亲": "62901",
    "开心": "477df",
    "呲牙": "22677",
    "憨笑": "ec152",
    "猫": "b5ff6",
    "皱眉": "8ace6",
    "幽灵": "15bb7",
    "蛋糕": "b7251",
    "发怒": "52b3a",
    "大哭": "b17a8",
    "兔子": "76aea",
    "星星": "8a5aa",
    "钟情": "76d2e",
    "牵手": "41762",
    "公鸡": "9ec4e",
    "爱意": "e341f",
    "禁止": "56135",
    "狗": "fccf6",
    "亲亲": "95280",
    "叉": "104e0",
    "礼物": "312ec",
    "晕": "bda92",
    "呆": "557c9",
    "生病": "38701",
    "钻石": "14af6",
    "拜": "c9d05",
    "怒": "c4f7f",
    "示爱": "0c368",
    "汗": "5b7a4",
    "小鸡": "6bee2",
    "痛苦": "55932",
    "撇嘴": "575cc",
    "惶恐": "e10b4",
    "口罩": "24d81",
    "吐舌": "3cfe4",
    "心碎": "875d3",
    "生气": "e8204",
    "可爱": "7b97d",
    "鬼脸": "def52",
    "跳舞": "741d5",
    "男孩": "46b8e",
    "奸笑": "289dc",
    "猪": "6935b",
    "圈": "3ece0",
    "便便": "462db",
    "外星": "0a22b",
    "圣诞": "8e7",
    "流泪": "01000",
    "强": "1",
    "爱心": "0CoJU",
    "女孩": "m6Qyw",
    "惊恐": "8W8ju",
    "大笑": "d"
};
Uf6Z.md  = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]



let preEncode = function (gn4r, Ry5D, ckm4q) {
    if (!gn4r)
        return "";
    var bs2x = [];
    for (var x in gn4r) {
        bs2x.push(encodeURIComponent(x) + "=" + (!!ckm4q ? encodeURIComponent(gn4r[x]) : gn4r[x]))
    }
    return bs2x.join(Ry5D || ",")
}


let getCookie = function (W1x, cookieString = "") {
    var rN7G    = cookieString
        , ti8a  = "\\b" + W1x + "="
        , bcu9l = rN7G.search(ti8a);
    if (bcu9l < 0)
        return "";
    bcu9l += ti8a.length - 2;
    var xC0x = rN7G.indexOf(";", bcu9l);
    if (xC0x < 0)
        xC0x = rN7G.length;
    return rN7G.substring(bcu9l, xC0x) || ""
};



// encrypt

let bd1x = function (emojiStringArray, callback, P1x) {
    // if (!i1x || !i1x.length || !k1x.gE4I(cA2x))
    //     return this;
    if (!!emojiStringArray.forEach) {
        emojiStringArray.forEach(callback, P1x);
        return this
    }
    for (var i = 0, l = emojiStringArray.length; i < l; i++)
        callback.call(P1x, emojiStringArray[i], i, emojiStringArray);
    return this
}

let emojiString = function (emojiStringArray) {
    var m1x = [];
    bd1x(emojiStringArray, function (cBx7q) {
        m1x.push(Uf6Z.emj[cBx7q])
    });
    return m1x.join("")
}
// console.log(JSON.stringify(body));
// console.log(emojiString(["流泪", "强"]));
// console.log(emojiString(Uf6Z.md));
// console.log(emojiString(["爱心", "女孩", "惊恐", "大笑"]));

var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits,
    biRadix                                                                                                                                                          = 65536, biHalfRadix                                                                                                                                     = biRadix >>> 1,
    biRadixSquared                                                                                                                                                   = biRadix * biRadix, maxDigitVal                                                                                                                  = biRadix - 1,
    maxInteger                                                                                                                                                       = 9999999999999998;

setMaxDigits(20),
    dpl10 = 15,
    lr10 = biFromNumber(1e15),
    hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"),
    hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"),
    highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535),
    lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);

function charToHex(a) {
    var h, b = 48, c = b + 9, d = 97, e = d + 25, f = 65, g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}

function hexToDigit(a) {
    var d, b = 0, c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d)
        b <<= 4,
            b |= charToHex(a.charCodeAt(d));
    return b
}

function biFromHex(a) {
    var d, e, b = new BigInt, c = a.length;
    for (d = c,
             e = 0; d > 0; d -= 4,
             ++e)
        b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}

function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a),
        this.d = biFromHex(b),
        this.m = biFromHex(c),
        this.chunkSize = 2 * biHighIndex(this.m),
        this.radix = 16,
        this.barrett = new BarrettMu(this.m)
}

function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}

function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;)
        c[e] = b.charCodeAt(e),
            e++;
    for (; 0 != c.length % a.chunkSize;)
        c[e++] = 0;
    for (f = c.length,
             g = "",
             e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt,
                 h = 0,
                 i = e; i < e + a.chunkSize; ++h)
            j.digits[h] = c[i++],
                j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e),
            l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix),
            g += l + " "
    }
    return g.substring(0, g.length - 1)
}

function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "), d = "";
    for (e = 0; e < c.length; ++e)
        for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix),
                 g = a.barrett.powMod(h, a.d),
                 f = 0; f <= biHighIndex(g); ++f)
            d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)),
        d
}

function setMaxDigits(a) {
    maxDigits = a,
        ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++)
        ZERO_ARRAY[b] = 0;
    bigZero = new BigInt,
        bigOne = new BigInt,
        bigOne.digits[0] = 1
}

function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0),
        this.isNeg = !1
}

function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);)
        ++c;
    if (c == a.length)
        d = new BigInt;
    else {
        for (e = a.length - c,
                 f = e % dpl10,
             0 == f && (f = dpl10),
                 d = biFromNumber(Number(a.substr(c, f))),
                 c += f; c < a.length;)
            d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))),
                c += dpl10;
        d.isNeg = b
    }
    return d
}

function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0),
        b.isNeg = a.isNeg,
        b
}

function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a,
             a = Math.abs(a),
             c = 0; a > 0;)
        b.digits[c++] = a & maxDigitVal,
            a >>= biRadixBits;
    return b
}

function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c)
        b += a.charAt(c);
    return b
}

function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b,
             d = biDivideModulo(a, c),
             e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);)
        d = biDivideModulo(d[0], c),
            digit = d[1].digits[0],
            e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}

function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10,
             c = biDivideModulo(a, b),
             d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);)
        c = biDivideModulo(c[0], b),
            d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}

function digitToHex(a) {
    var b   = 15
        , c = "";
    for (i = 0; 4 > i; ++i)
        c += hexToChar[a & b],
            a >>>= 4;
    return reverseStr(c)
}

function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a),
             d = biHighIndex(a); d > -1; --d)
        b += digitToHex(a.digits[d]);
    return b
}

function charToHex(a) {
    var h, b = 48, c = b + 9, d = 97, e = d + 25, f = 65, g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}

function hexToDigit(a) {
    var d, b = 0, c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d)
        b <<= 4,
            b |= charToHex(a.charCodeAt(d));
    return b
}

function biFromHex(a) {
    var d, e, b = new BigInt, c = a.length;
    for (d = c,
             e = 0; d > 0; d -= 4,
             ++e)
        b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}

function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0), d = c ? 1 : 0, e = new BigInt, f = new BigInt;
    for (f.digits[0] = 1,
             g = a.length - 1; g >= d; g--)
        h = a.charCodeAt(g),
            i = charToHex(h),
            j = biMultiplyDigit(f, i),
            e = biAdd(e, j),
            f = biMultiplyDigit(f, b);
    return e.isNeg = c,
        e
}

function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}

function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg)
        b.isNeg = !b.isNeg,
            c = biSubtract(a, b),
            b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt,
                 d = 0,
                 f = 0; f < a.digits.length; ++f)
            e = a.digits[f] + b.digits[f] + d,
                c.digits[f] = 65535 & e,
                d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}

function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg)
        b.isNeg = !b.isNeg,
            c = biAdd(a, b),
            b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt,
                 e = 0,
                 f = 0; f < a.digits.length; ++f)
            d = a.digits[f] - b.digits[f] + e,
                c.digits[f] = 65535 & d,
            c.digits[f] < 0 && (c.digits[f] += biRadix),
                e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0,
                     f = 0; f < a.digits.length; ++f)
                d = 0 - c.digits[f] + e,
                    c.digits[f] = 65535 & d,
                c.digits[f] < 0 && (c.digits[f] += biRadix),
                    e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else
            c.isNeg = a.isNeg
    }
    return c
}

function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];)
        --b;
    return b
}

function biNumBits(a) {
    var e, b = biHighIndex(a), c = a.digits[b], d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e)
        c <<= 1;
    return e
}

function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt, e = biHighIndex(a), f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0,
                 i = k,
                 j = 0; e >= j; ++j,
                 ++i)
            h = c.digits[i] + a.digits[j] * b.digits[k] + d,
                c.digits[i] = h & maxDigitVal,
                d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg,
        c
}

function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt,
             c = biHighIndex(a),
             d = 0,
             f = 0; c >= f; ++f)
        e = result.digits[f] + a.digits[f] * b + d,
            result.digits[f] = e & maxDigitVal,
            d = e >>> biRadixBits;
    return result.digits[1 + c] = d,
        result
}

function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b,
             h = d; f > g; ++g,
             ++h)
        c[h] = a[g]
}

function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c),
             e = b % bitsPerDigit,
             f = bitsPerDigit - e,
             g = d.digits.length - 1,
             h = g - 1; g > 0; --g,
             --h)
        d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal,
        d.isNeg = a.isNeg,
        d
}

function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c),
             e = b % bitsPerDigit,
             f = bitsPerDigit - e,
             g = 0,
             h = g + 1; g < d.digits.length - 1; ++g,
             ++h)
        d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e,
        d.isNeg = a.isNeg,
        d
}

function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b),
        c
}

function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b),
        c
}

function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b),
        c
}

function biCompare(a, b) {
    if (a.isNeg != b.isNeg)
        return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)
        if (a.digits[c] != b.digits[c])
            return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}

function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a), d = biNumBits(b), e = b.isNeg;
    if (d > c)
        return a.isNeg ? (f = biCopy(bigOne),
            f.isNeg = !b.isNeg,
            a.isNeg = !1,
            b.isNeg = !1,
            g = biSubtract(b, a),
            a.isNeg = !0,
            b.isNeg = e) : (f = new BigInt,
            g = biCopy(a)),
            new Array(f, g);
    for (f = new BigInt,
             g = a,
             h = Math.ceil(d / bitsPerDigit) - 1,
             i = 0; b.digits[h] < biHalfRadix;)
        b = biShiftLeft(b, 1),
            ++i,
            ++d,
            h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i),
             c += i,
             j = Math.ceil(c / bitsPerDigit) - 1,
             k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k);)
        ++f.digits[j - h],
            g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l],
                 n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1],
                 o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2],
                 p = h >= b.digits.length ? 0 : b.digits[h],
                 q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1],
                 f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p),
                 r = f.digits[l - h - 1] * (p * biRadix + q),
                 s = m * biRadixSquared + (n * biRadix + o); r > s;)
            --f.digits[l - h - 1],
                r = f.digits[l - h - 1] * (p * biRadix | q),
                s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1),
            g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])),
        g.isNeg && (g = biAdd(g, k),
            --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i),
        f.isNeg = a.isNeg != e,
    a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne),
        b = biShiftRight(b, i),
        g = biSubtract(b, g)),
    0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1),
        new Array(f, g)
}

function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}

function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}

function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}

function biPow(a, b) {
    for (var c = bigOne, d = a; ;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)),
            b >>= 1,
        0 == b)
            break;
        d = biMultiply(d, d)
    }
    return c
}

function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b; ;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)),
            f = biShiftRight(f, 1),
        0 == f.digits[0] && 0 == biHighIndex(f))
            break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}

function BarrettMu(a) {
    this.modulus = biCopy(a),
        this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1,
        this.mu = biDivide(b, this.modulus),
        this.bkplus1 = new BigInt,
        this.bkplus1.digits[this.k + 1] = 1,
        this.modulo = BarrettMu_modulo,
        this.multiplyMod = BarrettMu_multiplyMod,
        this.powMod = BarrettMu_powMod
}

function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1), c = biMultiply(b, this.mu), d = biDivideByRadixPower(c, this.k + 1), e = biModuloByRadixPower(a, this.k + 1),
        f                                                                                                                  = biMultiply(d, this.modulus), g                                                                                 = biModuloByRadixPower(f, this.k + 1), h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)),
             i = biCompare(h, this.modulus) >= 0; i;)
        h = biSubtract(h, this.modulus),
            i = biCompare(h, this.modulus) >= 0;
    return h
}

function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}

function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1,
             d = a,
             e = b; ;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)),
            e = biShiftRight(e, 1),
        0 == e.digits[0] && 0 == biHighIndex(e))
            break;
        d = this.multiplyMod(d, d)
    }
    return c
}


function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0)
    this.isNeg  = !1
}

function setMaxDigits(a) {
    maxDigits = a,
        ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++)
        ZERO_ARRAY[b] = 0;
    bigZero = new BigInt,
        bigOne = new BigInt,
        bigOne.digits[0] = 1
}



function a(a) {
    var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
    for (d = 0; a > d; d += 1) {
        e = Math.random() * b.length
        e = Math.floor(e)
        c += b.charAt(e);
    }
    return "JOyEh1YkUU4uHdmg"
}


function b(a, b) {
    var c   = CryptoJS.enc.Utf8.parse(b)
        , d = CryptoJS.enc.Utf8.parse("0102030405060708")
        , e = CryptoJS.enc.Utf8.parse(a)
        , f = CryptoJS.AES.encrypt(e, c, {
        iv: d,
        mode: CryptoJS.mode.CBC
    });
    return f.toString()
}


function c(a, b, c) {
    var d, e;
    return setMaxDigits(131),
        d = new RSAKeyPair(b, "", c),
        e = encryptedString(d, a)
}


function d(stringifyBody, emoji_A, emoji_B, emoji_C) {
    var obj = {}, i = a(16);

    // FUCK U
    obj.encText   = b(stringifyBody, emoji_C)
    obj.encText   = b(obj.encText, i)
    obj.encSecKey = c(i, emoji_A, emoji_B)
    return obj
}


//  #       ####### ####### ######
//  #       #     # #     # #     #
//  #       #     # #     # #     #
//  #       #     # #     # ######
//  #       #     # #     # #
//  #       #     # #     # #
//  ####### ####### ####### #



// Get playlist


process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'
require('superagent-proxy')(request);


let proxy      = process.env.PROXY || false;
let cookies    = process.env.COOKIES || "";
// let songID  = 511639386;
let listID     = "391125700";
let requestURI = "https://music.163.com" + option["bi-log"].url;



request
    .get("https://music.163.com/playlist?id=" + listID)
    .proxy(proxy)
    .set('Referer', "https://music.163.com/")
    .set('Host', "music.163.com")
    .set('Origin', "https://music.163.com")
    .set('Connection', "keep-alive")
    .set('Accept', "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8")
    .set('DNT', "1")
    .set('Accept-Language', "zh-CN,zh;q=0.9")
    .set('Accept-Encoding', "gzip, deflate, br")
    .set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36')
    .set('Cookie', cookies)
    .catch('error', function (error) {

        console.log("======================");
        console.log(error);
    })
    .then(function (res) {

        console.log("======================");
        console.log("Total " + res.text.match(/song\?id=(\d+)/g).length + " songs in this album.");


        let array = res.text.match(/song\?id=(\d+)/g).map(function (i) {
            return i.match(/\d+/)[0];
        });

        let i = 30;

        function loopSongs($sid) {
            if (!$sid) return;


            let time = 181 || Math.floor(Math.random() * 61 + 120)
            let data = [{
                "action": "play",
                "json": {"type": "song", "wifi": 0, "download": 0, "id": parseInt($sid), "time": time, "end": "ui", "source": "list", "sourceId": listID}
            }]
            let body = {
                logs: JSON.stringify(data)
            }

            body["csrf_token"] = cookies.match(/__csrf=([\w\d]+)/)[1];


            let args      = arguments;
            let wevblogRB = d(JSON.stringify(body), emojiString(["流泪", "强"]), emojiString(Uf6Z.md), emojiString(["爱心", "女孩", "惊恐", "大笑"]));

            console.log("======================");
            console.log("Request song " + parseInt($sid));



            return request
                .post(requestURI + "?csrf_token=" + cookies.match(/__csrf=([\w\d]+)/)[1])
                .proxy(proxy)
                .set('Referer', "https://music.163.com/playlist?id=" + listID)
                .set('Host', "music.163.com")
                .set('Origin', "https://music.163.com")
                .set('Connection', "keep-alive")
                .set('Accept', "*/*")
                .set('DNT', "1")
                .set('Accept-Language', "zh-CN,zh;q=0.9")
                .set('Accept-Encoding', "gzip, deflate, br")
                .set('Content-Type', "application/x-www-form-urlencoded")
                .set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36')
                .send(preEncode({
                    params: wevblogRB.encText
                }, "&", true))
                .send(preEncode({
                    encSecKey: wevblogRB.encSecKey
                }, "&", true))
                .set('Cookie', cookies)
                .catch('error', function (error) {
                    console.log("error ======================");
                    console.log(error);
                })
                .then(function (res) {
                    console.log("success ======================");
                    console.log(res.text);
                    i++;
                    setTimeout(function () {
                        args.callee(array[i])
                    }, (time + 5) * 1000)
                });
        }

        loopSongs && loopSongs(array[i])
    });



// let levelRB = d(JSON.stringify({
//     csrf_token: cookies.match(/__csrf=([\w\d]+)/)[1]
// }), emojiString(["流泪", "强"]), emojiString(Uf6Z.md), emojiString(["爱心", "女孩", "惊恐", "大笑"]));
//
//
// request
//     .post("https://music.163.com/weapi/user/level?csrf_token=" + cookies.match(/__csrf=([\w\d]+)/)[1])
//     .set('Referer', 'https://music.163.com/user/level')
//     .set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36')
//     .set('Cookie', cookies)
//     // .set('Accept', 'application/json')
//     .catch('error', function (error) {
//         console.log("error================");
//         console.log(error);
//     })
//     .then(function (res) {
//         // console.log("======================");
//         // console.log(res.body);
//     });




