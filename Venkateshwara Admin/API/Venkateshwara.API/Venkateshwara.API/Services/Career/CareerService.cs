using MongoDB.Driver;
using Venkateshwara.API.Data;
using Venkateshwara.API.Services.Shared;
using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Services.Career
{
    public class CareerService : ICareerService
    {
        private readonly AppDbContext _appDbContext;
        private readonly ISharedService _sharedService;

        public CareerService(AppDbContext appDbContext, ISharedService sharedService)
        {
            _appDbContext = appDbContext;
            _sharedService = sharedService;
        }

        #region GET
        public async Task<List<CareerViewModel>> GetCareers()
        {
            try
            {
                var careers = (await _appDbContext.Careers.Find(f => true).ToListAsync()).Select(s => new CareerViewModel(s)).ToList();
                return careers;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(CareerService), nameof(GetCareers));
                return new List<CareerViewModel>();
            }
        }

        public async Task<CareerViewModel> GetCareerById(string careerId)
        {
            try
            {
                var career = await _appDbContext.Careers.Find(f => f.Id == careerId).FirstOrDefaultAsync();

                if (career == null)
                {
                    throw new BadHttpRequestException("Career not found");
                }

                return new CareerViewModel(career);
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(CareerService), nameof(GetCareerById));
                return new CareerViewModel();
            }
        }
        #endregion

        #region POST
        public async Task<string> AddCareer(CareerViewModel careerView)
        {
            try
            {
                var currentDate = DateTime.Now;

                var career = new Models.Career
                {
                    Name = careerView.Name,
                    Description = careerView.Description,
                    Positions = careerView.Positions,
                    Category = careerView.Category,
                    AddedOn = currentDate,
                    ModifiedOn = currentDate,
                };

                await _appDbContext.Careers.InsertOneAsync(career);

                return career.Id ?? string.Empty;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(CareerService), nameof(AddCareer));
                return string.Empty;
            }
        }
        #endregion

        #region PUT
        public async Task<bool> UpdateCareer(CareerViewModel careerView)
        {
            try
            {
                var career = await GetCareerById(careerView.Id!).ConfigureAwait(false);

                if (career != null)
                {
                    career.Name = careerView.Name?.Trim();
                    career.Description = careerView.Description?.Trim();
                    career.Positions = careerView.Positions;
                    career.Category = careerView.Category;
                    career.ModifiedOn = DateTime.Now;
                    var updateResult = await _appDbContext.Careers.ReplaceOneAsync(b => b.Id == career.Id, career).ConfigureAwait(false);

                    return updateResult.IsAcknowledged;
                }

                return false;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(CareerService), nameof(UpdateCareer));
                return false;
            }
        }
        #endregion

        #region DELETE
        public async Task<bool> DeleteCareer(string careerId)
        {
            try
            {
                var career = await _appDbContext.Careers.DeleteOneAsync(x => x.Id == careerId);
                return career.IsAcknowledged;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(CareerService), nameof(DeleteCareer));
                return false;
            }
        }
        #endregion
    }
}
