using Venkateshwara.API.Models;

namespace Venkateshwara.API.ViewModels
{
    public class CareerViewModel : Career
    {
        public CareerViewModel()
        {

        }
        public CareerViewModel(Career career)
        {
            Id = career.Id;
            Name = career.Name;
            Description = career.Description;
            AddedOn = career.AddedOn;
            ModifiedOn = career.ModifiedOn;
            Positions = career.Positions;
            Category= career.Category;
            CategoryName = career.Category.ToString();
        }

        public string? CategoryName { get; set; }
    }
}
