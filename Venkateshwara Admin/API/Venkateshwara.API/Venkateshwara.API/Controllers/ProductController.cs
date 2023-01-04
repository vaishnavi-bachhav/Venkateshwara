using Microsoft.AspNetCore.Mvc;
using Venkateshwara.API.Services.Products;
using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet("get-product")]
        public async Task<IActionResult> GetProducts([FromQuery] string id = "")
        {
            if (string.IsNullOrWhiteSpace(id))
            {
                return Ok(await _productService.GetProducts());
            }
            return Ok(await _productService.GetProductById(id));
        }

        [HttpGet("get-product-type")]
        public async Task<IActionResult> GetProductTypes()
        {
            return Ok(await _productService.GetProductTypes());
        }

        [HttpPost("save-product")]
        public async Task<IActionResult> SaveProduct(ProductViewModel productView)
        {
            if (string.IsNullOrWhiteSpace(productView.Id))
            {
                return Ok(await _productService.AddProduct(productView));
            }
            return Ok(await _productService.UpdateProduct(productView));
        }

        [HttpPost("save-product-type")]
        public async Task<IActionResult> SaveProductType(ProductTypeViewModel productTypeView)
        {
            return Ok(await _productService.AddProductType(productTypeView));
        }

        [HttpDelete("delete-product/{id}")]
        public async Task<IActionResult> DeleteProduct(string id)
        {
            return Ok(await _productService.DeleteProduct(id));
        }

        [HttpDelete("delete-product-type/{id}")]
        public async Task<IActionResult> DeleteProductType(string id)
        {
            return Ok(await _productService.DeleteProductType(id));
        }
    }
}
