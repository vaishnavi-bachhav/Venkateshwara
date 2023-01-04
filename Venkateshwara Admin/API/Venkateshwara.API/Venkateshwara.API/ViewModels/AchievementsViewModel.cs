using Venkateshwara.API.Models;

namespace Venkateshwara.API.ViewModels
{
    public class AchievementsViewModel : Achievements
    {
        public AchievementsViewModel()
        {

        }
        public AchievementsViewModel(Achievements achievements)
        {
            Id = achievements.Id;
            Name = achievements.Name;
            Image = achievements.Image;
            Description = achievements.Description;
            AddedOn = achievements.AddedOn;
            ModifiedOn = achievements.ModifiedOn;
            AchievementDate = achievements.AchievementDate;
        }
    }
}
