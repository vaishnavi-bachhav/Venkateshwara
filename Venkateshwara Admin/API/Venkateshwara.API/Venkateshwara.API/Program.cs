using MongoDB.Driver;
using Venkateshwara.API.Data;
using Venkateshwara.API.Services.Career;
using Venkateshwara.API.Services.News;
using Venkateshwara.API.Services.Shared;
using Venkateshwara.API.ViewModels;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var dbConfig = builder.Configuration.GetSection("DbConfig").Get<DbConfig>();

var client = new MongoClient(dbConfig.ConnectionString);
var database = client.GetDatabase(dbConfig.DatabaseName);
var dbContext = new AppDbContext(database);

builder.Services.AddSingleton<INewsService>((s) =>
{
    return new NewsService(dbContext, s.GetRequiredService<ISharedService>());
});

builder.Services.AddSingleton<ICareerService>((s) =>
{
    return new CareerService(dbContext, s.GetRequiredService<ISharedService>());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
