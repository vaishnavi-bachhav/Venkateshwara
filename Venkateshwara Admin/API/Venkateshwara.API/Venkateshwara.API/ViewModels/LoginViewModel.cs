namespace Venkateshwara.API.ViewModels
{
    public class LoginViewModel
    {
        public string? Email { get; set; }
        public string? Password { get; set; }
    }

    public class LoginResponse
    {
        public LoginResponse()
        {

        }
        public LoginResponse(string message)
        {
            IsAuthenticated = false;
            Message = message;
        }
        public bool IsAuthenticated { get; set; }
        public string? Message { get; set; }
        public string? Email { get; set; }
        public string? UserId { get; set; }
        public string? Name { get; set; }
        public UserRole Role { get; set; }
    }
}
