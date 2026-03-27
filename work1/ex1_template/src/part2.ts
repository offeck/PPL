import * as R from "ramda";

const stringToArray = R.split("");

const normalizeString = R.pipe(R.toLower, R.replace(/\W/g, ""));

/* Question 2.1 */
const vowels: string[] = ["a", "e", "i", "o", "u"];
export const countVowels: (s: string) => number = (s: string) => stringToArray(normalizeString(s)).filter((c) => vowels.includes(c)).length;

/* Question 2.2 */
export const isPalindrome: (text: string) => boolean = (text) => stringToArray(normalizeString(text)).every((a, i, arr) => a === arr[arr.length - 1 - i]);

/* Question 2.3 */
export type WordTree = {
  root: string;
  children: WordTree[];
};

export const treeToSentence = (t: WordTree): string =>
  [t.root, ...t.children.map(treeToSentence)].filter((s) => s !== "").join(" ");
