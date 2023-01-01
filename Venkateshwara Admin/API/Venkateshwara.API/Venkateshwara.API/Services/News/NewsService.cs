using MongoDB.Driver;
using Venkateshwara.API.Data;
using Venkateshwara.API.Services.Shared;
using Venkateshwara.API.ViewModels;
using NE = Venkateshwara.API.Models;

namespace Venkateshwara.API.Services.News
{
    public class NewsService : INewsService
    {
        private readonly AppDbContext _appDbContext;
        private readonly ISharedService _sharedService;

        public NewsService(AppDbContext appDbContext, ISharedService sharedService)
        {
            _appDbContext = appDbContext;
            _sharedService = sharedService;
        }

        #region GET
        public async Task<List<NewsViewModel>> GetNews()
        {
            try
            {
                var news = (await _appDbContext.News.Find(f => true).ToListAsync()).Select(s => new NewsViewModel(s)).ToList();
                return news;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(NewsService), nameof(GetNews));
                return new List<NewsViewModel>();
            }
        }

        public async Task<NewsViewModel> GetNewsById(string newsId)
        {
            try
            {
                var news = await _appDbContext.News.Find(f => f.Id == newsId).FirstOrDefaultAsync();
                
                if(news == null)
                {
                    throw new BadHttpRequestException("News not found");
                }

                return new NewsViewModel(news);
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(NewsService), nameof(GetNewsById));
                return new NewsViewModel();
            }
        }
        #endregion

        #region POST
        public async Task<string> AddNews(NewsViewModel newsView)
        {
            try
            {
                var currentDate = DateTime.Now;

                var news = new NE.News
                {
                    Name = newsView.Name,
                    Description = newsView.Description,
                    Image = newsView.Image,
                    NewsDate = newsView.NewsDate,
                    AddedOn = currentDate,
                    ModifiedOn = currentDate,
                };

                await _appDbContext.News.InsertOneAsync(news);

                return news.Id ?? string.Empty;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(NewsService), nameof(AddNews));
                return string.Empty;
            }
        }
        #endregion

        #region PUT
        public async Task<bool> UpdateNews(NewsViewModel newsView)
        {
            try
            {
                var news = await GetNewsById(newsView.Id!).ConfigureAwait(false);

                if (news != null)
                {
                    news.Name = newsView.Name?.Trim();
                    news.Description = newsView.Description?.Trim();
                    news.NewsDate = newsView.NewsDate;
                    news.Image = newsView.Image;
                    news.ModifiedOn = DateTime.Now; 
                    var updateResult = await _appDbContext.News.ReplaceOneAsync(b => b.Id == newsView.Id, news).ConfigureAwait(false);

                    return updateResult.IsAcknowledged;
                }

                return false;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(NewsService), nameof(UpdateNews));
                return false;
            }
        }
        #endregion

        #region DELETE
        public async Task<bool> DeleteNews(string newsId)
        {
            try
            {
                var news = await _appDbContext.News.DeleteOneAsync(x => x.Id == newsId);
                return news.IsAcknowledged;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(NewsService), nameof(DeleteNews));
                return false;
            }
        }
        #endregion
    }
}
