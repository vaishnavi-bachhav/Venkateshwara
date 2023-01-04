using MongoDB.Driver;
using Venkateshwara.API.Data;
using Venkateshwara.API.Services.Shared;
using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Services.Achievements
{
    public class AchievementService : IAchievementService
    {
        private readonly AppDbContext _appDbContext;
        private readonly ISharedService _sharedService;

        public AchievementService(AppDbContext appDbContext, ISharedService sharedService)
        {
            _appDbContext = appDbContext;
            _sharedService = sharedService;
        }

        #region GET
        public async Task<List<AchievementsViewModel>> GetAchievements()
        {
            try
            {
                var achievements = (await _appDbContext.Achievements.Find(f => true).ToListAsync()).Select(s => new AchievementsViewModel(s)).ToList();
                return achievements;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(AchievementService), nameof(GetAchievements));
                return new List<AchievementsViewModel>();
            }
        }

        public async Task<AchievementsViewModel> GetAchievementById(string achievementId)
        {
            try
            {
                var achievement = await _appDbContext.Achievements.Find(f => f.Id == achievementId).FirstOrDefaultAsync();

                if (achievement == null)
                {
                    throw new BadHttpRequestException("Achievement not found");
                }

                return new AchievementsViewModel(achievement);
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(AchievementService), nameof(GetAchievementById));
                return new AchievementsViewModel();
            }
        }
        #endregion

        #region POST
        public async Task<string> AddAchievement(AchievementsViewModel achievementsView)
        {
            try
            {
                var currentDate = DateTime.Now;

                var achievement = new Models.Achievements
                {
                    Name = achievementsView.Name,
                    Description = achievementsView.Description,
                    Image = achievementsView.Image,
                    AchievementDate = achievementsView.AchievementDate,
                    AddedOn = currentDate,
                    ModifiedOn = currentDate,
                };

                await _appDbContext.Achievements.InsertOneAsync(achievement);

                return achievement.Id ?? string.Empty;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(AchievementService), nameof(AddAchievement));
                return string.Empty;
            }
        }
        #endregion

        #region PUT
        public async Task<bool> UpdateAchievement(AchievementsViewModel achievementsView)
        {
            try
            {
                var achievement = await GetAchievementById(achievementsView.Id!).ConfigureAwait(false);

                if (achievement != null)
                {
                    achievement.Name = achievementsView.Name?.Trim();
                    achievement.Description = achievementsView.Description?.Trim();
                    achievement.Image = achievementsView.Image;
                    achievement.AchievementDate = achievementsView.AchievementDate;
                    achievement.ModifiedOn = DateTime.Now;
                    var updateResult = await _appDbContext.Achievements.ReplaceOneAsync(b => b.Id == achievement.Id, achievement).ConfigureAwait(false);

                    return updateResult.IsAcknowledged;
                }

                return false;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(AchievementService), nameof(UpdateAchievement));
                return false;
            }
        }
        #endregion

        #region DELETE
        public async Task<bool> DeleteAchievement(string achievementId)
        {
            try
            {
                var deleteResult = await _appDbContext.Achievements.DeleteOneAsync(x => x.Id == achievementId);
                return deleteResult.IsAcknowledged;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(AchievementService), nameof(DeleteAchievement));
                return false;
            }
        }
        #endregion
    }
}