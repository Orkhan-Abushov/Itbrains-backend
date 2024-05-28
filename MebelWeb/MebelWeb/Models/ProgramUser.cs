using MebelWeb.Models;
using Microsoft.AspNetCore.Identity;

namespace MebelWeb.Models
{
    public class ProgramUser:IdentityUser
    {
        public string Name { get; set; }
        public string Surename { get; set; }
        public int Age { get; set; }
        public List<Orders> Orders { get; set; }


    }
}
