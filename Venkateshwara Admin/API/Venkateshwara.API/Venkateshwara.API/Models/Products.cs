﻿using Venkateshwara.API.ViewModels;

namespace Venkateshwara.API.Models
{
    public class Products : BaseEntity
    {
        public string? Description { get; set; }
        public string? Size { get; set; }
        public float Price { get; set; }
        public int Rating { get; set; }
        public string? Image { get; set; }
        public int Quantity { get; set; }
        public string? ProductTypeId { get; set; }
    }

    public class ProductType : BaseEntity
    {
    }
}