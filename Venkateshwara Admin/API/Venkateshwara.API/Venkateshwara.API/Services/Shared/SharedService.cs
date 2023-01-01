using Venkateshwara.API.Data;
using Venkateshwara.API.Models;

namespace Venkateshwara.API.Services.Shared
{
    public class SharedService : ISharedService
    {
        private readonly AppDbContext _appDbContext;

        public SharedService(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task LogError(Exception exception, string className, string methodName)
        {
            var error = new Error
            {
                ClassName = className,
                MethodName = methodName,
                ErrorMessage = exception.Message,
                StackTrace = exception.StackTrace,
                AddedOn = DateTime.Now,
            };

            await _appDbContext.Errors.InsertOneAsync(error);
        }
    }
}
