using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        // You can add more properties here to represent user data (e.g., email, role, etc.)
    }
}

