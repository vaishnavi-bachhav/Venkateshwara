using MongoDB.Driver;
using Venkateshwara.API.Data;
using Venkateshwara.API.Services.Shared;
using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Services.Order
{
    public class OrderService
    {
        private readonly AppDbContext _appDbContext;
        private readonly ISharedService _sharedService;

        public OrderService(AppDbContext appDbContext, ISharedService sharedService)
        {
            _appDbContext = appDbContext;
            _sharedService = sharedService;
        }

        public async Task<string> AddOrder(OrderViewModel orderView)
        {
            try
            {
                var currentDate = DateTime.Now;

                // Create Invoice
                Models.Invoice invoice = await CreateInvoice(orderView, currentDate);

                if (orderView.Products != null && orderView.Products.Any())
                {
                    foreach (var product in orderView.Products)
                    {
                        await CreateOrderIfProductAvailable(orderView, currentDate, invoice, product);
                    }
                }

                return invoice.Id ?? string.Empty;
            }
            catch (Exception ex)
            {
                await _sharedService.LogError(ex, nameof(OrderService), nameof(AddOrder));
                return string.Empty;
            }
        }

        private async Task CreateOrderIfProductAvailable(OrderViewModel orderView, DateTime currentDate, Models.Invoice invoice, ProductOrders product)
        {
            var productDetails = await _appDbContext.Products.Find(f => f.Id == product.ProductId).FirstOrDefaultAsync();

            if (productDetails != null && productDetails.Quantity >= product.Quantity)
            {
                productDetails.Quantity -= product.Quantity;
                await _appDbContext.Products.ReplaceOneAsync(b => b.Id == product.ProductId, productDetails);
                
                await CreateOrder(orderView, currentDate, invoice, product);
            }
        }

        private async Task CreateOrder(OrderViewModel orderView, DateTime currentDate, Models.Invoice invoice, ProductOrders product)
        {
            var order = new Models.Order
            {
                InvoiceId = invoice.Id,
                ProductId = product.ProductId,
                UserId = orderView.UserId,
                Quantity = product.Quantity,
                AddedOn = currentDate,
                ModifiedOn = currentDate
            };
            await _appDbContext.Orders.InsertOneAsync(order);
        }

        private async Task<Models.Invoice> CreateInvoice(OrderViewModel orderView, DateTime currentDate)
        {
            var invoice = new Models.Invoice
            {
                UserId = orderView.UserId,
                AddedOn = currentDate,
                ModifiedOn = currentDate,
            };

            await _appDbContext.Invoices.InsertOneAsync(invoice);
            return invoice;
        }

        public async Task GetOrders()
        {

        }
    }
}
