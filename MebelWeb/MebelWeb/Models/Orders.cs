using System.ComponentModel.DataAnnotations.Schema;

namespace MebelWeb.Models
{
    public class Orders
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int ProgramUserId { get; set; }
        [ForeignKey("ProductId")]
        public Products Products { get; set; }

        [ForeignKey("ProgramUserId")]
        public ProgramUser programUser { get; set; }
    }
}
