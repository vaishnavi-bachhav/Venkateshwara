using Microsoft.AspNetCore.Mvc;
using Venkateshwara.API.Services.User;
using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Controllers
{
    [Route("user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("get-user")]
        public async Task<IActionResult> GetUsers([FromQuery] string id = "")
        {
            if (string.IsNullOrWhiteSpace(id))
            {
                return Ok(await _userService.GetUsers());
            }
            return Ok(await _userService.GetUserById(id));
        }

        [HttpPost("save-user")]
        public async Task<IActionResult> SaveUser(UserViewModel userView)
        {
            if (string.IsNullOrWhiteSpace(userView.Id))
            {
                return Ok(await _userService.AddUser(userView));
            }
            return Ok(await _userService.UpdateUser(userView));
        }

        [HttpDelete("delete-user/{id}")]
        public async Task<IActionResult> DeleteUser(string id)
        {
            return Ok(await _userService.DeleteUser(id));
        }
    }
}
