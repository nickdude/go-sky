/**
 * Tiny className joiner. Filters out falsy values so conditional classes can be
 * written inline without pulling in an extra dependency.
 *
 * @param {...(string|false|null|undefined)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
