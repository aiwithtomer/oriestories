import BookCard from "./BookCard";

interface Book {
  slug: string;
  title: string;
  tagline: string;
  genre?: string[];
}

export default function BookGrid({ books }: { books: Book[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {books.map((book) => (
        <BookCard key={book.slug} {...book} />
      ))}
    </div>
  );
}
