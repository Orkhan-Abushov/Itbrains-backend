using MebelWeb.DAL;
using MebelWeb.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace DMAWebProject.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class ProductsController : Controller
    {
        private readonly AppDbContext appDbContext;

        public ProductsController(AppDbContext _appDbContext)
        {
            appDbContext = _appDbContext;
        }
        public IActionResult Index()

        {
            
            return View(appDbContext.Products.Include(x => x.Category).ToList());
        }

        public IActionResult Create()
        {
            ViewBag.Category = appDbContext.Categories.ToList();

            return View();
        }

        [HttpPost]
        public IActionResult Create(Products model)
        {

            if (!ModelState.IsValid)
            {
                ViewBag.Category = appDbContext.Categories.ToList();
                return View(model);
            }

            appDbContext.Products.Add(model);
            appDbContext.SaveChanges();
            return RedirectToAction("Index");
        }

        public IActionResult Edit(int id)
        {
            ViewBag.Category = appDbContext.Categories.ToList();
            var model = appDbContext.Products.FirstOrDefault(x => x.Id == id);

            return View(model);
        }
    }
}
