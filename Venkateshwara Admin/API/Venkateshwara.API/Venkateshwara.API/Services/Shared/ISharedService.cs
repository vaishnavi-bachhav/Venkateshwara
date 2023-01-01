
namespace Venkateshwara.API.Services.Shared
{
    public interface ISharedService
    {
        Task LogError(Exception exception, string className, string methodName);
    }
}