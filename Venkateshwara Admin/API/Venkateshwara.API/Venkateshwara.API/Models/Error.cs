using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Venkateshwara.API.Models
{
    public class Error
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? ClassName { get; set; }
        public string? MethodName { get; set; }
        public string? ErrorMessage { get; set; }
        public string? StackTrace { get; set; }
        public DateTime AddedOn { get; set; }
    }
}
