using Microsoft.AspNetCore.Mvc;
using Venkateshwara.API.Services.Achievements;
using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Controllers
{
    [Route("achievement")]
    [ApiController]
    public class AchievementController : ControllerBase
    {
        private readonly IAchievementService _achievementService;
        public AchievementController(IAchievementService achievementService)
        {
            _achievementService = achievementService;
        }

        [HttpGet("get-achievement")]
        public async Task<IActionResult> GetAchievements([FromQuery] string id = "")
        {
            if (string.IsNullOrWhiteSpace(id))
            {
                return Ok(await _achievementService.GetAchievements());
            }
            return Ok(await _achievementService.GetAchievementById(id));
        }

        [HttpPost("save-achievement")]
        public async Task<IActionResult> SaveAchievements(AchievementsViewModel achievementsView)
        {
            if (string.IsNullOrWhiteSpace(achievementsView.Id))
            {
                return Ok(await _achievementService.AddAchievement(achievementsView));
            }
            return Ok(await _achievementService.UpdateAchievement(achievementsView));
        }

        [HttpDelete("delete-achievement/{id}")]
        public async Task<IActionResult> DeleteAchievement(string id)
        {
            return Ok(await _achievementService.DeleteAchievement(id));
        }
    }
}
