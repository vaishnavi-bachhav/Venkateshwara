namespace Venkateshwara.API.ViewModels
{
    public class OrderViewModel
    {
        public string? UserId { get; set; }
        public List<ProductOrders>? Products { get; set; }
    }

    public class ProductOrders
    {
        public string? ProductId { get; set; }
        public int Quantity { get; set; }
    }

    public class OrderDetails
    {
        public string? UserName { get; set; }
        public string? Email { get; set; }
        public float Amount { get; set; }
        public string? ProductName { get; set; }
        public int Quantity { get; set; }
        public DateTime MyProperty { get; set; }
    }
}
