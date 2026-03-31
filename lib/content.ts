import booksData from "@/content/books.json";
import aboutData from "@/content/about.json";
import siteConfig from "@/content/site-config.json";

export function getBooks() {
  return booksData.books;
}

export function getBookBySlug(slug: string) {
  return booksData.books.find((book) => book.slug === slug) ?? null;
}

export function getFeaturedBook() {
  return booksData.books.find((book) => book.featured) ?? booksData.books[0];
}

export function getAbout() {
  return aboutData;
}

export function getSiteConfig() {
  return siteConfig;
}
