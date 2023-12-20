import * as jwt from 'jsonwebtoken';

class JwtManager {
  private secret: string;

  constructor() {
    this.secret = 'thomasLePlusBeau';
  }

  createToken(userId: number): string {
    return jwt.sign({ user_id: userId }, this.secret, {
      expiresIn: '24h',
    });
  }

  verifyToken(token: string): string | object {
    return jwt.verify(token, this.secret);
  }

  jwtMiddleware(req: any, res: any, next: () => void): void {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const userData = this.verifyToken(token);
      req.user = userData;
      next();
    } catch (err) {
      res.status(401).send('Token invalide');
    }
  }
}

export default JwtManager;
