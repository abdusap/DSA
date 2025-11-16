/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const vowelFreq = {};
    const consonantFreq = {};

    for (const ch of s) {
        if (vowels.has(ch)) {
            vowelFreq[ch] = (vowelFreq[ch] || 0) + 1;
        } else {
            consonantFreq[ch] = (consonantFreq[ch] || 0) + 1;
        }
    }

    const maxVowel = Object.values(vowelFreq).length ? Math.max(...Object.values(vowelFreq)) : 0;
    const maxConsonant = Object.values(consonantFreq).length ? Math.max(...Object.values(consonantFreq)) : 0;

    return maxVowel + maxConsonant;
};
