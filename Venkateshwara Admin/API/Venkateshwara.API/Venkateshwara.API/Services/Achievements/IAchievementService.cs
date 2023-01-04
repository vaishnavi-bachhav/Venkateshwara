using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Services.Achievements
{
    public interface IAchievementService
    {
        Task<string> AddAchievement(AchievementsViewModel achievementsView);
        Task<bool> DeleteAchievement(string achievementId);
        Task<AchievementsViewModel> GetAchievementById(string achievementId);
        Task<List<AchievementsViewModel>> GetAchievements();
        Task<bool> UpdateAchievement(AchievementsViewModel achievementsView);
    }
}