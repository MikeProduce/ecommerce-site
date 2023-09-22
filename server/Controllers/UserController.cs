using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User userCredentials)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == userCredentials.Email && u.Password == userCredentials.Password);
            if (user == null)
            {
                return NotFound("Login failed: User not found or invalid credentials.");
            }

            return Ok(new { Message = "Login successful!", User = user });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User userCredentials)
        {
            try
            {
                var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == userCredentials.Email);
                if (existingUser != null)
                {
                    return BadRequest("User already exists.");
                }

                _context.Users.Add(userCredentials);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(Login), new { id = userCredentials.Id }, new { Message = "User created!" });
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine($"Error during user registration: {ex.Message}");
                return StatusCode(500, "An error occurred while registering the user.");
            }
        }
    }
}
