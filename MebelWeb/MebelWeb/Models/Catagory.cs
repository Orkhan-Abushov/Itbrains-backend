using MebelWeb.Models;
using System.ComponentModel.DataAnnotations;

namespace MebelWeb.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }

        public List<Products> Products { get; set; }
    }
}