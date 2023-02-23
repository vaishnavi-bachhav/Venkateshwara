using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Services.Products
{
    public interface IProductService
    {
        Task<string> AddProduct(ProductViewModel productView);
        Task<string> AddProductType(ProductTypeViewModel productTypeView);
        Task<bool> DeleteProduct(string productId);
        Task<bool> DeleteProductType(string productId);
        Task<DashboardViewModel> GetDashboard();
        Task<ProductViewModel> GetProductById(string id);
        Task<List<ProductViewModel>> GetProducts();
        Task<List<DataViewModel>> GetProductTypes();
        Task<bool> UpdateProduct(ProductViewModel productView);
    }
}