import type { NextApiRequest, NextApiResponse } from 'next'
import {experienceList} from '../../../public/data/experienceList'
type Data = {
  title: string,
  duration: string,
  description: string[]
}[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(experienceList)
}