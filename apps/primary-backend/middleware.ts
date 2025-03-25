import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export function authMiddleware(rcdeq: Request, res: Response , next: NextFunction) {
  const token = req.headers.authorization;
  if(!token) {
    res.status(401).json({error: 'Unauthorized'});
    return;
  }

  const decoded = jwt.verify(token, process.env.JWT_PUBLIC_KEY!,{
    algorithms: ['RS256'],
  });

  if(!decoded){
    res.status(401).json({error: 'Unauthorized'});
    return;
  }

  const userId = decoded.userId;

  if(!userId){
    res.status(401).json({error: 'Unauthorized'});
    return;
  }

  req.userId = decoded.userId;
  next
}