using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Services.User
{
    public interface IUserService
    {
        Task<string> AddUser(UserViewModel userView);
        Task<bool> DeleteUser(string userId);
        Task<UserViewModel> GetUserById(string userId);
        Task<List<UserViewModel>> GetUsers();
        Task<LoginResponse> Login(LoginViewModel loginView);
        Task<bool> UpdateUser(UserViewModel userView);
    }
}