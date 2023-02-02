using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Models
{
    public class Users : BaseEntity
    {
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? ContactNumber { get; set; }
        public string? Address { get; set; }
        public UserRole Role { get; set; }
    }
}
