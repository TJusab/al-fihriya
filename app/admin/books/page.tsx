import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";

const Page = async () => {
  const allBooks = await db.select().from(books).orderBy(books.createdAt);

  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">All Books</h2>
        <Button className="bg-primary-admin" asChild>
          <Link href="/admin/books/new" className="text-white">
            + Create a New Book
          </Link>
        </Button>
      </div>

      <div className="mt-7 w-full overflow-x-auto">
        {allBooks.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No books found</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Genre
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                  Rating
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                  Total Copies
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                  Available
                </th>
              </tr>
            </thead>
            <tbody>
              {allBooks.map((book) => (
                <tr
                  key={book.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {book.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {book.author}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {book.genre}
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">
                    {book.rating}/5
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">
                    {book.totalCopies}
                  </td>
                  <td className="px-6 py-4 text-sm text-center font-medium text-gray-900">
                    {book.availableCopies}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default Page;
