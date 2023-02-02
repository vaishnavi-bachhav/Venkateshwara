using Venkateshwara.API.Models;

namespace Venkateshwara.API.ViewModels
{
    public class UserViewModel : Users
    {
        public UserViewModel()
        {

        }
        public UserViewModel(Users users)
        {
            Id = users.Id;
            Name = users.Name;
            Email = users.Email;
            Password = users.Password;
            Address = users.Address;
            ContactNumber = users.ContactNumber;
            Role = users.Role;
            RoleName = users.Role.ToString();
        }

        public string? RoleName { get; set; }
    }
}
