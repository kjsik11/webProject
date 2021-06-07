import { NextApiRequest, NextApiResponse } from 'next';

import { connectMongo, withErrorHandler, throwError } from '@utils/common';

const handler: (
  req: NextApiRequest,
  res: NextApiResponse,
) => Promise<void> = async (req, res) => {
  const { db } = await connectMongo();

  if (req.method === 'GET') {
    const cursor = db
      .collection('team')
      .find({ deleted: null }, { sort: { created: -1 } });

    const teams = await cursor.toArray();

    await cursor.close();

    return res.json({
      teams,
    });
  }

  if (req.method === 'POST') {
    const { name, position, age } = req.body;

    const { insertedId } = await db.collection('team').insertOne({
      name,
      position,
      age,
      created: new Date(),
      lastUpdated: new Date(),
      deleted: null,
    });

    return res.json({ teamId: insertedId });
  }

  return throwError(res, 1, 400);
};

export default withErrorHandler(handler);
