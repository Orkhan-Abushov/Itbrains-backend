using MebelWeb.DAL;
using MebelWeb.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace MebelWeb.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private readonly AppDbContext appDbContext;

        public HomeController(ILogger<HomeController> logger,AppDbContext _appDbContext)
        {
            _logger = logger;
            appDbContext=_appDbContext;
        }

        public IActionResult Index()
        {
            
            return View(appDbContext.Sliders.Where(x=>x.IsCheck !=false).ToList());
        }

        public IActionResult Aboute() 
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
