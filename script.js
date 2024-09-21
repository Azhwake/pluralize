// Good Luck 💪🏾
function pluralize(words) {
    const wordCount = {};

    // Count occurrences of each word
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    // Convert to plural form if count > 1
    return Object.keys(wordCount).map(word => {
        return wordCount[word] > 1 ? word + 's' : word;
    });
}

// Test cases
console.log(pluralize(["cat", "dog", "cat", "mouse"])); // ➞ ["cats", "dog", "mouse"]
console.log(pluralize(["car", "car", "car"]));         // ➞ ["cars"]
