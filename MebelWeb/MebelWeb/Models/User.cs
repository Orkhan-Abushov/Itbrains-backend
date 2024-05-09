namespace DMAWebProject.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public List<Order> Orders { get; set; }

    }
}