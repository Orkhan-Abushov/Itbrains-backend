using System.ComponentModel.DataAnnotations.Schema;

namespace DMAWebProject.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int UserId { get; set; }
        [ForeignKey("ProductId")]
        public Products Products { get; set; }

        [ForeignKey("UserId")]
        public User Users { get; set; }
    }
}