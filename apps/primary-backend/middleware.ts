import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

declare module 'express' {
  interface Request {
    userId?: string;
  }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_PUBLIC_TOKEN as string, {
      algorithms: ['RS256'],
    }) as { sub?: string };

    if (!decoded?.sub) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    req.userId = decoded.sub;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
