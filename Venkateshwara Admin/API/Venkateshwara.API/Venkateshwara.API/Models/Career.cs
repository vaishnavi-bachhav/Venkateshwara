using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Models
{
    public class Career : BaseEntity
    {
        public string? Description { get; set; }
        public CareerCategory Category { get; set; }
        public string? Positions { get; set; }
    }
}