export class AuthResponseDto {
  success: boolean;
  message: string;
  data: {
    access_token: string;
    user: {
      id: number;
      username: string;
      email: string;
    };
  };
}
