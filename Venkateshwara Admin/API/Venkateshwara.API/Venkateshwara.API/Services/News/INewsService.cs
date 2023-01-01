using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Services.News
{
    public interface INewsService
    {
        Task<string> AddNews(NewsViewModel newsView);
        Task<bool> DeleteNews(string newsId);
        Task<List<NewsViewModel>> GetNews();
        Task<NewsViewModel> GetNewsById(string newsId);
        Task<bool> UpdateNews(NewsViewModel newsView);
    }
}