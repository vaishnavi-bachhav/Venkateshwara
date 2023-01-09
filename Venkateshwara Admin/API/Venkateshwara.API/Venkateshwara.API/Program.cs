using MongoDB.Driver;
using Venkateshwara.API.Data;
using Venkateshwara.API.Services.Achievements;
using Venkateshwara.API.Services.Career;
using Venkateshwara.API.Services.News;
using Venkateshwara.API.Services.Products;
using Venkateshwara.API.Services.Shared;
using Venkateshwara.API.Services.User;
using Venkateshwara.API.ViewModels;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(p => p.AddPolicy("corsPolicy", build =>
{
    build.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
}));

var dbConfig = builder.Configuration.GetSection("DbConfig").Get<DbConfig>();

var client = new MongoClient(dbConfig.ConnectionString);
var database = client.GetDatabase(dbConfig.DatabaseName);
var dbContext = new AppDbContext(database);

builder.Services.AddSingleton<ISharedService>((s) =>
{
    return new SharedService(dbContext);
});

builder.Services.AddSingleton<INewsService>((s) =>
{
    return new NewsService(dbContext, s.GetRequiredService<ISharedService>());
});

builder.Services.AddSingleton<ICareerService>((s) =>
{
    return new CareerService(dbContext, s.GetRequiredService<ISharedService>());
});

builder.Services.AddSingleton<IAchievementService>((s) =>
{
    return new AchievementService(dbContext, s.GetRequiredService<ISharedService>());
});

builder.Services.AddSingleton<IProductService>((s) =>
{
    return new ProductService(dbContext, s.GetRequiredService<ISharedService>());
});

builder.Services.AddSingleton<IUserService>((s) =>
{
    return new UserService(dbContext, s.GetRequiredService<ISharedService>());
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

app.UseCors("corsPolicy");

app.MapControllers();

app.Run();
