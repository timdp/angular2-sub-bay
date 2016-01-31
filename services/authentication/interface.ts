interface IAuthenticationService {
  authenticated: boolean;
  username: string;
  login (username: string, password: string): Promise<any>;
  logout (): Promise<any>;
}

export default IAuthenticationService;
