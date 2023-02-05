using Venkateshwara.API.Models;

namespace Venkateshwara.API.ViewModels
{
    public class ProductViewModel : Products
    {
        public ProductViewModel()
        {

        }
        public ProductViewModel(Products product)
        {
            Id = product.Id;
            Name = product.Name;
            Description = product.Description;
            AddedOn = product.AddedOn;
            ModifiedOn = product.ModifiedOn;
            Image = product.Image;
            ProductTypeId = product.ProductTypeId;
            Price = product.Price;
            Quantity = product.Quantity;    
            Rating = product.Rating;
            Size = product.Size;
        }
    }

    public class ProductTypeViewModel : ProductType
    {
        public ProductTypeViewModel()
        {

        }
        public ProductTypeViewModel(ProductType productType)
        {
            Id= productType.Id;
            Name = productType.Name;
            AddedOn = productType.AddedOn;
            ModifiedOn= productType.ModifiedOn;
        }
    }
}
