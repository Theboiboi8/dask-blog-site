import type {NextApiRequest, NextApiResponse} from "next";

type ResponseData = {
	version: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	res.status(200).json({ version: '1.0.0-DEV' })
}