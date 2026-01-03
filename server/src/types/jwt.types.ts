import { User } from '../modules/user/entities/user.entity';

export interface JwtPayload {
  id: number;
}

export interface RequestWithUser extends Request {
  user: User;
}
