export type JwtPayload = {
  email: string;
  id: number;
  name: string;
  role: 'admin' | 'user';
};
