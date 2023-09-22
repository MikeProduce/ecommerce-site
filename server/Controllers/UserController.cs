using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly string? _key; // Remove the nullable modifier

        public UserController(ApplicationDbContext context)
        {
            _context = context;
            _key = Environment.GetEnvironmentVariable("SECRET_KEY");
            Console.WriteLine($"_key: {_key}");
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User userCredentials)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == userCredentials.Email && u.Password == userCredentials.Password);
            if (user == null)
            {
                return NotFound("Login failed: User not found or invalid credentials.");
            }

            // Generate JWT
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Email, user.Id.ToString()),
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_key)), SecurityAlgorithms.HmacSha256Signature),
                Issuer = "server",
                Audience = "client"
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);
            return Ok(new { Message = "Login successful!", User = user, Token = tokenString });
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
