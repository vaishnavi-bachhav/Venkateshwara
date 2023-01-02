using MongoDB.Driver;
using Venkateshwara.API.Models;

namespace Venkateshwara.API.Data
{
    public class AppDbContext
    {
        private readonly IMongoDatabase _mongoDatabase;

        public AppDbContext(IMongoDatabase mongoDatabase)
        {
            _mongoDatabase = mongoDatabase;
        }

        public IMongoCollection<News> News
        {
            get
            {
                return _mongoDatabase.GetCollection<News>(nameof(News));
            }
        }

        public IMongoCollection<Error> Errors
        {
            get
            {
                return _mongoDatabase.GetCollection<Error>(nameof(Error));
            }
        }

        public IMongoCollection<Career> Careers
        {
            get
            {
                return _mongoDatabase.GetCollection<Career>(nameof(Career));
            }
        }
    }
}
