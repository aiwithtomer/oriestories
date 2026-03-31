import PageHeader from "@/components/PageHeader";
import BookGrid from "@/components/BookGrid";
import booksData from "@/content/books.json";

export default function BooksPage() {
  return (
    <>
      <PageHeader title="My Books" subtitle="Every story starts with a single what if…" />
      <section style={{ maxWidth: "72rem", margin: "0 auto", padding: "4rem 1.5rem" }}>
        <BookGrid books={booksData.books} />
      </section>
    </>
  );
}
