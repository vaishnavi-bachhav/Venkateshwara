using Microsoft.AspNetCore.Mvc;
using Venkateshwara.API.Services.Career;
using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Controllers
{
    [Route("career")]
    [ApiController]
    public class CareerController : ControllerBase
    {
        private readonly ICareerService _careerService;
        public CareerController(ICareerService careerService)
        {
            _careerService = careerService;
        }

        [HttpGet]
        public async Task<IActionResult> GetCareer([FromQuery] string id = "")
        {
            if (string.IsNullOrWhiteSpace(id))
            {
                return Ok();
            }
            return Ok(await _careerService.GetCareerById(id));
        }

        [HttpGet("get-career")]
        public async Task<IActionResult> GetCareer()
        {
            return Ok(await _careerService.GetCareers());
        }

        [HttpPost("save-career")]
        public async Task<IActionResult> SaveCareer([FromBody] CareerViewModel careerView)
        {
            if (string.IsNullOrWhiteSpace(careerView.Id))
            {
                return Ok(await _careerService.AddCareer(careerView));
            }
            return Ok(await _careerService.UpdateCareer(careerView));
        }

        [HttpDelete("delete-career")]
        public async Task<IActionResult> DeleteCareer(string id)
        {
            return Ok(await _careerService.DeleteCareer(id));
        }
    }
}
