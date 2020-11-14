export const contact = async (req: any, res: any) => {
  const content = await fetch(
    `${process.env.GATSBY_BASE_URL}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-WRITE-API-KEY': `${process.env.X_WRITE_API_KEY}`,
      },
      body: JSON.stringify(req.body),
    },
  )
    .then(() => 'Created')
    .catch(() => null);

  if (content !== 'Created') {
    return res
      .status(401)
      .json({ message: 'Unauthorized' });
  }

  res.status(200).json({ message: 'OK' });

  res.end('Contact enabled');
};
