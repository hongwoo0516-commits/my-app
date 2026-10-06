import { getNotice } from '@/lib/notices'

type props = { params: Promise<{ id: string }> }

export default async function NoticesPage({ params }: props) {
  const { id } = await params
  const notice = await getNotice(id)
}
