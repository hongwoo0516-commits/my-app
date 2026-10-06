export type Product = {
  id: string
  name: string
  description: string
  likes: number
}

const products: Product[] = [
  { id: '1', name: '머그컵', description: '나의 최애 머그컵', likes: 3 },
  { id: '2', name: '휴대폰', description: '나의 최애 휴대폰', likes: 8 },
  { id: '3', name: '연필', description: '나의 최애 연필', likes: 5 },
  { id: '4', name: '노트', description: '나의 최애 노트', likes: 3 },
  { id: '5', name: '노트북', description: '나의 최애 노트북', likes: 13 },
  { id: '6', name: 'Nextjs', description: '나의 최애 Nextjs', likes: 30 },
]

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getProducts(): Promise<Product[]> {
  await delay(700)
  return products
}

export async function getProduct(id: string): Promise<Product | undefined> {
  await delay(400)
  return products.find((product) => product.id === id)
}

export async function likeProduct(id: string): Promise<number> {
  await delay(300)
  const product = products.find((product) => product.id === id)
  if (!product) return 0
  product.likes += 1
  return product.likes
}
