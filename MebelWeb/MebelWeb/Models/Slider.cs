using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using Microsoft.Build.Framework;
using System.ComponentModel.DataAnnotations.Schema;

namespace MebelWeb.Models
{
    public class Slider
    {
        public int Id { get; set; }
        [Required]
        public string Subtitle { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        public string? ImgUrl { get; set; }
        [NotMapped]
        [ValidateNever]
        public IFormFile ImgFile { get; set; }
        public bool IsCheck { get; set; } = false;
    }

}
