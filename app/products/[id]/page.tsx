import { getProduct } from '@/lib/products'
import { LikeButton } from '@/components/ui/LikeButton'
import { notFound } from 'next/navigation'
import Link from 'next/link'

type Props = { params: Promise<{ id: string }> }

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-1 flex-col gap-6 px-8 py-16">
      <Link href="/products">목록으로</Link>
      <h1 className="text-2xl font-semibold text-black dark:text-zice-50">
        {' '}
        {product.name}{' '}
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-400">
        {' '}
        {product.description}{' '}
      </p>

      {<LikeButton id={product.id} initialLikes={product.likes} />}
    </div>
  )
}
