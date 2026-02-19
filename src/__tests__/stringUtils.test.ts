import { capitalize, isPalindrome, truncate, countWords } from "../stringUtils";

describe("stringUtils", () => {
  describe("capitalize", () => {
    it("capitalizes the first letter", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    it("lowercases the rest of the string", () => {
      expect(capitalize("hELLO")).toBe("Hello");
    });

    it("returns empty string unchanged", () => {
      expect(capitalize("")).toBe("");
    });
  });

  describe("isPalindrome", () => {
    it("detects a simple palindrome", () => {
      expect(isPalindrome("racecar")).toBe(true);
    });

    it("ignores case", () => {
      expect(isPalindrome("Madam")).toBe(true);
    });

    it("ignores punctuation and spaces", () => {
      expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    });

    it("returns false for non-palindromes", () => {
      expect(isPalindrome("hello")).toBe(false);
    });
  });

  describe("truncate", () => {
    it("truncates a long string", () => {
      expect(truncate("Hello, world!", 5)).toBe("Hello...");
    });

    it("returns the string unchanged if within limit", () => {
      expect(truncate("Hi", 10)).toBe("Hi");
    });

    it("returns the string unchanged at exact limit", () => {
      expect(truncate("Hello", 5)).toBe("Hello");
    });
  });

  describe("countWords", () => {
    it("counts words in a sentence", () => {
      expect(countWords("Hello world")).toBe(2);
    });

    it("handles multiple spaces between words", () => {
      expect(countWords("one  two   three")).toBe(3);
    });

    it("returns 0 for an empty string", () => {
      expect(countWords("")).toBe(0);
    });

    it("returns 0 for whitespace-only string", () => {
      expect(countWords("   ")).toBe(0);
    });
  });
});
