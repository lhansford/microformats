// All descriptions are sourced from http://microformats.org/

/** http://microformats.org/wiki/h-card */
export const CARD = {
  /** The class h-card is a root class name that indicates the presence of an h-card. */
  root: 'h-card',
  /** The full/formatted name of the person or organization. */
  name: 'p-name',
  /** email address */
  email: 'u-email',
  /** universally unique identifier, preferably canonical URL */
  uid: 'u-uid',
  /** home page or other URL representing the person or organization */
  url: 'u-url',
};

/** http://microformats.org/wiki/h-entry */
export const ENTRY = {
  /** The class h-entry is a root class name that indicates the presence of an h-entry. */
  root: 'h-entry',
  /** entry name/title */
  name: 'p-name',
  /** short entry summary */
  summary: 'p-summary',
  /** full content of the entry */
  content: 'e-content',
  /** when the entry was published */
  published: 'dt-published',
  /** when the entry was updated */
  updated: 'dt-updated',
  /** who wrote the entry, optionally embedded h-card(s) */
  author: 'p-author',
  /** entry categories/tags */
  category: 'p-category',
  /** entry permalink URL */
  url: 'u-url',
  /** universally unique identifier, typically canonical entry URL */
  uid: 'u-uid',
  /** URL(s) of syndicated copies of this post. */
  syndication: 'u-syndication',
  /** the URL which the h-entry is considered a “repost” of. */
  repostOf: 'u-repost-of',
}
