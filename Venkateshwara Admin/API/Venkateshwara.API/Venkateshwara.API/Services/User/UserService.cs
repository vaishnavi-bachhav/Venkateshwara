using MongoDB.Driver;
using Venkateshwara.API.Data;
using Venkateshwara.API.Services.Shared;
using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Services.User
{
    public class UserService : IUserService
    {
        private readonly AppDbContext _appDbContext;
        private readonly ISharedService _sharedService;

        public UserService(AppDbContext appDbContext, ISharedService sharedService)
        {
            _appDbContext = appDbContext;
            _sharedService = sharedService;
        }

        #region GET
        public async Task<List<UserViewModel>> GetUsers()
        {
            try
            {
                var users = (await _appDbContext.Users.Find(f => f.Role == UserRole.User).ToListAsync()).Select(s => new UserViewModel(s)).ToList();
                return users;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(UserService), nameof(GetUsers));
                return new List<UserViewModel>();
            }
        }

        public async Task<UserViewModel> GetUserById(string userId)
        {
            try
            {
                var user = await _appDbContext.Users.Find(f => f.Id == userId).FirstOrDefaultAsync();

                if (user == null)
                {
                    throw new BadHttpRequestException("User not found");
                }

                return new UserViewModel(user);
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(UserService), nameof(GetUserById));
                return new UserViewModel();
            }
        }
        #endregion

        #region POST
        public async Task<string> AddUser(UserViewModel userView)
        {
            try
            {
                var currentDate = DateTime.Now;

                var user = new Models.Users
                {
                    Name = userView.Name,
                    Email = userView.Email,
                    Password = userView.Password,
                    Role = UserRole.User,
                    AddedOn = currentDate,
                    ModifiedOn = currentDate,
                };

                await _appDbContext.Users.InsertOneAsync(user);

                return user.Id ?? string.Empty;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(UserService), nameof(AddUser));
                return string.Empty;
            }
        }
        #endregion

        #region PUT
        public async Task<bool> UpdateUser(UserViewModel userView)
        {
            try
            {
                var user = await GetUserById(userView.Id!).ConfigureAwait(false);

                if (user != null)
                {
                    user.Name = userView.Name?.Trim();
                    user.Email = userView.Email?.Trim();
                    user.Password = userView.Password;
                    user.ModifiedOn = DateTime.Now;
                    var updateResult = await _appDbContext.Users.ReplaceOneAsync(b => b.Id == userView.Id, user).ConfigureAwait(false);

                    return updateResult.IsAcknowledged;
                }

                return false;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(UserService), nameof(UpdateUser));
                return false;
            }
        }
        #endregion

        #region DELETE
        public async Task<bool> DeleteUser(string userId)
        {
            try
            {
                var deleteResult = await _appDbContext.Users.DeleteOneAsync(x => x.Id == userId);
                return deleteResult.IsAcknowledged;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(UserService), nameof(DeleteUser));
                return false;
            }
        }
        #endregion

        public async Task<LoginResponse> Login(LoginViewModel loginView)
        {
            try
            {
                var user = await _appDbContext.Users.Find(f => f.Email == loginView.Email && f.Password == loginView.Password).FirstOrDefaultAsync();

                if (user == null)
                {
                    return new LoginResponse("Username or password is invalid");
                }

                return new LoginResponse
                {
                    IsAuthenticated = true,
                    Message = $"{user.Name ?? "User"} login successfully!",
                    UserId = user.Id,
                    Name = user.Name,
                    Email = user.Email,
                    Role = user.Role
                };
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(UserService), nameof(Login));
                return new LoginResponse("Invalid login attempt");
            }
        }
    }
}
