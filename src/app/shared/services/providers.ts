import { ClientStorage } from '@services/client-storage.service';
import { AuthService } from '@services/auth.service';
import { ApiService } from '@services/api.service';
import { Cookies } from '@services/cookies.service';

export const SERVICES: any[] = [
  ClientStorage,
  AuthService,
  ApiService,
  Cookies
];
