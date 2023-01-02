using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Models
{
    public class Achievements : BaseEntity
    {
        public string? Description { get; set; }
        public string? Image { get; set; }
        public DateTime NewsDate { get; set; }
    }
}
