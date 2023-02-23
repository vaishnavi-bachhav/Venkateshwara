using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Venkateshwara.API.Models
{
    public class Order
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? InvoiceId { get; set; }
        public string? UserId { get; set; }
        public string? ProductId { get; set; }
        public int Quantity { get; set; }
        public DateTime AddedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
    }
}
