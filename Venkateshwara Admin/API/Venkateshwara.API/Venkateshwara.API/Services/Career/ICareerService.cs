using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Services.Career
{
    public interface ICareerService
    {
        Task<string> AddCareer(CareerViewModel careerView);
        Task<bool> DeleteCareer(string careerId);
        Task<CareerViewModel> GetCareerById(string careerId);
        Task<List<CareerViewModel>> GetCareers();
        Task<bool> UpdateCareer(CareerViewModel careerView);
    }
}