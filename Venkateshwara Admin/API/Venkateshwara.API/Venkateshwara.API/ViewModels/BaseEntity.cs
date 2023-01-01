using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Venkateshwara.API.ViewModels
{
    public class BaseEntity
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? Name { get; set; }
        public DateTime AddedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
    }
}
