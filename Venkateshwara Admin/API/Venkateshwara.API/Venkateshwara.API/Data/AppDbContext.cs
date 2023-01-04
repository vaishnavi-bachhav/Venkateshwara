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

        public IMongoCollection<Achievements> Achievements
        {
            get
            {
                return _mongoDatabase.GetCollection<Achievements>(nameof(Achievements));
            }
        }

        public IMongoCollection<Products> Products
        {
            get
            {
                return _mongoDatabase.GetCollection<Products>(nameof(Products));
            }
        }

        public IMongoCollection<ProductType> ProductTypes
        {
            get
            {
                return _mongoDatabase.GetCollection<ProductType>(nameof(ProductType));
            }
        }

        public IMongoCollection<Users> Users
        {
            get
            {
                return _mongoDatabase.GetCollection<Users>(nameof(Users));
            }
        }
    }
}
