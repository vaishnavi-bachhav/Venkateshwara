using Microsoft.AspNetCore.Mvc;
using Venkateshwara.API.Services.Career;
using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Controllers
{
    [Route("api/[controller]")]
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
                return Ok(await _careerService.GetCareers());
            }
            return Ok(await _careerService.GetCareerById(id));
        }

        [HttpPost]
        public async Task<IActionResult> SaveCareer(CareerViewModel careerView)
        {
            if (string.IsNullOrWhiteSpace(careerView.Id))
            {
                return Ok(await _careerService.AddCareer(careerView));
            }
            return Ok(await _careerService.UpdateCareer(careerView));
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteCareer(string id)
        {
            return Ok(await _careerService.DeleteCareer(id));
        }
    }
}
