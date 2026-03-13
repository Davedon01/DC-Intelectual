"use client";

import Link from "next/link";

type BookProps = {
  title: string;
  slug: string;
};

export default function BookCard({ title, slug }: BookProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="group cursor-pointer">

        {/* Book */}
        <div className="
          relative
          h-64
          rounded-lg
          bg-linear-to-br
          from-neutral-200
          to-neutral-300
          dark:from-neutral-800
          dark:to-neutral-900
          border
          border-neutral-300
          dark:border-neutral-700
          shadow-md
          hover:shadow-xl
          transition
          duration-300
          flex
          items-end
          p-6
        ">

          {/* Title */}
          <h3 className="
            font-serif
            text-xl
            text-neutral-900
            dark:text-white
            leading-snug
          ">
            {title}
          </h3>

        </div>

      </div>
    </Link>
  );
}