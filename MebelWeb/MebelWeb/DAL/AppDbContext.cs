using MebelWeb.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;

namespace MebelWeb.DAL
{
    public class AppDbContext : IdentityDbContext<ProgramUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Slider> Sliders { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Products> Products { get; set; }
        public DbSet<Orders> Orders { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Orders>().HasData(
                new Orders { Id = 1, ProductId = 1, ProgramUserId = 1 },
                new Orders { Id = 2, ProductId = 2, ProgramUserId = 1 },
                new Orders { Id = 3, ProductId = 4, ProgramUserId = 2 }

                );
        }
    }
}
