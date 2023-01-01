using System.ComponentModel.DataAnnotations.Schema;
using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Models
{
    [Table("News")]
    public class News : BaseEntity
    {
        public string? Description { get; set; }
        public string? Image { get; set; }
        public DateTime NewsDate { get; set; }
    }
}
