using MongoDB.Driver;
using Venkateshwara.API.Data;
using Venkateshwara.API.Services.Shared;
using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Services.Products
{
    public class ProductService : IProductService
    {
        private readonly AppDbContext _appDbContext;
        private readonly ISharedService _sharedService;

        public ProductService(AppDbContext appDbContext, ISharedService sharedService)
        {
            _appDbContext = appDbContext;
            _sharedService = sharedService;
        }

        #region GET
        public async Task<List<ProductViewModel>> GetProducts()
        {
            try
            {
                var products = (await _appDbContext.Products.Find(f => true).ToListAsync()).Select(s => new ProductViewModel(s)).ToList();
                return products;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(ProductService), nameof(GetProducts));
                return new List<ProductViewModel>();
            }
        }

        public async Task<List<DataViewModel>> GetProductTypes()
        {
            try
            {
                var productTypes = (await _appDbContext.ProductTypes.Find(f => true).ToListAsync())
                    .Select(s => new DataViewModel
                    {
                        Id = s.Id,
                        Name = s.Name,
                    }).ToList();

                return productTypes;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(ProductService), nameof(GetProductTypes));
                return new List<DataViewModel>();
            }
        }

        public async Task<ProductViewModel> GetProductById(string id)
        {
            try
            {
                var product = await _appDbContext.Products.Find(f => f.Id == id).FirstOrDefaultAsync();

                if (product == null)
                {
                    throw new BadHttpRequestException("Product not found");
                }

                return new ProductViewModel(product);
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(ProductService), nameof(GetProductById));
                return new ProductViewModel();
            }
        }
        #endregion

        #region POST
        public async Task<string> AddProduct(ProductViewModel productView)
        {
            try
            {
                var currentDate = DateTime.Now;

                var product = new Models.Products
                {
                    Name = productView.Name,
                    Description = productView.Description,
                    Image = productView.Image,
                    ProductTypeId = productView.ProductTypeId,
                    Price = productView.Price,
                    Rating = productView.Rating,
                    Size = productView.Size,
                    AddedOn = currentDate,
                    ModifiedOn = currentDate,
                };

                await _appDbContext.Products.InsertOneAsync(product);

                return product.Id ?? string.Empty;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(ProductService), nameof(AddProduct));
                return string.Empty;
            }
        }

        public async Task<string> AddProductType(ProductTypeViewModel productTypeView)
        {
            try
            {
                var currentDate = DateTime.Now;

                var productType = new Models.ProductType
                {
                    Name = productTypeView.Name,
                    AddedOn = currentDate,
                    ModifiedOn = currentDate,
                };

                await _appDbContext.ProductTypes.InsertOneAsync(productType);

                return productType.Id ?? string.Empty;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(ProductService), nameof(AddProductType));
                return string.Empty;
            }
        }
        #endregion

        #region PUT
        public async Task<bool> UpdateProduct(ProductViewModel productView)
        {
            try
            {
                var product = await GetProductById(productView.Id!).ConfigureAwait(false);

                if (product != null)
                {
                    product.Name = productView.Name?.Trim();
                    product.Description = productView.Description?.Trim();
                    product.Image = productView.Image;
                    product.Rating = productView.Rating;
                    product.Price = productView.Price;
                    product.Size = productView.Size;
                    product.ProductTypeId = productView.ProductTypeId;
                    product.ModifiedOn = DateTime.Now;
                    var updateResult = await _appDbContext.Products.ReplaceOneAsync(b => b.Id == product.Id, product).ConfigureAwait(false);

                    return updateResult.IsAcknowledged;
                }

                return false;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(ProductService), nameof(UpdateProduct));
                return false;
            }
        }
        #endregion

        #region DELETE
        public async Task<bool> DeleteProduct(string productId)
        {
            try
            {
                var deleteResult = await _appDbContext.Products.DeleteOneAsync(x => x.Id == productId);
                return deleteResult.IsAcknowledged;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(ProductService), nameof(DeleteProduct));
                return false;
            }
        }

        public async Task<bool> DeleteProductType(string productId)
        {
            try
            {
                var deleteResult = await _appDbContext.ProductTypes.DeleteOneAsync(x => x.Id == productId);
                return deleteResult.IsAcknowledged;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(ProductService), nameof(DeleteProductType));
                return false;
            }
        }
        #endregion
    }
}
