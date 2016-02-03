interface IAuthenticationService {
  authenticated: boolean;
  userInfo: any;
  logIn (id: string): Promise<any>;
  logOut (): Promise<any>;
}

export default IAuthenticationService;
