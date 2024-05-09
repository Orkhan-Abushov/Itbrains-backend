using MebelWeb.DAL;
using Microsoft.AspNetCore.Mvc;

namespace MebelWeb.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class DashBoardController : Controller
    {
        private AppDbContext appDbContext;
        public DashBoardController(AppDbContext _appDbContext)
        {
            appDbContext = _appDbContext;
        }

        public IActionResult Index()
        {
            return View();
        }

    }
}
