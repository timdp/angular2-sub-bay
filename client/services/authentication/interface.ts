interface IAuthenticationService {
  authenticated: boolean;
  userInfo: any;
  logIn (token: string): Promise<any>;
  logOut (): Promise<any>;
}

export default IAuthenticationService;
