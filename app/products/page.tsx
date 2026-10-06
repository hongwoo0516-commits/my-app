import { getProducts } from '@/lib/products'
import Link from 'next/link'
import React from 'react'

export default async function ProductsPage() {
  const products = await getProducts()
  //console.log(products)

  return (
    <div className="mx-auto max-w-2xl flex-1 px-8 py-16">
      <h1 className="mb-8 text-2xl font-semibold text-black dark:text-zinc-50">
        상품목록{' '}
      </h1>
      <ul className="flex flex-col gap-4">
        {products.map((product) => (
          <li key={product.id}>
            <Link
              href={`/products/${product.id}`}
              className="block rounded-lg border border-black/[.08] px-5 py-4 transition-colors hover:bg-black/[.03] dark:border-white/[.14] dark:hover:bg-white/5"
            >
              <p className="text-lg font-medium text-black dark:text-zinc-50">
                {product.name} - 좋아요 {product.likes}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {product.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
