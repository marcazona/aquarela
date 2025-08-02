import { getModels } from '@/lib/config/models'

import { Chat } from '@/components/chat'

export default async function Page() {
  const models = await getModels()
  return <Chat models={models} />
}
