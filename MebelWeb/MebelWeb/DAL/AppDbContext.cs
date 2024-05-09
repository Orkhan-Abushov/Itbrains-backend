using MebelWeb.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace MebelWeb.DAL
{
    public class AppDbContext: IdentityDbContext<ProgramUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
       
        public DbSet<Slider> Sliders  { get; set; }

    }
}
