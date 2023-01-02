using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Models
{
    public class Products : BaseEntity
    {
        public string? Description { get; set; }
        public int Size { get; set; }
        public float Price { get; set; }
        public int Rating { get; set; }
        public string? Image { get; set; }
    }
}