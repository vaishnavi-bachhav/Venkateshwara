using Microsoft.AspNetCore.Mvc;
using Venkateshwara.API.Services.News;
using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Controllers
{
    [Route("news")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly INewsService _newsService;
        public NewsController(INewsService newsService)
        {
            _newsService = newsService;
        }

        [HttpGet]
        public async Task<IActionResult> GetNews([FromQuery] string id = "")
        {
            if (string.IsNullOrWhiteSpace(id))
            {
                return Ok(await _newsService.GetNews());
            }
            return Ok(await _newsService.GetNewsById(id));

        }

        [HttpGet("get-news")]
        public async Task<IActionResult> GetNews()
        {
            return Ok(await _newsService.GetNews());
        }


        [HttpPost("save-news")]
        public async Task<IActionResult> SaveNews([FromBody] NewsViewModel newsView)
        {
            if (string.IsNullOrWhiteSpace(newsView.Id))
            {
                return Ok(await _newsService.AddNews(newsView));
            }
            return Ok(await _newsService.UpdateNews(newsView));
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteNews(string id)
        {
            return Ok(await _newsService.DeleteNews(id));
        }
    }
}
