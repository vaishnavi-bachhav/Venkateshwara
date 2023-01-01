using Venkateshwara.API.Models;

namespace Venkateshwara.API.ViewModels
{
    public class NewsViewModel : News
    {
        public NewsViewModel()
        {

        }
        public NewsViewModel(News news)
        {
            Id = news.Id;
            Name = news.Name;
            Image = news.Image;
            Description = news.Description;
            AddedOn = news.AddedOn; 
            ModifiedOn = news.ModifiedOn;
            NewsDate = news.NewsDate;
        }
    }
}
